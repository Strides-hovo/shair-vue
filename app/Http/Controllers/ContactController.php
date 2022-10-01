<?php /** @noinspection PhpUndefinedMethodInspection */

/** @noinspection PhpUndefinedFieldInspection */

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use App\Models\Contact;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        return response()->success(Contact::first()->loads());
    }


    public function store(ContactRequest $request): JsonResponse
    {

        if ($request->has('id')){
            return $this->update($request, Contact::find($request->id));
        }
        else{
            $contact = Contact::create($request->validated());
            if ($request->has('translate')){

                $this->translate(array_merge($request->translate,['contact_id' => $contact->id]), $contact);
            }
            return response()->success($contact->loads());
        }
    }




    public function update(ContactRequest $request, Contact $contact): JsonResponse
    {
        $contact->update($request->validated());
        if ($request->has('translate')){
            $this->translate($request->translate, $contact);
        }
        return response()->success($contact->loads());
    }



    public function translate(array $translate, Contact $contact )
    {
        $validator = Validator::make($translate,[
            'title' => 'required|string',
            'branch_title' => 'required|string',
            'write_title' => 'required|string',
            'faq_title' => 'required|string',
            'fullName_title' => 'required|string',

            'tel_title' => 'required|string',
            'email_title' => 'required|string',
            'message_title' => 'required|string',
            'send_title' => 'required|string',
            'soc_set_title' => 'required|string',
            'time_title' => 'required|string',
            'time_list' => 'required',
            'additional_title' => 'required|string',

            'additional_tel' => 'required|string',
            'fax_title' => 'required|string',
            'fax' => 'required|string',
            'write_us_title' => 'required|string',
            'write_us_email' => 'required|string',
            'address_title' => 'required|string',
            'address' => 'required|string',
            'contact_id' => 'nullable|exists:contacts,id',
            'language_id' => 'required|exists:languages,id',

            'slug' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'meta_title' => 'nullable|string',
            'meta_keywords' => 'nullable|string',
            'footer_text' => 'nullable|string',

        ]);

        if ($validator->fails()){
            $errors = response()->json([
                'status' => 'Error',
                'message' => 'Ops! Some errors occurred',
                'errors' => $validator->errors()
            ], 400);
            throw new ValidationException($validator,$errors);
        }

        $contact->translations()->updateOrCreate(
            ['language_id' => $translate['language_id'], 'contact_id' => $contact->id],
            $validator->validated()
        );


    }


    /**
     * @throws ValidationException
     * @throws GuzzleException
     */
    public function sendEmail(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'fullName' => 'required|string',
            'tel' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        if ($validator->fails()){
            throw_validate($validator);
        }

        $token = $request->input('token');
        $valid_captcha = $this->checkRecaptcha($token);
        if (is_array($valid_captcha) ){
            return response()->error($valid_captcha[0],500,$valid_captcha);
        }
         $this->sending($validator->validated());

        return response()->success('message is sending');
    }


    /**
     * @throws GuzzleException
     */
    private function checkRecaptcha($token)
    {
        $url = 'https://www.google.com/recaptcha/api/siteverify';
        $secret = env('RECAPTCHA_SECRET');

        $response = (new Client)->post($url,[
            'form_params' => [
                'secret' => $secret,
                'response' => $token
            ]
        ]);
        $response = json_decode((string) $response->getBody(),true);

        return $response['success'] ? : $response['error-codes'];

    }


    private function sending(array $mail)
    {
        Mail::to(env('MAIL_ADMIN'))->send(new ContactMail($mail));
    }



}

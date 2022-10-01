<?php /** @noinspection PhpUndefinedMethodInspection */

namespace App\Http\Controllers;

use App\Http\Requests\HomeRequest;
use App\Models\Home;
use App\Traits\CustomValidate;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class HomeController extends Controller
{

    use CustomValidate;

    public function index()
    {
        try {
            $home = Home::first() ? Home::first()->loads() : Home::first();
            return response()->success($home);
        }
        catch (\Exception $e){
            return $e->getMessage();
        }
    }


    /**
     * @throws ValidationException
     */
    public function store(HomeRequest $request)
    {

        $page = Home::first();
        if ($page){
            $page->update($request->validated());
        }
        else{
            $page = Home::create($request->validated());
        }

        if ($request->has('translate')){
            $translate = $request->input('translate');
            $translate = array_merge($translate, ['home_id' => $page->id]);
            $this->translate($translate, $page);
        }
        try {
            return response()->success($page->loads()->refresh());
        }
        catch (\Exception $e){
            return response()->error($e->getMessage());
        }

    }



    /**
     * @throws ValidationException
     */
    private function translate(array $translate, Home $home): void
    {

        $data = self::ValidDates($translate,[
            'language_id' => 'required|exists:languages,id',
            'home_id' => 'required|exists:homes,id',
            'about_title' => 'nullable|string',
            'about_content' => 'nullable|string',
            'icon_title' => 'nullable|string',
            'icon_content' => 'nullable|string',

        ]);

        $home->translations()->upsert($data,['language_id','home_id']);
    }







}

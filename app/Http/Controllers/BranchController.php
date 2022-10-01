<?php /** @noinspection PhpUndefinedMethodInspection */

namespace App\Http\Controllers;

use App\Models\Branch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class BranchController extends Controller
{

    public function index()
    {
        return response()->success(Branch::withs()->get());
    }


    /**
     * @throws ValidationException
     */
    public function store(Request $request)
    {
        $branch = Branch::create([
            'map_lat' => $request->input('map_lat'),
            'map_lng' => $request->input('map_lng'),
        ]);

        if ($request->has('translate')) {
            $this->translate($request->input('translate'), $branch);
        }

        return response()->success($branch->loads());
    }


    /**
     * @throws ValidationException
     */
    public function update(Request $request, Branch $branch)
    {

        $branch->update([
            'sorting' => $request->input('sorting'),
            'status' => $request->input('status'),
            'map_lat' => $request->input('map_lat'),
            'map_lng' => $request->input('map_lng'),
        ]);


        if ($request->has('translate')) {
            $this->translate($request->input('translate'), $branch);
        }

        return response()->success($branch->loads());
    }


    public function destroy(Branch $branch)
    {
        $branch->delete();
        return response()->success('branch deleted');
    }


    /**
     * @throws ValidationException
     */
    public function translate(array $translate, Branch $branch)
    {

        $validator = Validator::make($translate, [
            'name_title' => 'required|string',
            'name' => 'required|string',
            'address_title' => 'required|string',
            'address' => 'required|string',
            'tel' => 'required|string',
            'tel_title' => 'required|string',
            'email' => 'required|string',
            'email_title' => 'required|string',
            'time_title' => 'required|string',
            'time' => 'required|string',
            'whats_title' => 'required|string',
            'whats_text' => 'required|string',
            'language_id' => 'required|exists:languages,id',
            'branch_id' => 'nullable|exists:branches,id',

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
        $branch->translations()->updateOrCreate(
            ['language_id' => $translate['language_id'], 'branch_id' => $branch->id],
            $validator->validated()
        );
    }
}

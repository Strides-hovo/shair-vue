<?php
/** @noinspection PhpUndefinedFieldInspection */
/** @noinspection PhpPossiblePolymorphicInvocationInspection */
/** @noinspection PhpUndefinedMethodInspection */

namespace App\Http\Controllers;


use App\Models\About;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AboutController extends Controller
{


    public function index(): JsonResponse
    {
        return response()->success(About::withs()->first());
    }


    public function store(Request $request)
    {
        try {
            if ($request->has('id') || $request->has('translate.about_id') ){
                $about = About::find($request->translate['about_id']);
            }
            else{
                $about = About::Create([]);
                $translate = $request->input('translate');

                $translate = array_merge($translate, ['about_id' => $about->id]);
                $request->merge(['translate' => $translate]);
            }

            $this->translate($request, $about);

        }
        catch (\Exception $e){
            return response()->error($e->getMessage());
        }


        return response()->success($about->loads());
    }






    private function translate(Request $request, About $about)
    {

        $translate = $request->validate([
            'translate.about_id' => 'required|exists:abouts,id',
            'translate.title' => 'required|string',
            'translate.content' => 'required|string',
            'translate.btn_price_list' => 'required|string',
            'translate.btn_products' => 'required|string',
        ]);

        $translate = array_merge_recursive($translate,  meta_translate($request));
        About::setLanguageId($request->translate['language_id']);

        if ( !$about->translate ) {
            $about->translate()->create($translate['translate']);
        }
        else {
            $about->translate()->update($translate['translate']);
        }

    }


    public function uploadImage(Request $request): JsonResponse
    {

        $file = $request->file('file');
        $imageNewName = time() . '.' . $file->clientExtension();
        $imageName = $file->getClientOriginalName();

        $path = $file->storeAs('pages', $imageName, 'public');

        return response()->json([
            'location' => '/storage/' . $path
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\LanguageRequest;
use App\Models\Language;
use App\Services\Translate;
use Exception;
use Illuminate\Http\Request;

class LanguageController extends Controller
{

    private string $error_message = '';

    public function index()
    {
        return response()->success(Language::all());
    }


    public function store(LanguageRequest $request)
    {
        try {
            $language = Language::create($request->validated());
            $request->merge(['key' => $language->code]);
            $file = file_get_contents(resource_path("js/translate/en.json"));
            $request->merge(['data' => json_decode($file) ]);
            Translate::store($request);
        }
        catch (\Exception $e) {
            return response()->error($e->getMessage());
        }
        return response()->success($language);
    }


    public function show(Language $language)
    {
        return response()->success($language);
    }


    public function update(LanguageRequest $request,  $id )
    {

        $language = Language::find($id);

        try {
            $old_key = $language->code;
            $new_key = $request->code;
            if ($request->has('code')){
                Translate::update($old_key, $new_key);
            }
            $language->update($request->validated());
        }
        catch (\Exception $e) {
            return response()->error($e->getMessage());
        }

        return response()->success($language);
    }


    public function destroy($ids)
    {

        if (is_string($ids)){
            $ids = explode(',', $ids);
        }

        try {
            Translate::destroy($ids);
            Language::whereIn('id', $ids)->delete();
        }
        catch (\Exception $e) {
            report($e);
            $this->error_message = 'Languages cannot be deleted';
            return response()->error( $this->error_message );
        }

        return response()->success(Language::all());

    }
}

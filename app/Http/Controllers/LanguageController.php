<?php

namespace App\Http\Controllers;

use App\Http\Requests\LanguageRequest;
use App\Models\Language;
use Exception;
use Illuminate\Http\Request;

class LanguageController extends Controller
{

    private $error_message;

    public function index()
    {
        return response()->success(Language::all());
    }


    public function store(LanguageRequest $request)
    {
        try {
            $language = Language::create($request->validated());
        } catch (\Exception $e) {
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
            $language->fill($request->validated());
            $language->save();
        }
        catch (\Exception $e) {
            return response()->error($e->getMessage());
        }

        return response()->success($language);
    }


    public function destroy($ids)
    {

        Language::whereIn('id', explode(',', $ids))->each(function ($language) {
            try {
                $language->delete();
                return response()->success(Language::all());
            }
            catch ( \Exception $e) {
                report($e);
                $this->error_message = 'Languages cannot be deleted';
                return response()->error( $this->error_message );
            }
        });
        return response()->error( $this->error_message );
    }
}

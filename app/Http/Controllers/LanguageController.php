<?php

namespace App\Http\Controllers;

use App\Http\Requests\LanguageRequest;
use App\Models\Language;
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
        debug($request->all());
        $language = Language::find($id);
        try {
            $language->fill($request->validated());
            $language->save();
        } catch (\Exception $e) {
            return response()->error($e->getMessage());
        }

        return response()->success($language);
    }


    public function destroy($ids)
    {

        Language::whereIn('id', explode(',', $ids))->each(function ($language) {

            try {
                $language->delete();
            } catch (\Exception $e) {
                $this->error_message[] = 'Languages cannot be deleted';
            }

            /*foreach ($language->getAllRelations()['Illuminate\Database\Eloquent\Relations\HasMany'] as $relation) {
                if ($language->$relation ){
                    $language->$relation()->update(['language_id'  => 1]) ;
                }
            }*/

        });

        return response()->success(Language::all(), 200, $this->error_message);
    }
}

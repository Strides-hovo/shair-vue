<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Http\Requests\AboutRequest;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    

    public function index()
    {
        return response()->success(About::all());
    }

   
    public function store(AboutRequest $request)
    {
        debug( $request->all() );
        try{
            $about = About::create($request->validated());
            return response()->success($about);
        }
        catch( \Exeption $e){
            return response()->error($e->getMessage());
        }
        
    }

  
    public function show(About $about)
    {
        return response()->success($about);
    }

  
    public function update(AboutRequest $request, About $about)
    {


        $about->update($request->validated());
        return response()->success($about);
    }

   
    public function destroy(About $about)
    {
        $about->delete();
        return response()->success('Page Deleted');
    }


    public function uploadImage(Request $request){

        $file = $request->file('file');
        $imageNewName = time() . '.' . $file->clientExtension();
        $imageName = $file->getClientOriginalName();

        $path = $file->storeAs('pages', $imageName,'public');

        return response()->json([
            'location' => '/storage/' . $path
        ]);
    }
}

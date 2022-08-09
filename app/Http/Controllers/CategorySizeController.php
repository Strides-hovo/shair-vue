<?php

namespace App\Http\Controllers;

use App\Models\CategorySize;
use Illuminate\Http\Request;

class CategorySizeController extends Controller
{




    public function store(Request $request)
    {

        $valid = $request->validate([
            'width' => 'required|numeric',
            'height' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
        ]);

        $size  = CategorySize::create($valid);
        return response()->success($size->refresh());
    }





    public function update(Request $request, CategorySize $categorySize)
    {

        $valid = $request->validate([
            'width' => 'nullable|numeric',
            'height' => 'nullable|numeric',
            'status' => 'nullable|boolean',
            'sorting' => 'nullable|numeric',
            'by_default' => 'nullable|boolean',
        ]);

        if ($valid['by_default']){
            CategorySize::whereNot('id',$categorySize->id)->update(['by_default' => false]);
        }
        $categorySize->update($valid);

        return response()->success($categorySize);
    }


    public function destroy( $ids)
    {
        if (is_string($ids)){
            $ids = explode(',',$ids) ;
        }

        $count = CategorySize::whereIn('id',$ids)->delete();
        return response()->success($count . ' Sizes deleted' );
    }

}

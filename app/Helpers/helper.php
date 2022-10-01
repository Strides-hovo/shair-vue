<?php


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

function StrPrepareForValidation($request, $model,  $type = 'image'): void
{

    $name = explode('/', $request->$type); //storage/video.mp4

    $type_name = end($name); //img.png

    $extension = substr( $type_name, strrpos( $type_name, '.') ) ;//.png

    $coll_name = $type . '_name';

    if ( !is_null($request->$coll_name) && strlen($request->$coll_name) > 1) {

        $new_name = str_replace($type_name,$request->$coll_name . $extension,$request->$type);//new_name.mp4

        $array = explode('/', $new_name);
        $_name = end($array);

        if (Storage::exists("public/{$request->$type}")) {

            Storage::move("public/{$request->$type}", "public/{$new_name}");

            $model::where($type, '/storage/' . $type_name)
                ->update([$type => '/storage/' . $new_name, "{$type}_name" => strstr($_name, '.', 1)]);

            $request->merge(["{$type}_name" => strstr($_name, '.', 1), $type => $new_name]);
        }
    } else {
        $request->merge(["{$type}_name" => strstr($type_name, '.', 1)]);
    }
}


/**
 * model image_name, request new image name
 */
function changeImageName(string $imageOldName,string $imageNewName ): string|null{

    $imageOldName = str_replace('/storage','',$imageOldName);

    if (Storage::exists("public{$imageOldName}")){

        $path = explode('/',$imageOldName);
        $name = end($path);

        $newPath = str_replace(strstr($name,'.',true),$imageNewName,$path);
        $newPath = implode('/',$newPath);

        Storage::copy("public{$imageOldName}", "public/{$newPath}");

        return '/storage' . $newPath;
         
    }
    return null;
}




function meta_migrations (Blueprint &$table) : void {

    $table->string('slug',100)->nullable();
    $table->string('meta_keywords')->nullable();
    $table->string('meta_title')->nullable();
    $table->string('meta_description')->nullable();
    $table->text('footer_text')->nullable();
    $table->foreignId('language_id')->index()->constrained()->onDelete('cascade');

}


function meta_seeder(array $array, $faker, $language_id = null ): array
{

    return array_merge($array, [
        'slug' => $faker->slug,
        'meta_title' => $faker->name,
        'meta_description' => $faker->name,
        'meta_keywords' => $faker->name,
        'footer_text' => $faker->text(120),
        'language_id' => $language_id ? :$faker->randomElement([1,2]),
    ]);
}

function meta_translate(Request $request): array{
    $validator = Validator::make($request->all(), [
        'translate.slug' => 'nullable|string',
        'translate.meta_description' => 'nullable|string',
        'translate.meta_title' => 'nullable|string',
        'translate.meta_keywords' => 'nullable|string',
        'translate.footer_text' => 'nullable|string',
        'translate.language_id' => 'required|exists:languages,id',
    ]);
    if ($validator->fails()){
        throw new ValidationException($validator,$validator->errors() );
    }

    return $validator->validate();
    /*return $request->validate([
        'translate.slug' => 'nullable|string',
        'translate.meta_description' => 'nullable|string',
        'translate.meta_title' => 'nullable|string',
        'translate.meta_keywords' => 'nullable|string',
        'translate.language_id' => 'required|exists:languages,id',
    ]);*/
}


function multidimensional_key_exists(string $key,array $array): bool{

    if (array_key_exists($key, $array)) return true;
    foreach ($array as $item){
        if (array_key_exists($key, $item)) return true;
    }
    return false;
}

function filter_product_additional(string $key,array $array){
    if (array_key_exists($key, $array)) return $array[$key];
    $data = [];
    foreach ($array as $item){
        if (array_key_exists($key, $item)) $data[] = $item[$key];
    }
    return !empty($data) ? $data : $array;
}


function str_debug( $data, $type = false): void{
    if ($type)
        var_dump('<pre>',$data, '</pre>');
    else echo '<pre>' . print_r($data, true) . '</pre>';
}


function str_chunk(iterable $items, $prefix = 'tr_') :array
{
    if(empty($items)) return [];
    $vars = [];
    foreach ($items as $k => $item) {
        $var = $prefix . $k;
        $vars[] = $var;
        $$var = $item;
    }
    $data = [];
    foreach ($vars as $var) {
        $data[$var] = $$var;
    }
    return $data;
}



function OneDimensional(array $array): array{
    $result = [];
    array_walk_recursive($array, function ($item, $key) use (&$result) {
        $result[] = $item;
    });
    return $result;
}


function array_repeat(int $n,array $array): array{
   return array_merge(...array_fill(0, $n, $array));
}



function merge_translate($request,Model $model, string $key): void{
    $translate = $request->input('translate');
    $translate = array_merge_recursive($translate, [$key => $model->id]);
    $request->merge(['translate' => $translate]);

}


function generate_translate($i = 0 ): array{

    static $id = 1;
    $id = $i % 2 === 0 ? ($id + 1) : $id;
    $data['id']  = $id;
    $data['lang'] = $i % 2 === 0 ? 1 : 2;

    //$i++;
    return $data;
}


function throw_validate($validator){
    $errors = response()->json([
        'status' => 'Error',
        'message' => 'Ops! Some errors occurred',
        'errors' => $validator->errors()
    ], 400);
    throw new ValidationException($validator, $errors);
}


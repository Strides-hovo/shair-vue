<?php
/** @noinspection PhpUndefinedMethodInspection */
/** @noinspection PhpArrayShapeAttributeCanBeAddedInspection */

namespace App\Imports;

use App\Models\Product;
use App\Models\ProductTranslate;
use ErrorException;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ProductsImport implements ToCollection, WithHeadingRow, SkipsEmptyRows
{


    private static int $product_id;


    /**
     * @param Collection $rows
     * @return void
     */
    public function collection(Collection $rows): void
    {
        $rows->filter(function ($row) {
            $this->product($row->all());

            $row['product_id'] = self::$product_id;
            $cols = $this->translation_fields($row->all());
            ProductTranslate::create($cols);
        });
    }


    /**
     * @throws ValidationException
     * @throws ErrorException
     */
    public function product(array $row)
    {
        $product_data = $this->product_fields($row);
        if (!empty($product_data)) {
            if (!empty($row['instruction_file'])){
                $product_data['instruction_file'] = $this->upload($row['instruction_file']);
            }
            $product = Product::create($product_data);
            self::$product_id = $product->id;
        }
    }


    /**
     * @throws ValidationException
     */
    public function product_fields($row): array
    {
        if (empty($row['category_id'])) {
            return [];
        }

        return $this->customValidate($row, [
            'category_id' => 'required|exists:categories,id',
            'Instruction_file' => 'nullable|string',
            'status' => 'required|boolean',
            'flag' => 'required|string|in:noting,stock,sale,new',
            'rent' => 'required|boolean',
            'sale' => 'required|boolean',
            'guarantee' => 'required|boolean',
            'dimension' => 'required|boolean',
        ], []);
    }


    /**
     * @throws ValidationException
     */
    public function translation_fields(array $row): array
    {
        return $this->customValidate($row, [
            'short_description' => 'required|string',
            'description' => 'required|string',
            'name' => 'required|string',
            'advantage' => 'required|string',
            'flag_text' => 'required|string',
            'language_id' => 'required|exists:languages,id',
            'product_id' => 'required|exists:products,id',
            'slug' => 'required|string',
        ], []);
    }


    /**
     * @throws ValidationException
     */
    public function customValidate($rows = [], $rules = [], $errors = []): array
    {
        $validator = Validator::make($rows, $rules);
        if ($errors) {
            list($field, $message) = $errors;
            $validator->errors()->add($field, $message);
        }

        $errors = response()->json([
            'status' => 'Error',
            'message' => 'Ops! Some errors occurred',
            'errors' => $validator->errors()
        ], 400);

        if ($validator->fails()) {
            throw new ValidationException($validator, $errors);
        }
        return $validator->validate();
    }


    /**
     * @throws ValidationException
     */
    private function upload(string $pdfPath): ?string
    {
        try {
            $path = storage_path('app/public/product/');
            $name = File::name($pdfPath) . '.' . File::extension($pdfPath);
            if ($name) {
                copy($pdfPath, $path . $name);
                return "/storage/product/$name";
            }
        } catch (ErrorException $e) {
            $this->customValidate([], [], ['instruction_file', $e->getMessage()]);
        }
        return null;
    }


}

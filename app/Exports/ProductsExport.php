<?php




namespace App\Exports;

use App\Models\Product;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Exceptions\LaravelExcelException ;
use Mockery\Exception;
use Illuminate\Contracts\View\View;


class ProductsExport
    //, WithMapping
    //, WithHeadings
{

    use Exportable;

    private $productsData;
    private Collection $products;
    private Collection $product;
    private ?int $id;



    const PRODUCT_FIELDS = [
        'category_id','status','Instruction_file','rent','sale','guarantee','dimension','flag',
    ];

    const TRANSLATE_FIELDS = [
        'language_id','name','short_description','description','advantage','flag_text','slug','meta_title','meta_description','meta_keywords'
    ];



    public function setProducts(): ProductsExport
    {
        $this->products = $this->productsData
            ->map(function ($product){
                $product['translations'] = $product->translations->map(function( $translation )  {
                    unset($translation['id']);
                    unset($translation['product_id']);
                    return $translation;
                });
                //return ( $product );

                return collect($product->toArray())
                    ->except(['created_at', 'updated_at','id'])
                    ;
            });


        return $this;
    }


    public function setProduct(int $id = null): static
    {
        $this->product = $id ? collect($this->productsData->find($id))->except(['created_at', 'updated_at','id']) : collect(Product::first(self::PRODUCT_FIELDS));
        return $this;
    }




    public function __construct(int $id = null)
    {
        $this->id = $id;
        $this->productsData = Product::get();
        $this
            ->setProducts()
            ->setProduct();
        //$this->product = $this->product($id);

        //dd( $this->products, $this->productsData );
    }



    public function map($row): array
    {
        /*array_map(function ($item) {
            dd($item);
        }, $row['translations']);*/
        //return ($row->toArray() );

        return  [
            self::PRODUCT_FIELDS,
            $row->only(self::PRODUCT_FIELDS)->toArray(),
            //[$row['translations'][0]]
        ] ;


    }

    public function collection(): Collection
    {
        return  $this->products;
    }



    public function headings(): array
    {
        /*$this->setProductCells();
        $this->productsData->each(function ($product) {
            $this
                ->setTranslateCells( $product )
                ->setTranslations( $product );
        });

        $product = array_merge_recursive( [$this->product_cells], $this->products->toArray() );
        $translations = array_merge([$this->translate_cells], $this->translations );
        dd( array_merge( $product, $translations ) );
        return array_merge( $product, $translations );*/

        dd( $this->products );
        return  [
            self::PRODUCT_FIELDS,
            $this->products->only(self::PRODUCT_FIELDS)->toArray(),
            //[$row['translations'][0]]
        ] ;
    }











//
//    /**
//     * @param Product $product
//     * @return ProductExport
//     */
//    public function setTranslateCells(Product $product)
//    {
//        $this->translate_cells = array_keys($product->translations->first()->toArray());
//        return $this;
//    }
//
//    /**
//     * @param Product $product
//     * @return ProductExport
//     */
//    public function setTranslations(Product $product)
//    {
//        $this->translations[] = $product->translations;
//        return $this;
//    }
//
//    /**
//     *
//     * @return ProductExport
//     */
//    public function setProductCells(): ProductExport
//    {
//        $this->product_cells = array_keys($this->product);
//        return $this;
//    }
//
//
//    private function product(int $id = null)
//    {
//        return $id ? collect($this->productsData->find($id))->except(['created_at', 'updated_at','id']) : $this->products->first();
//    }



}

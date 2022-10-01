<?php /** @noinspection PhpMissingReturnTypeInspection */

namespace App\Models;

use App\InterFaces\MakeRelations;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use \Staudenmeir\EloquentHasManyDeep\HasRelationships;

class Page extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages, HasRelationships;

    public $timestamps = false;

    protected $fillable = ['name','sub_menu'];

    protected $attributes = [
        'sub_menu' => false
    ];

    private string $relationTranslate = PageTranslate::class;


    public static function withs( $frontend = false): Builder
    {
        return self::with(['translations']);
    }

    public function loads(): MakeRelations
    {
        return $this->load([ 'translations']);
    }


    public function children()
    {
        return $this->hasMany(self::class,'parent_id','id');
    }


    public function page(): ?HasOne
    {
        return null;
    }


    public function pages()
    {
        $article = $this
            ->hasManyThrough(ArticleTranslate::class,Article::class,'page_name','article_id','name','id')
        ->select('slug','meta_keywords','meta_description','footer_text','language_id')
        ;
        $about = $this
            ->hasManyThrough(AboutTranslate::class,About::class,'page_name','about_id','name','id')
            ->select('slug','meta_keywords','meta_description','footer_text','language_id');

        return $about;
        //return $this->hasManyDeep()  ;
    }

}

<?php /** @noinspection PhpMissingReturnTypeInspection */

namespace App\Models;

use App\InterFaces\MakeRelations;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;


class Page extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages;

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

}

<?php /** @noinspection PhpMissingReturnTypeInspection */
/** @noinspection PhpUndefinedFieldInspection */

/** @noinspection PhpUndefinedMethodInspection */

namespace App\Http\Controllers;

use App\Http\Requests\ArticleRequest;
use App\Models\Article;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ArticleController extends Controller
{


    public function index(Request $request): JsonResponse
    {
        $frontend = (bool)$request->frontend;

        return response()->success(Article::withs($frontend)->get()
            ->append('recommended')
        );
    }


    public function store(ArticleRequest $request): JsonResponse
    {
        $article = Article::create($request->validated());

        $translate = $request->input('translate');
        $translate = array_merge($translate, ['article_id' => $article->id]);
        $request->merge(['translate' => $translate]);

        $this->translate($request, $article);
        return response()->success($article->loads());
    }


    public function update(ArticleRequest $request, Article $article)
    {

        try {
            $article->update($request->validated());
            if ($request->has('translate')) {
                Article::setLanguageId($request->translate['language_id']);
                $translate = $this->translate($request);
                if (!$article->translate) {
                    $article->translate()->create($translate['translate']);
                } else {
                    $article->translate()->update($translate['translate']);
                }
            }
            return response()->success($article->loads());
        } catch (HttpResponseException $e) {
            return response()->error($e->getMessage());
        }
    }


    private function translate(Request $request)
    {

        $translate = $request->validate([
            'translate.author' => 'nullable|string',
            'translate.article_id' => 'required|exists:articles,id',
            'translate.name' => 'nullable|string',
            'translate.image_name' => 'nullable|string',
            'translate.image_alt' => 'nullable|string',
            'translate.image_title' => 'nullable|string',
            'translate.short_description' => 'nullable|string',
            'translate.description' => 'nullable|string',
            'translate.footer_text' => 'nullable|string',
        ]);

        return array_merge_recursive($translate, meta_translate($request));
    }


    public function destroy($id)
    {
        $count = Article::find($id)->delete();
        return response()->success($count);
    }
}

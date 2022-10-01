<?php /** @noinspection ALL */

/** @noinspection PhpUndefinedMethodInspection */

namespace App\Http\Controllers;

use App\Models\Home;
use App\Models\HomeIcon;
use Illuminate\Http\Request;

class HomeIconController extends Controller
{


    public function store(Request $request, ?Home $page = null)
    {
        if (!$page) {
            $page = Home::create([]);
        }
        try {
            $icon = $page->icons()->updateOrCreate(
                ['icon' => $request->input('icon')['icon'], 'home_id' => $page->id],
                ['icon' => $request->input('icon')['icon'], 'home_id' => $page->id]);

            if (isset($request->input('icon')['translate'])) {
                $this->translate($request->input('icon')['translate'], $icon);
            }
            return response()->success($page->loads());
        } catch (\Exception $e) {
            return response()->error($e->getMessage());
        }


    }


    public function update(Request $request, HomeIcon $icon)
    {

        $icon->update(['icon' => $request->input('icon')]);
        if ($request->has('translate')){
            $this->translate($request->input('translate'),$icon);
        }
        return response()->success($icon->loads());
    }


    public function translate(array $translate, HomeIcon $icon)
    {

        $icon->translations()->updateOrCreate(
            ['home_icon_id' => $icon['id'], 'language_id' => $translate['language_id']],
            ['home_icon_id' => $icon['id'], 'language_id' => $translate['language_id'], 'title' => $translate['title'] ?? null]
        );
    }


    public function destroy(HomeIcon $icon)
    {
        $icon->delete();
        return response()->success('icon deleted');
    }

}

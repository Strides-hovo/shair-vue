<?php

namespace App\Console\Commands;


use Illuminate\Console\Command;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\File;


class apiRoutes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'server:routes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    protected Router $router;

    public function __construct(Router $router )
    {
        parent::__construct();
        $this->router = $router;
    }


    public function handle()
    {
        $routes = [];
        foreach ($this->router->getRoutes() as $route) {
            if (str_contains( $route->uri,'admin')){
                $routes[$route->getName()] = $route->uri;
            }
        }
        File::put('resources/js/routes/routes.json',json_encode($routes,JSON_PRETTY_PRINT));
        return null;
    }
}

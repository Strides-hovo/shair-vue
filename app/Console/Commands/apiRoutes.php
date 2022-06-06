<?php

namespace App\Console\Commands;

use File;
use Illuminate\Console\Command;
use Illuminate\Routing\Router;

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

    protected $router;

    public function __construct(Router $router )
    {
        parent::__construct();
        $this->router = $router;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $routes = [];
        foreach ($this->router->getRoutes() as $route) {
            if (str_contains( $route->uri,'api')){
                $routes[$route->getName()] = $route->uri;
            }

        }
        File::put('resources/js/routes.json',json_encode($routes,JSON_PRETTY_PRINT));
    }
}

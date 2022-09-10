<?php

namespace App\Exceptions;


use Exception;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;
use Illuminate\Support\Arr;
//use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

 
    // public function register(): void
    // {
       
    //     $this->renderable(function (Exception $exception, $request) {

    //         dd(  $exception instanceof ValidationException );
    //         if ($request->is('api/*')){

    //             return response()->error($request->errors(),$e->getStatusCode() );
    //         }
    //     });
    // }


//        public function render($request, Throwable|ValidationException|NotFoundHttpException|\ErrorException $exception)
//        {
////            dd($exception);
//            if ($exception instanceof ModelNotFoundException) {
//                return response()->json(['error' => 'Entry for '.str_replace('App\\', '', $exception->getModel()).' not found'], 404);
//            }
//
//             else if ($exception instanceof RequestException) {
//                return response()->json(['error' => 'External API call failed.'], 500);
//            }
//
//             else if ($exception instanceof ValidationException) {
//                return response()->json(['error' => 'External API call failed. ppp'], 500);
//            }
//
//             else if ($exception instanceof \ErrorException) {
//                return response()->json(['error' => 'External API call failed. rr'], 500);
//            }
//             else if ($exception instanceof NotFoundHttpException) {
//                return response()->json(['error' => $exception->getStatusCode() ], 500);
//            }
//
//            return parent::render($request, $exception);
//
//        }



    
}

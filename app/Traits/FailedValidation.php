<?php /** @noinspection PhpUndefinedMethodInspection */

namespace App\Traits;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;

trait FailedValidation
{

     protected function failedValidation(Validator $validator)
     {
         $errors = response()->json([
             'status' => 'Error',
             'message' => 'Ops! Some errors occurred',
             'errors' => $validator->errors()
         ], 400);

         throw (new ValidationException($validator, $errors))
             ->errorBag($this->errorBag)
             ->redirectTo($this->getRedirectUrl());
     }
}
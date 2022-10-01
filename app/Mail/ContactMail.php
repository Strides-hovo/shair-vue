<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public array $mail;

    public function __construct(array $mail)
    {
        $this->mail = $mail;
    }


    public function build()
    {
        return $this->view('mail.contact')->with(['mail' => $this->mail]);
    }
}

<?php
    $to = "seva.822@mail.ru";
    $from = trim($_POST['email']);
    $message = htmlspecialchars($_POST['text']);
    $message = urldecode($message);
    $message = trim($_POST['text']);

    $headers = "From: $from" . "\r\n" . 
    "Reply-to: $to" . "\r\n" .
    "X-mailer: PHP/" . phpversion();

    if(mail($to, $message, $headers)){
        header('location: index.php');
    }
    else{
        header('location: contacts.php');
    }





?>
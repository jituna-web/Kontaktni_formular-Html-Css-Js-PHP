<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];

if(!empty($email) && !empty($message)){ 
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $receiver = "mia.jitus@seznam.cz"; //email příjemce
        $subject = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards,\n$name";
        $sender = "From: $email"; //odesílatel
        if(mail($receiver, $subject, $body, $sender)){
            echo "Vaše zpráva byla odeslána";
        } else {
            echo "Omlouváme se, nepodařilo se odeslat vaši zprávu";
        }
    } else {
        echo "Zadejte platnout emailovou adresu!";
    }
} else{
    echo " Email a zpráva jsou povinné!";
}



?>
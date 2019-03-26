<?php

    $v_email = $_POST["email"];
    $message = $_POST["message"];

    $email_my = "kamransharma12@gmail.com";

    $email_sub = "help form subbmision";
 
    $email_body = "email: $v_email. \n".
          "message: $message. \n ";

        
     
          $to = "kamransharma12@gmail.com";
                  
           $headere = "from: $email_from \r\n";

           $headere = "replay-to:: $email_my \r\n";
         
           mail(sto,$email_subject,$email_body,$headere);


           header("location: oxford.html");
           

?>
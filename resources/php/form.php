<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$from = "From: PShilling Server";
$to = "p.shilling@ashnola.co.uk";
$subject = "Server Contact";
$body = "From: $name\n E-Mail: $email\n Message:\n $message";
mail ($to, $subject, $body, $from)
?>
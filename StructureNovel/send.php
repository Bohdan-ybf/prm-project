<?php
$result = '';
$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$comment = $_POST["comment"];
$message = '
                <html>
                <head>
                  <title>New application - Pimakina.prmgroup.com.ua</title>
                </head>
                <body>
                  <p><b>Name:</b> ' . $name . '</p>
                  <p><b>Phome number:</b> <a href="tel:' . $phone . '">' . $phone . '</a></p>
                  <p><b>Email:</b> <a href="mailto:' . $email . '">' . $email . '</a></p>
                  <p><b>Comment:</b> ' . $comment . '</p>
                </body>
                </html>
                ';

//$to = $email;
$to = 'company.prm.group@gmail.com';
$subject = 'New application - Pimakina.prmgroup.com.ua';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: info@pimakina.prmgroup.com.ua' . "\r\n" .
    'Reply-To: info@pimakina.prmgroup.com.ua' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo 'success';
} else {
    echo "Error";
}
<?php
include "../connect.php";

$phone = $_POST['phone'];
$phone2 = $_POST['phone2'];
$view_phone = $_POST['view_phone'];
$view_phone2 = $_POST['view_phone2'];
$wa = $_POST['wa'];
$telegram = $_POST['telegram'];
$insta = $_POST['insta'];
$mail = $_POST['mail'];
$clock = $_POST['clock'];

if ($connection) {
  mysqli_query($connection, "UPDATE `contact` SET `phone` = '$phone', `phone2` = '$phone2', `view_phone` = '$view_phone', `view_phone2` = '$view_phone2', `wa` = '$wa', `telegram` = '$telegram', `insta` = '$insta', `mail` = '$mail', `clock` = '$clock'  WHERE `contact`.`id` = 1;");
}

mysqli_close($connection);
exit;

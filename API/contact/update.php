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
$img = '';

if (isset($_FILES['img'])) {
	make_upload($_FILES['img']);
}

if ($connection) {
  mysqli_query($connection, "UPDATE `contact` SET `phone` = '$phone', `phone2` = '$phone2', `view_phone` = '$view_phone', `view_phone2` = '$view_phone2', `wa` = '$wa', `telegram` = '$telegram', `insta` = '$insta', `mail` = '$mail', `clock` = '$clock', `img` = '$img'  WHERE `contact`.`id` = 1;");
}

function make_upload($file)
{
	// формируем уникальное имя картинки: name и случайное число
	$name = 'r-' . mt_rand(0, 10000) . $file['name'];
	// формируем путь к папке загрузки
	$uploaddir = '../../images/contact/';
	$uploadfile = $uploaddir . basename($name);
	// переносим файл в папку
	move_uploaded_file($file['tmp_name'], $uploadfile);

	$GLOBALS['img'] = $name;
}

mysqli_close($connection);
exit;

<?php
include "../connect.php";

$id = $_POST['id'];
$name = $_POST['name'];
$description = $_POST['description'];
$photo = '';

// если была произведена отправка формы
if (isset($_FILES['photo'])) {
	make_upload($_FILES['photo']);
}

if ($connection) {
	mysqli_query($connection, "UPDATE `feedback` SET `name` = '$name', `description` = '$description', `moder` = 'true'  WHERE `feedback`.`id` = '$id';");
}
if ($photo) {
	mysqli_query($connection, "UPDATE `feedback` SET `photo` = '$photo'  WHERE `feedback`.`id` = '$id';");
}

function make_upload($file)
{
	// формируем уникальное имя картинки: name и случайное число
	$name = 'r-' . mt_rand(0, 10000) . $file['name'];
	// формируем путь к папке загрузки
	$uploaddir = '../../images/feedback/';
	$uploadfile = $uploaddir . basename($name);
	// переносим файл в папку
	move_uploaded_file($file['tmp_name'], $uploadfile);

	$GLOBALS['photo'] = $name;
}
mysqli_close($connection);
// echo '<script>location.replace("/admin/pages/main/#portfolio");</script>';
// header('Location: http://admindjalgan.ru/admin/');
exit();

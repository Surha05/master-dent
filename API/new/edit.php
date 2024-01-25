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
	mysqli_query($connection, "UPDATE `new` SET `name` = '$name', `description` = '$description'  WHERE `new`.`id` = '$id';");
}
if ($photo) {
	mysqli_query($connection, "UPDATE `new` SET `photo` = '$photo'  WHERE `new`.`id` = '$id';");
}

function make_upload($file)
{
	// формируем уникальное имя картинки: name и случайное число
	$name = 'r-' . mt_rand(0, 10000) . $file['name'];
	// формируем путь к папке загрузки
	$uploaddir = '../../img/new/';
	$uploadfile = $uploaddir . basename($name);
	// переносим файл в папку
	move_uploaded_file($file['tmp_name'], $uploadfile);

	$GLOBALS['photo'] = $name;
}
mysqli_close($connection);
// echo '<script>location.replace("/admin/pages/main/#portfolio");</script>';
// header('Location: http://admindjalgan.ru/admin/');
exit();

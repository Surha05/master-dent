<?php

include '../connect.php';

$name = $_POST['name'];
$description = $_POST['description'];
$photo = 'default.png';
$moder = 'false';
if($_POST['moder']) $moder = $_POST['moder'];

if (isset($_FILES['photo'])) {
	make_upload($_FILES['photo']);
}

if ($connection) {
	mysqli_query($connection, "INSERT INTO `feedback` (`id`, `name`, `photo`, `description`, `moder`) VALUES (NULL, '$name', '$photo', '$description', '$moder');");
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
// echo '<script>location.replace("/admin/pages/rooms/");</script>';
// header('Location: http://admindjalgan.ru/admin/');

exit();
?>
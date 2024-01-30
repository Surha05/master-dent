<?php

include '../connect.php';

$name = $_POST['name'];
$description = $_POST['description'];
$full_description = $_POST['full_description'];
$photo = '';

if (isset($_FILES['photo'])) {
	make_upload($_FILES['photo']);
}

if ($connection) {
	mysqli_query($connection, "INSERT INTO `product` (`id`, `name`, `photo`, `description`, `full_description`) VALUES (NULL, '$name', '$photo', '$description', '$full_description');");
}

function make_upload($file)
{
	// формируем уникальное имя картинки: name и случайное число
	$name = 'r-' . mt_rand(0, 10000) . $file['name'];
	// формируем путь к папке загрузки
	$uploaddir = '../../images/product/';
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
<?php
include "../connect.php";

$title = $_POST['title'];
$description = $_POST['description'];
$button = $_POST['button'];
$photo = '';

if (isset($_FILES['photo'])) {
	make_upload($_FILES['photo']);
}

if ($connection) {
  mysqli_query($connection, "UPDATE `about` SET `title` = '$title', `description` = '$description', `button` = '$button'  WHERE `about`.`id` = 1;");

  if ($photo) {
    mysqli_query($connection, "UPDATE `about` SET `photo` = '$photo'  WHERE `about`.`id` = 1;");
  }
}

function make_upload($file) {
	$name = 'r-' . mt_rand(0, 10000) . $file['name'];
	$uploaddir = '../../images/about/';
	$uploadfile = $uploaddir . basename($name);
	move_uploaded_file($file['tmp_name'], $uploadfile);

	$GLOBALS['photo'] = $name;
}

mysqli_close($connection);
// echo '<script>location.replace("/admin/pages/main/#about");</script>';
// header('Location: http://admindjalgan.ru/admin/');
exit;

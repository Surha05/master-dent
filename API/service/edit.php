<?php
include "../connect.php";

$id = $_POST['id'];
$name = $_POST['name'];
$price = $_POST['price'];
$category = $_POST['category'];

if ($connection) {
	mysqli_query($connection, "UPDATE `service` SET `name` = '$name', `price` = '$price', `category` = '$category'  WHERE `service`.`id` = '$id';");
}

mysqli_close($connection);
// echo '<script>location.replace("/admin/pages/main/#portfolio");</script>';
// header('Location: http://admindjalgan.ru/admin/');
exit();

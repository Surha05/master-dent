<?php

include '../connect.php';

$name = $_POST['name'];
$price = $_POST['price'];
$category = $_POST['category'];

if ($connection) {
	mysqli_query($connection, "INSERT INTO `service` (`id`, `name`, `price`, `category`) VALUES (NULL, '$name', '$price', '$category');");
}

mysqli_close($connection);
// echo '<script>location.replace("/admin/pages/rooms/");</script>';
// header('Location: http://admindjalgan.ru/admin/');

exit();
?>
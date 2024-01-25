<?php
include "../connect.php";

$title = $_POST['title'];
$description = $_POST['description'];
$subtitle = $_POST['subtitle'];

if ($connection) {
  mysqli_query($connection, "UPDATE `offer` SET `subtitle` = '$subtitle', `title` = '$title', `description` = '$description'  WHERE `offer`.`id` = 1;");
}

mysqli_close($connection);
// echo '<script>location.replace("/admin/pages/main/#about");</script>';
// header('Location: http://admindjalgan.ru/admin/');
exit;

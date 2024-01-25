<?php
include "../connect.php";

$description = $_POST['description'];

if ($connection) {
  mysqli_query($connection, "UPDATE `footer` SET `description` = '$description'  WHERE `footer`.`id` = 1;");
}

mysqli_close($connection);
exit;

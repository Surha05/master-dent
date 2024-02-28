<?php
include "../connect.php";

$id = $_POST['id'];

if ($connection) mysqli_query($connection, "DELETE FROM `galery` WHERE id = '$id'");
mysqli_close($connection);
exit();

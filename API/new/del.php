<?php
include "../connect.php";

$id = $_POST['id'];

if($connection) mysqli_query($connection, "DELETE FROM `new` WHERE id = '$id'");
mysqli_close($connection);
exit();
?>
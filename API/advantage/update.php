<?php
include "../connect.php";

$advant1 = $_POST['advant1'];
$desc1 = $_POST['desc1'];
$advant2 = $_POST['advant2'];
$desc2 = $_POST['desc2'];
$advant3 = $_POST['advant3'];
$desc3 = $_POST['desc3'];
$advant4 = $_POST['advant4'];
$desc4 = $_POST['desc4'];

if ($connection) {
  mysqli_query($connection, "UPDATE `advantage` SET `advant1` = '$advant1', `desc1` = '$desc1', `advant2` = '$advant2', `desc2` = '$desc2', `advant3` = '$advant3', `desc3` = '$desc3', `advant4` = '$advant4', `desc4` = '$desc4' WHERE `advantage`.`id` = 1;");
}

mysqli_close($connection);
// echo '<script>location.replace("/admin/pages/main/#advantage");</script>';
// header('Location: http://admindjalgan.ru/admin/');
exit;

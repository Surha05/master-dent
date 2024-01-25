<?php
include '../connect.php';
$query = mysqli_query($connection, 'SELECT * FROM `category` ORDER BY `id`');
$data = [];

while ($item = mysqli_fetch_assoc($query)) {
   $data[] = $item;
}

exit(json_encode($data));
?>


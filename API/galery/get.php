<?php
include '../connect.php';
$query = mysqli_query($connection, 'SELECT * FROM `galery` ORDER BY `id` DESC');
$data = [];

while ($item = mysqli_fetch_assoc($query)) {
   $data[] = $item;
}

exit(json_encode($data));

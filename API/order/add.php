<?php

include '../connect.php';

$order = $_POST['order'];
$date = $_POST['date'];
$info = $_POST['info'];
$total = $_POST['total'];




if ($connection) {
	mysqli_query($connection, "INSERT INTO `orders` (`id`, `order`, `date`, `info`, `total`) VALUES (NULL, '$order', '$date', '$info', '$total');");
}

exit();













// //INSERT INTO добавить в таблицу order переменные "находятся" после надписи values 

// if ($connection) {
// 	mysqli_query($connection, "INSERT INTO `order` (`id`, `order`, `date`) VALUES (NULL, '$order', '$date');");
// }

// mysqli_close($connection);


// // echo '<script>location.replace("/admin/pages/rooms/");</script>';
// // header('Location: http://admindjalgan.ru/admin/');

// exit();
?>
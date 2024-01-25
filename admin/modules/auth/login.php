
<?php

include '../../../API/connect.php';

$login = trim($_POST['login']);
$password = md5($_POST['password']);

$server_name;
$server_password;

$answer = 'false';
// $data = new stdClass(); 
if($connection) {
  $result_login = mysqli_query($connection, 'SELECT * FROM `login`');
  $r1_login = mysqli_fetch_assoc($result_login);
  $server_name = $r1_login["login"];
  $server_password = $r1_login["password"];
}
if($server_name === $login && $server_password === $password) $answer = 'true';
// $data -> server_name = $server_name;
// $data -> server_password = $server_password;

exit($answer);
?>

<?php

//тестовый
// $token = "5828546537:AAGpq98vjq8wkLEvlNsDrvUrgcXRYOuyQck";
// $chat_id = "-896229838";

// //личный
// $token = "5593517474:AAErnQOL4GpTX0bi4DIe_T9M5mZahCk6wzI";
// $chat_id = "1106098587";

// Здоровый край
$token = "6634550499:AAH-Kt0CPQqJEWSBd6qm7iLwxS000XbicZ0";
$chat_id = "-960386784";


$txt = "";
$txt .= "%0A%0A<b>Заказ - Здоровый Край:</b>%0A";
$txt .= "%0A";
$txt .= "<b>Имя</b> - " . $_POST['Имя'] . "%0A";
$txt .= "<b>Фамилия</b> - " . $_POST['Фамилия'] . "%0A";  
$txt .= "<b>Отчество</b> - " . $_POST['Отчество'] . "%0A";   
$txt .= "<b>Телефон</b> - " . $_POST['Телефон'] . "%0A";
$txt .= "<b>Адрес пункта выдачи</b> - " . $_POST['Пункт_выдачи'] . "%0A";
$txt .= "<b>Комментарий</b> - " . $_POST['Комментарий'];
// $txt .= "<b>Комментарий</b> - " . $_POST['Комментарий'] . "%0A";




if( $_POST['Адрес']) $txt .= "<b>Адрес доставки</b> - " . $_POST['Адрес'] . "%0A";

$txt .= "%0A%0A<b>Товар:</b>%0A";
$txt .= "%0A";




foreach ($_POST as $key => $value) {
   if ($key == 'Имя') {
      continue;
      
   }
   if ($key == 'Фамилия') {
      continue;
 
   }

   if ($key == 'Отчество') {
      continue;
 
   }

   if ($key == 'Телефон') {
      continue;
   }

   if ($key == 'Пункт_выдачи') {
      continue;
   }
 
   if ($key == 'Комментарий') {
      continue;
   }

   if ($key == 'Итоговая_сумма') {
      continue;
   }
   if ($key == 'Способ_доставки') {
      continue;
   }

   if ($value) $txt .= "<b>".$key."</b> - " . $value . "%0A";   
}

$txt .= "%0A";
$txt .= "<b>Способ доставки:</b> - " . $_POST['Способ_доставки'] . "%0A";
$txt .= "%0A";
$txt .= "<b>Итоговая сумма:</b> - " . $_POST['Итоговая_сумма'] . "%0A";


//Передаем данные бот
$sendToTelegram = fopen("https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chat_id . "&parse_mode=html&text=" . $txt, "r");
// $sendToTelegram = true;

// //Выводим сообщение об успешной отправке
if ($sendToTelegram) {
//    header('Location: confirmed.php?is_confirm=true');
echo 'отлично';
}
else {
//    header('Location: confirmed.php?is_confirm=false');
echo 'плохо';
}

?>
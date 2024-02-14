<!DOCTYPE html>
<html lang="ru">
	<?php
    $page = 'Контакты';
    $title_page="Стоматология Мастер-Дент";
    include 'sections/contact-page/head.php' 
  ?>
<body>

<div class="super_container">
	
	<!-- Header -->
	<?php include 'sections/header/header.php'; ?>
	<!-- Menu -->
	<?php include 'sections/menu.php'; ?>
	<!-- Home -->
	<!-- <?php include 'sections/contact/home.php'; ?> -->
	<!-- Contact -->
	<?php include 'sections/contact-page/contact-section.php'; ?>
	<!-- Footer -->
	<?php include 'sections/footer/footer.php'; ?>

</div>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="styles/bootstrap4/popper.js"></script>
<script src="styles/bootstrap4/bootstrap.min.js"></script>
<script src="plugins/easing/easing.js"></script>
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCIwF204lFZg1y4kPSIhKaHEXMLYxxuMhA"></script>
<script src="js/contact.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="ru">
	<?php
    $page = 'Главная';
    $title_page="Стоматология Мастер-Дент";
    include 'sections/index/head.php' 
  ?>
<body>

<div class="super_container">
	
	<!-- Header -->
	<?php include 'sections/header.php'; ?>
	<!-- Menu -->
	<?php include 'sections/menu.php'; ?>
	<!-- Home -->
	<?php include 'sections/index/home.php'; ?>
	<!-- 3 Boxes -->
	<?php include 'sections/index/boxes-work.php'; ?>
	<!-- About -->
	<?php include 'sections/index/about-section.php'; ?>
	<!-- Departments -->
	<?php include 'sections/index/departments.php'; ?>
	<!-- Services -->
	<?php include 'sections/index/services.php'; ?>
	<!-- Call to action -->
	<?php include 'sections/cta.php'; ?>
	<!-- Footer -->
	<?php include 'sections/footer.php'; ?>


</div>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="styles/bootstrap4/popper.js"></script>
<script src="styles/bootstrap4/bootstrap.min.js"></script>
<script src="plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
<script src="plugins/easing/easing.js"></script>
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="js/custom.js"></script>
</body>
</html>
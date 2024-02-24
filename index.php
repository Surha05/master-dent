<!DOCTYPE html>
<html lang="ru">
	<?php
    $page = 'Главная';
    $title_page="Стоматология Мастер-Дент";
    include 'sections/index-page/head.php' 
  ?>
<body>

<div class="super_container">
	
	<!-- Header -->
	<?php include 'sections/header/header.php'; ?>
	<!-- Menu -->
	<?php include 'sections/menu/menu.php'; ?>
	<!-- Home -->
	<?php include 'sections/index-page/home-section/home.php'; ?>
	<!-- 3 Boxes -->
	<?php include 'sections/index-page/boxes-work/boxes-work.php'; ?>
	<!-- About -->
	<?php include 'sections/index-page/about-section/about-section.php'; ?>
	<!-- Departments -->
	<?php include 'sections/index-page/department/departments.php'; ?>
	<!-- Services -->
	<?php include 'sections/index-page/advantage/services.php'; ?>
	<!-- Call to action -->
	<?php include 'sections/cta/cta.php'; ?>
	<!-- Footer -->
	<?php include 'sections/footer/footer.php'; ?>


</div>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="styles/bootstrap4/popper.js"></script>
<script src="styles/bootstrap4/bootstrap.min.js"></script>
<script src="plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
<script src="plugins/easing/easing.js"></script>
<!-- <script src="plugins/parallax-js-master/parallax.min.js"></script> -->
<script src="js/custom.js"></script>



</body>
</html>
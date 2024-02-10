<!DOCTYPE html>
<html lang="ru">
	<?php
    $page = 'Услуги';
    $title_page="Стоматология Мастер-Дент";
    include 'sections/services-page//head.php' 
  ?>
<body>

<div class="super_container">
	
	<!-- Header -->
	<?php include 'sections/header/header.php'; ?>
	<!-- Menu -->
	<?php include 'sections/menu.php'; ?>
		<!-- Features -->
		<?php include 'sections/services-page/features-section/features.php'; ?>
	<!-- Home -->
	<!-- <?php include 'sections/services/home.php'; ?> -->
	<!-- Services -->
	<?php include 'sections/services-page/advantage-section/advantage.php'; ?>
	<!-- Call to action -->
	<?php include 'sections/cta.php'; ?>
	<!-- Text Section -->
	<?php include 'sections/services-page/help-section/text_section.php'; ?>

	<!-- Footer -->
	<?php include 'sections/footer/footer.php'; ?>

</div>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="styles/bootstrap4/popper.js"></script>
<script src="styles/bootstrap4/bootstrap.min.js"></script>
<script src="plugins/easing/easing.js"></script>
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="js/services.js"></script>




</body>
</html>
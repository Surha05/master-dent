<!DOCTYPE html>
<html lang="ru">
	<?php
    $page = 'Новости';
    include 'sections/news-page/head.php' 
  ?>
<body>

<div class="super_container">
	
	<!-- Header -->
	<?php include 'sections/header/header.php'; ?>
	<!-- Menu -->
	<?php include 'sections/menu/menu.php'; ?>
	<!-- Home --> 
	<!-- <?php include 'sections/news/home.php'; ?> -->

	<!-- News -->
	<?php include 'sections/news-page/news-section.php'; ?>
	<!-- Footer -->
	<?php include 'sections/footer/footer.php'; ?>

</div>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="styles/bootstrap4/popper.js"></script>
<script src="styles/bootstrap4/bootstrap.min.js"></script>
<script src="plugins/easing/easing.js"></script>
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="js/news.js"></script>

</body>
</html>
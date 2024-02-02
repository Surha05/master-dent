<!DOCTYPE html>
<html lang="ru">
	<?php
    $page = 'Новости';
    $title_page="Стоматология Мастер-Дент";
    include 'sections/news/head.php' 
  ?>
<body>

<div class="super_container">
	
	<!-- Header -->
	<?php include 'sections/header.php'; ?>
	<!-- Menu -->
	<?php include 'sections/menu.php'; ?>
	<!-- Home --> 
	<!-- <?php include 'sections/news/home.php'; ?> -->

	<!-- News -->
	<?php include 'sections/news/news-section.php'; ?>
	<!-- Footer -->
	<?php include 'sections/footer.php'; ?>

</div>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="styles/bootstrap4/popper.js"></script>
<script src="styles/bootstrap4/bootstrap.min.js"></script>
<script src="plugins/easing/easing.js"></script>
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="js/news.js"></script>

</body>
</html>
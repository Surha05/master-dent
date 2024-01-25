<!-- ======= Sidebar ======= -->
<aside id="sidebar" class="sidebar">

   <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
         <a class="nav-link <?php if($page_title !== 'Главная') echo 'collapsed'; ?>" href="/admin/">
            <i class="bi bi-grid"></i>
            <span>Главная</span>
         </a>
      </li>

      <li class="nav-item">
         <a class="nav-link <?php if($page_title !== 'Категории') echo 'collapsed'; ?>" href="/admin/pages/category/">
            <i class="bi bi-grid"></i>
            <span>Категории</span>
         </a>
      </li>

      <li class="nav-item">
         <a class="nav-link <?php if($page_title !== 'Товары') echo 'collapsed'; ?>" href="/admin/pages/product/">
            <i class="bi bi-card-list"></i>
            <span>Товары</span>
         </a>
      </li>

      <li class="nav-item">
         <a class="nav-link <?php if($page_title !== 'Заказы') echo 'collapsed'; ?>" href="/admin/pages/order/">
            <i class="bi bi-card-list"></i>
            <span>Заказы</span>
         </a>
      </li>

      <li class="nav-item">
         <a class="nav-link <?php if($page_title !== 'Новости') echo 'collapsed'; ?>" href="/admin/pages/news/">
            <i class="bi bi-card-list"></i>
            <span>Новости</span>
         </a>
      </li>
      <li class="nav-item">
         <a class="nav-link <?php if($page_title !== 'Настройки') echo 'collapsed'; ?>" href="/admin/pages/settings/">
            <i class="bi bi-card-list"></i>
            <span>Настройки</span>
         </a>
      </li>

   </ul>

</aside>
<!-- End Sidebar-->
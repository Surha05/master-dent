<section class="section dashboard" id="news-section">
   <div class="row">

      <div class="col-12">
         <div class="card top-selling overflow-auto">

            <div class="card-body pb-0">
               <div class="header-card-body">
                  
                  <div class="header-left-card-block">
                     <h5 class="card-title" id="add-btn" data-bs-toggle="modal" data-bs-target="#add-new-modal">+ Добавить новость</h5>
                  </div>
                  
               </div>
               

               <div class="flex w100 fw-bold mb-10 p-5">
                  <div class="w-100">Фото</div>
                  <div class="w-300">Название</div>
                  <div class="ml-auto">Редакт.</div>
               </div>
               <div class="admin-list mb20">
                  <!-- <div class="admin-list__item p-5">
                     <div class="w-100"><img src="/admin/assets/img/product-1.jpg" class="w100"></div>
                     <div class="w-300 fw-bold">Новость</div>
                     <div class="ml-auto"><a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                           <li><a class="dropdown-item" href="#">Редактировать</a></li>
                           <li><a class="dropdown-item" href="#">Удалить</a></li>
                        </ul>
                     </div>
                  </div> -->
               </div>
               <nav>
                  <ul class="pagination justify-content-center">
                     <li class="page-item disabled prev">
                        Пред.
                     </li>
                     <li class="page-item active">
                        <a class="page-link" href="#">1</a>
                     </li>
                     <li class="page-item">
                        <a class="page-link" href="#">2</a>
                     </li>
                     <li class="page-item">
                        <a class="page-link" href="#">3</a>
                     </li>
                     <li class="page-item next">
                        <a class="page-link" href="#">След.</a>
                     </li>
                  </ul>
               </nav>
            </div>

         </div>
      </div>

   </div>
</section>
<?php 
include '../../modules/news/add-modal.php';
include '../../modules/news/edit-modal.php';
?>
<script src="/admin/modules/news/render.js" type="module"></script>
<script src="/admin/modules/news/add.js"></script>
<script src="/admin/modules/news/del.js"></script>
<script src="/admin/modules/news/edit.js"></script>
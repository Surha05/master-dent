<section class="section dashboard" id="category-section">
   <div class="row">

      <div class="col-12">
         <div class="card top-selling overflow-auto">

            <div class="card-body pb-0">
               <h5 class="card-title" id="add-btn" data-bs-toggle="modal" data-bs-target="#add-category-modal">+ Добавить категорию</h5>

               <div class="flex w100 fw-bold mb-10 p-5">
                  <div class="w-100">Фото</div>
                  <div class="w-300">Название</div>
                  <div class="w-300">Описание</div>
                  <div class="ml-auto">Редакт.</div>
               </div>
               <div class="admin-list">
                  <!-- <div class="admin-list__item p-5">
                     <div class="w-100"><img src="/admin/assets/img/product-1.jpg" class="w100"></div>
                     <div class="w-300 fw-bold">Урбеч</div>
                     <div class="ml-auto"><a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                           <li><a class="dropdown-item" href="#">Редактировать</a></li>
                           <li><a class="dropdown-item" href="#">Удалить</a></li>
                        </ul>
                     </div>
                  </div> -->
               </div>
            </div>

         </div>
      </div>

   </div>
</section>
<?php 
include '../../modules/category/add-modal.php';
include '../../modules/category/edit-modal.php';
?>
<script src="/admin/modules/category/render.js"></script>
<script src="/admin/modules/category/add.js"></script>
<script src="/admin/modules/category/del.js"></script>
<script src="/admin/modules/category/edit.js"></script>
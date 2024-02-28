<section class="section dashboard" id="galery-section">
   <div class="row">

      <div class="col-12">
         <div class="card overflow-auto">

            <div class="card-body pb-0">
               <div class="header-card-body">

                  <div class="header-left-card-block">
                     <h5 class="card-title" id="add-btn" data-bs-toggle="modal" data-bs-target="#add-galery-modal">+ Добавить фото</h5>
                  </div>

               </div>

               <div class="photo-galery">
                  <!-- <div class="photo-item">
                     <img src="/images/product/r-1155Kak-provoditsya-i-pochemu-neobhodima-ochistka-zubov-ot-kamnya.jpg" class="photo-img">
                     <div class="photo-del"></div>
                  </div> -->
               </div>

            </div>

         </div>
      </div>

   </div>
</section>
<?php
include '../../modules/galery/add-modal.php';
?>

<script src="/admin/modules/galery/render.js" type="module"></script>
<script src="/admin/modules/galery/add.js"></script>
<script src="/admin/modules/galery/del.js"></script>
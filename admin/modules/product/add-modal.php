<div class="modal fade" id="add-product-modal" tabindex="-1">
   <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title">Добавить товар</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
            <form class="row g-3" id="form-add">
               <div class="col-12">
                  <label for="inp-name" class="form-label">Название</label>
                  <input class="form-control" id="inp-name">
               </div>
               <!-- <div class="col-12">
                  <div class="row">
                     <div class="col-8">
                        <label for="inp-price" class="form-label">Цена</label>
                        <input class="form-control" id="inp-price">
                     </div>
                     <div class="col-4">
                        <div class="form-check form-switch">
                           <input class="form-check-input" type="checkbox" id="check-discount">
                           <label class="form-check-label" for="check-discount">Скидка(%)</label>
                        </div>
                        <input class="form-control" id="inp-discount" value="0" type="number" disabled>
                     </div>
                  </div>
               </div> -->
               <div class="col-12">
                  <label for="inp-category" class="col-sm-2 col-form-label">Категория</label>
                  <div class="col-12">
                     <select class="form-select" id="inp-category">
                        <!-- <option selected>Выберите категорию</option> -->
                        <!-- <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option> -->
                     </select>
                  </div>
               </div>
               <div class="col-12">
                  <label for="inp-photo" class="col-sm-2 col-form-label">Фото</label>
                  <input class="form-control" type="file" id="inp-photo">
               </div>
               <div class="col-12">
                  <label for="inp-description" class="col-sm-2 col-form-label">Короткое описание</label>
                  <textarea class="form-control" type="file" id="inp-description"></textarea>
               </div>
               <div class="col-12">
                  <label for="inp-full-description" class="col-sm-2 col-form-label">Длинное описание</label>
                  <textarea class="form-control" type="file" id="inp-full-description"></textarea>
               </div>

            </form>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="btn-add">Добавить</button>
         </div>
      </div>
   </div>
</div>
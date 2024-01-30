<div class="modal fade" id="add-product-modal" tabindex="-1">
   <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title">Добавить услугу</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
            <form class="row g-3" id="form-add">
               <div class="col-12">
                  <label for="inp-name" class="form-label">Название</label>
                  <input class="form-control" id="inp-name">
               </div>
               <div class="col-12">
                  <label for="inp-photo" class="col-sm-2 col-form-label">Фото</label>
                  <input class="form-control" type="file" id="inp-photo">
               </div>
               <div class="col-12">
                  <label for="inp-description" class="col-form-label">Короткое описание (на главной странице)</label>
                  <textarea class="form-control" type="file" id="inp-description"></textarea>
               </div>
               <div class="col-12">
                  <label for="inp-full-description" class="col-form-label">Длинное описание (на странице Услуги)</label>
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
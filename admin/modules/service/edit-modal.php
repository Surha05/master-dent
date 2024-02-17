
<div class="modal fade" id="edit-product-modal" tabindex="-1">
   <div class="modal-dialog modal-dialog-centered">
   <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title">Редактировать услугу</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
            <form class="row g-3" id="form-add">
               <div class="col-12">
                  <label for="inp-name" class="form-label">Название</label>
                  <input class="form-control" id="inp-name">
               </div>
               <div class="col-12">
                  <label for="inp-price" class="form-label">Цена</label>
                  <input class="form-control" id="inp-price">
               </div>
               <div class="col-12">
                  <label for="inp-category" class="form-label">Категория</label>
                  <select class="form-select" id="inp-category">
                     <!-- <option selected>Open this select menu</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option> -->
                  </select>
               </div>
            </form>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="btn-edit">Сохранить</button>
         </div>
      </div>
   </div>
</div>
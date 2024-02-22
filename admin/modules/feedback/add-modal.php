<div class="modal fade" id="add-feedback-modal" tabindex="-1">
   <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title">Добавить отзыв</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
            <form class="row g-3" id="form-add">
               <div class="col-12">
                  <label for="inp-name" class="form-label">Имя</label>
                  <input class="form-control" id="inp-name">
               </div>
               <div class="col-12">
                  <label for="description" class="form-label">Описание</label>
                  <textarea class="form-control" id="description" style="height: 100px"></textarea>
               </div>
               <div class="col-12">
                  <label for="photo" class="col-sm-2 col-form-label">Фото</label>
                  <input class="form-control" type="file" id="inp-photo">
               </div>
            </form>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="btn-add">Добавить</button>
         </div>
      </div>
   </div>
</div>
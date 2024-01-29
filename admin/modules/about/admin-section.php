<section class="section dashboard" id="about-section">
  <div class="row">

    <div class="col-12">
      <div class="card top-selling overflow-auto">

        <div class="card-body pb-0">
          <div class="flex__jc-sb flex__ai-c">
            <h5 class="card-title col-6">Секция О нас</h5>
            <button type="button" id="about-submit" class="btn btn-primary rounded-pill">Сохранить</button>
          </div>

          <form>
            <div class="row mb-3">
              <div class="mb-1">
                <input id="about-title" class="form-control" placeholder="Заголовок">
              </div>
              <div class="mb-1">
                <textarea id="about-desc" class="form-control" style="height: 100px" placeholder="Описание"></textarea>
              </div>
              <div class="mb-1">
                <input id="about-btn" class="form-control" placeholder="Текст на кнопке">
              </div>
              <div>
                <input class="form-control" type="file" id="about-img">
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>

  </div>
</section>
<script type="module" src="/admin/modules/about/about.js"></script>
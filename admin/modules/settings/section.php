<section class="section dashboard" id="settings">
  <div class="row">

    <div class="col-12">
      <div class="card top-selling overflow-auto">

        <div class="card-body pb-0">
          <div class="flex__jc-sb flex__ai-c">
            <h5 class="card-title col-6">Контакты</h5>
            <button type="button" id="contact-submit" class="btn btn-primary rounded-pill">Сохранить</button>
          </div>

          <form>
            <div class="row mb-3">
              <div class="row mb-2">
                <div class="col-6">
                  <label for="phone" class="form-label">Телефон 1</label>
                  <input id="phone" class="form-control">
                </div>
                <div class="col-6">
                  <label for="view-phone" class="form-label">Телефон 1. Вид</label>
                  <input id="view-phone" class="form-control">
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-6">
                  <label for="phone2" class="form-label">Телефон 2</label>
                  <input id="phone2" class="form-control">
                </div>
                <div class="col-6">
                  <label for="view-phone2" class="form-label">Телефон 2. Вид</label>
                  <input id="view-phone2" class="form-control">
                </div>

              </div>
              <div class="mb-2">
                <label for="wa" class="form-label">Номер WhatsApp</label>
                <input id="wa" class="form-control">
              </div>
              <div class="mb-2">
                <label for="telegram" class="form-label">Номер или ник Telegram</label>
                <input id="telegram" class="form-control">
              </div>
              <div class="mb-2">
                <label for="insta" class="form-label">Ссылка Instagram</label>
                <input id="insta" class="form-control">
              </div>
              <div class="mb-2">
                <label for="mail" class="form-label">E-mail</label>
                <input id="mail" class="form-control">
              </div>
              <div class="mb-2">
                <label for="clock-work" class="form-label">Часы работы</label>
                <textarea id="clock-work" class="form-control"></textarea>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>

  </div>
</section>
<script type="module" src="/admin/modules/settings/contact.js"></script>
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
                  <input id="phone" class="form-control" placeholder="Телефон">
                </div>
                <div class="col-6">
                  <label for="view-phone" class="form-label">Телефон 1. Вид</label>
                  <input id="view-phone" class="form-control" placeholder="Телефон">
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-6">
                  <label for="phone2" class="form-label">Телефон 2</label>
                  <input id="phone2" class="form-control" placeholder="Телефон 2">
                </div>
                <div class="col-6">
                  <label for="view-phone2" class="form-label">Телефон 2. Вид</label>
                  <input id="view-phone2" class="form-control" placeholder="Телефон 2">
                </div>

              </div>
              <div class="mb-2">
                <label for="wa" class="form-label">WhatsApp</label>
                <input id="wa" class="form-control" placeholder="Номер WhatsApp">
              </div>
              <div class="mb-2">
                <label for="telegram" class="form-label">Telegram</label>
                <input id="telegram" class="form-control" placeholder="Номер или ник Telegram">
              </div>
              <div class="mb-2">
                <label for="insta" class="form-label">Instagram</label>
                <input id="insta" class="form-control" placeholder="Ссылка Instagram">
              </div>
              <div class="mb-2">
                <label for="mail" class="form-label">E-mail</label>
                <input id="mail" class="form-control" placeholder="E-mail">
              </div>
              <div class="mb-2">
                <label for="clock-work" class="form-label">Часы работы</label>
                <input id="clock-work" class="form-control" placeholder="Часы работы">
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>

  </div>
</section>
<script type="module" src="/admin/modules/settings/contact.js"></script>
import { feedback } from '../../../API/feedback/get.js';

(function () {
  const section = document.querySelector('#feedback-section .admin-list');
  const sectionModer = document.querySelector(
    '#feedback-section .admin-list-moder'
  );

  feedback.then((res) => {
    // renderFeedback = res;
    render(res);
  });

  function render(arr) {
    section.innerHTML = '';
    sectionModer.innerHTML = '';

    for (const item of arr) {
      if (item.moder == 'false') {
        const block = `
        <div class="admin-list__item p-5" id="${item.id}">
          <div class="w-100"><img src="/images/feedback/${item.photo}" class="w100"></div>
          <div class="w-200 fw-bold" id="data-name">${item.name}</div>
          <div id="data-desc">${item.description}</div>
          <div class="ml-auto"><a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li><a id="btn-edit-new" class="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#edit-feedback-modal">Редактировать</a></li>
              <li><a id="btn-del-new" class="dropdown-item" href="">Удалить</a></li>
            </ul>
          </div>
        </div>`;
        sectionModer.innerHTML += block;
      } else {
        const block = `
        <div class="admin-list__item p-5" id="${item.id}">
          <div class="w-100"><img src="/images/feedback/${item.photo}" class="w100"></div>
          <div class="w-200 fw-bold" id="data-name">${item.name}</div>
          <div id="data-desc">${item.description}</div>
          <div class="ml-auto"><a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li><a id="btn-edit-new" class="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#edit-feedback-modal">Редактировать</a></li>
              <li><a id="btn-del-new" class="dropdown-item" href="">Удалить</a></li>
            </ul>
          </div>
        </div>`;
        section.innerHTML += block;
      }
      
    }
  }
})();

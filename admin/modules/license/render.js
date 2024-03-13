import { license } from '../../../API/license/get.js';

(function () {
  const section = document.querySelector('#license-section .admin-list');
  
  license.then((res) => {
    render(res);
  });

  function render(arr) {
    section.innerHTML = '';

    for (const item of arr) {
      const block = `
      <div class="admin-list__item p-5" id="${item.id}">
        <div class=""><img src="/docs/${item.photo}" >${item.name}</div>
        <div class="ml-auto"><a id="btn-del-new" class="dropdown-item" href="">Удалить</a>
        </div>
      </div>`;
      section.innerHTML += block;
    }
  }
})();

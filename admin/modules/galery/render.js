import { galery } from '../../../API/galery/get.js';

(function () {
  const section = document.querySelector('#galery-section .photo-galery');
  
  galery.then((res) => {
    render(res);
  });

  function render(arr) {
    section.innerHTML = '';

    for (const item of arr) {
      const block = `
      <div class="photo-item" id="${item.id}">
        <img src="/images/galery/${item.photo}" class="photo-img">
        <div class="photo-del"></div>
      </div>`;
      section.innerHTML += block;
    }
  }
})();

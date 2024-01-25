import { news } from '../../../API/new/get.js';

(function () {
  const section = document.querySelector('#news-section .admin-list');
  const paginSection = document.querySelector('#news-section .pagination');

  let renderNews = [];
  const pagSetting = {
    prev: false,
    next: false,
    elForPage: 20,
    currentPage: 1,
  }

  news.then((res) => {
    renderNews = res;
    pagination(renderNews);
    paginSection.addEventListener('click', paginClick);
  });

  function paginClick(e) {
    e.preventDefault();
    const el = e.target;
    if(el.classList.contains("prev")) {
      if(pagSetting.prev) {
        pagSetting.currentPage --;
        pagination(renderNews);
      }
      return;
    };

    if(el.classList.contains("next")) {
      if(pagSetting.next) {
        pagSetting.currentPage ++;
        pagination(renderNews);
      }
      return;
    };

    if(el.classList.contains("active")) return;

    let currentPage = +el.textContent;
    pagSetting.currentPage = currentPage;
    pagination(renderNews);
  }

  function paginRender(news) {

    if(pagSetting.currentPage == 1) {
      pagSetting.prev = false;
      paginSection.querySelector('.prev').classList.add('disabled');
    } else {
      pagSetting.prev = true;
      paginSection.querySelector('.prev').classList.remove('disabled');
    }

    if(Math.ceil(news.length/pagSetting.elForPage) == pagSetting.currentPage) {
      pagSetting.next = false;
      paginSection.querySelector('.next').classList.add('disabled');
    } else {
      pagSetting.next = true;
      paginSection.querySelector('.next').classList.remove('disabled');
    }

    let countPages = Math.ceil(news.length/pagSetting.elForPage);
    let paginPrevBlock = '';
    if(pagSetting.prev == false) paginPrevBlock = `
      <li class="page-item page-link disabled prev">Пред.</li>
    `;
    else paginPrevBlock = `
      <li class="page-item page-link pointer prev">Пред.</li>
    `;

    let paginCenterBlock = '';
    for(let i=1; i<=countPages; i++) {
      if(i == pagSetting.currentPage) paginCenterBlock += `
        <li class="page-item page-link active">${i}</li>
      `;
      else paginCenterBlock += `
        <li class="page-item page-link pointer">${i}</li>
      `;
    }

    let paginNextBlock = '';
    if(pagSetting.next == false) paginNextBlock = `
      <li class="page-item page-link disabled next">След.</li>
    `;
    else paginNextBlock = `
      <li class="page-item page-link next pointer">След.</li>
    `;
    paginSection.innerHTML = paginPrevBlock + paginCenterBlock + paginNextBlock;
  }

  function pagination(news) {
    if(news.length <= pagSetting.elForPage) {
      render(news);
    } else {
      let firstIndex = (pagSetting.currentPage - 1) * pagSetting.elForPage;
      let lastIndex = pagSetting.currentPage * pagSetting.elForPage;
      let newArr = [];
      news.forEach((el, i) => {
        if(i >= firstIndex && i <lastIndex) newArr.push(el);
      });
      render(newArr);
    }
    paginRender(news);
  }

  function render(arr) {
    section.innerHTML = '';

    for (const item of arr) {
      const block = `
      <div class="admin-list__item p-5" id="${item.id}">
        <div class="w-100"><img src="/img/new/${item.photo}" class="w100"></div>
        <div class="w-300 fw-bold" id="data-name">${item.name}</div>
        <div style="display: none;" class="w-300 fw-bold" id="data-desc">${item.description}</div>
        <div class="ml-auto"><a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li><a id="btn-edit-new" class="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#edit-new-modal">Редактировать</a></li>
            <li><a id="btn-del-new" class="dropdown-item" href="">Удалить</a></li>
          </ul>
        </div>
      </div>`;
      section.innerHTML += block;
    }
  }
})();

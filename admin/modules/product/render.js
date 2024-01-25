import { products } from '../../../API/product/get.js';
import { category } from '../../../API/category/get.js';

(function () {
  const section = document.querySelector('#product-section .admin-list');
  const filterBtn = document.querySelector('#js-filter');
  const paginSection = document.querySelector('.pagination');

  let renderProducts = [];
  const pagSetting = {
    prev: false,
    next: false,
    elForPage: 20,
    currentPage: 1,
  }

  category.then(res => {
    renderCategoryFilter(res);
  });

  products.then((res) => {
    renderProducts = res;
    pagination(renderProducts);
    filterBtn.addEventListener('change', () => {filter(res)});
    paginSection.addEventListener('click', paginClick);
  });

  function paginClick(e) {
    e.preventDefault();
    const el = e.target;
    if(el.classList.contains("prev")) {
      if(pagSetting.prev) {
        pagSetting.currentPage --;
        pagination(renderProducts);
      }
      return;
    };

    if(el.classList.contains("next")) {
      if(pagSetting.next) {
        pagSetting.currentPage ++;
        pagination(renderProducts);
      }
      return;
    };

    if(el.classList.contains("active")) return;

    let currentPage = +el.textContent;
    pagSetting.currentPage = currentPage;
    pagination(renderProducts);
  }

  function paginRender(products) {

    if(pagSetting.currentPage == 1) {
      pagSetting.prev = false;
      paginSection.querySelector('.prev').classList.add('disabled');
    } else {
      pagSetting.prev = true;
      paginSection.querySelector('.prev').classList.remove('disabled');
    }

    if(Math.ceil(products.length/pagSetting.elForPage) == pagSetting.currentPage) {
      pagSetting.next = false;
      paginSection.querySelector('.next').classList.add('disabled');
    } else {
      pagSetting.next = true;
      paginSection.querySelector('.next').classList.remove('disabled');
    }

    let countPages = Math.ceil(products.length/pagSetting.elForPage);
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

  function pagination(products) {
    if(products.length <= pagSetting.elForPage) {
      render(products);
    } else {
      let firstIndex = (pagSetting.currentPage - 1) * pagSetting.elForPage;
      let lastIndex = pagSetting.currentPage * pagSetting.elForPage;
      let newArr = [];
      products.forEach((el, i) => {
        if(i >= firstIndex && i <lastIndex) newArr.push(el);
      });
      render(newArr);
    }
    paginRender(products);
  }

  function renderCategoryFilter(categories) {
    for(const item of categories) {
      filterBtn.innerHTML += `
        <option value="${item.name}">${item.name}</option>
      `;
    }
  }

  function filter(allProducts) {
    renderProducts = [];
    if(filterBtn.value === 'Все категории') {
      renderProducts = allProducts;
      pagination(renderProducts);
      return;
    }
    for(const item of allProducts) {
      if(filterBtn.value === item.category) renderProducts.push(item);
    }
    pagination(renderProducts);
  }

  function render(arr) {
    section.innerHTML = '';

    for (const item of arr) {
      const block = `
      <div class="admin-list__item p-5" id="${item.id}">
        <div class="w-100"><img src="/img/product/${item.photo}" class="w100"></div>
        <div class="w-200 fw-bold" id="data-name">${item.name}</div>
        <div class="w-150 fw-bold" id="data-category">${item.category}</div>
        <div class="w-150 fw-bold" id="data-description">${item.description}</div>
        <div style="display: none" id="data-full-description">${item.full_description}</div>
        <div class="ml-auto"><a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li><a id="btn-edit-product" class="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#edit-product-modal">Редактировать</a></li>
            <li><a id="btn-del-product" class="dropdown-item" href="">Удалить</a></li>
          </ul>
        </div>
      </div>`;
      section.innerHTML += block;
    }
  }
})();

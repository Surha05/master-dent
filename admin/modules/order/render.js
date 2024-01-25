import { products } from '../../../API/product/get.js';
import { orders } from '../../../API/order/get.js';

(function () {
  const section = document.querySelector('#order .admin-list');
  const paginSection = document.querySelector('#order .pagination');

  let renderOrders = [];
  const pagSetting = {
    prev: false,
    next: false,
    elForPage: 20,
    currentPage: 1,
  }

  orders.then((res) => {
    renderOrders = res;
    pagination(renderOrders);
    paginSection.addEventListener('click', paginClick);
  });

  function paginClick(e) {
    e.preventDefault();
    const el = e.target;
    if(el.classList.contains("prev")) {
      if(pagSetting.prev) {
        pagSetting.currentPage --;
        pagination(renderOrders);
      }
      return;
    };

    if(el.classList.contains("next")) {
      if(pagSetting.next) {
        pagSetting.currentPage ++;
        pagination(renderOrders);
      }
      return;
    };

    if(el.classList.contains("active")) return;

    let currentPage = +el.textContent;
    pagSetting.currentPage = currentPage;
    pagination(renderOrders);
  }

  function paginRender(orders) {

    if(pagSetting.currentPage == 1) {
      pagSetting.prev = false;
      paginSection.querySelector('.prev').classList.add('disabled');
    } else {
      pagSetting.prev = true;
      paginSection.querySelector('.prev').classList.remove('disabled');
    }

    if(Math.ceil(orders.length/pagSetting.elForPage) == pagSetting.currentPage) {
      pagSetting.next = false;
      paginSection.querySelector('.next').classList.add('disabled');
    } else {
      pagSetting.next = true;
      paginSection.querySelector('.next').classList.remove('disabled');
    }

    let countPages = Math.ceil(orders.length/pagSetting.elForPage);
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

  function pagination(orders) {
    if(orders.length <= pagSetting.elForPage) {
      render(orders);
    } else {
      let firstIndex = (pagSetting.currentPage - 1) * pagSetting.elForPage;
      let lastIndex = pagSetting.currentPage * pagSetting.elForPage;
      let newArr = [];
      orders.forEach((el, i) => {
        if(i >= firstIndex && i <lastIndex) newArr.push(el);
      });
      render(newArr);
    }
    paginRender(orders);
  }

  function render(arr) {
    section.innerHTML = '';

    for (const item of arr) {
      let dateTemplate = getDateTemplate(JSON.parse(item.date));
      let orderTemplate = getOrderTemplate(JSON.parse(item.order));
      let clientTemplate = getClientTemplate(JSON.parse(item.info));
      let totalPrice = item.total;
      
      const block = `
      <div class="admin-list__item p-5" id="${item.id}">
        <div class="w-100">${item.id}</div>
        <div class="w-300">${orderTemplate}</div>
        <div class="w-150">${totalPrice} руб.</div>
        <div class="w-200">${dateTemplate}</div>
        <div class="w-200">${clientTemplate}</div>
      </div>`;
      section.innerHTML += block;
    }
  }

  function getDateTemplate(date) {
    date = new Date(date)
    let year = date.getFullYear()
    let month = date.getMonth()
    switch(month) {
      case 0:
        month = 'январь';
        break;
      case 1:
        month = 'февраль';
        break;
      case 2:
        month = 'март';
        break;
      case 3:
        month = 'апрель';
        break;
      case 4:
        month = 'май';
        break;
      case 5:
        month = 'июнь';
        break;
      case 6:
        month = 'июль';
        break;
      case 7:
        month = 'август';
        break;
      case 8:
        month = 'сентябрь';
        break;
      case 9:
        month = 'октябрь';
        break;
      case 10:
        month = 'ноябрь';
        break;
      case 11:
        month = 'декабрь';
        break;
    }
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()

    let template = `
    <p>${day} ${month} ${year}г</p>
    <p>${hour}ч ${minute}мин</p>
    `;
    return template;
  }

  function getOrderTemplate(order) {
    let template = '<p>';
    for(let item of order) {
      template += `
      ${item.name} - ${item.count}шт по ${item.price}руб<br>
      `;
    }
    template += '</p>';
    return template;
  }

  function getClientTemplate(client) {
    if(client.length == 0) return '';
    let template = `
    <p>Имя - ${client[0].namePeople}<br>
    Фамилия - ${client[0].soName}<br>
    Отчество - ${client[0].surName}<br>
    Телефон - ${client[0].phone}<br>
    Адрес - ${client[0].address}<br>
    Комментарий - ${client[0].comment}</p>
    `;
    return template;
  }
})();

(function () {
  const section = document.querySelector('#category-section .admin-list');

  getCategory();
  
  function getCategory() {
    const url = '/API/category/get.php';

    fetch(url)
    .then((res) => res.json())
    .then((res) => {
      render(res);
    })
    .catch((error) => {
      alert('При загрузке категорий произошла ошибка');
      console.log(error);
    });
  }
  function render(arr) { 
    for(item of arr) {
      const block = `
      <div class="admin-list__item p-5" id="${item.id}">
        <div class="w-100"><img src="/img/category/${item.photo}" class="w100"></div>
        <div class="w-300 fw-bold" id="data-name">${item.name}</div>
        <div class="w-300 fw-bold" id="data-desc">${item.desc}</div>
        <div class="ml-auto"><a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li><a id="btn-edit-category" class="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#edit-category-modal">Редактировать</a></li>
            <li><a id="btn-del-category" class="dropdown-item" href="">Удалить</a></li>
          </ul>
        </div>
      </div>`;
      section.innerHTML += block;
    }
  }
})();

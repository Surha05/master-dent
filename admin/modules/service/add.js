(function () {
  const btnAdd = document.querySelector('#add-product-modal #btn-add');
  const inpName = document.querySelector('#add-product-modal #inp-name');
  const inpPrice = document.querySelector('#add-product-modal #inp-price');
  const inpSelect = document.querySelector('#add-product-modal #inp-select');

  btnAdd.addEventListener('click', send);
  getCategory();

  function send() {
    const url = '/API/service/add.php';
    const form_data = new FormData();
    form_data.append('name', inpName.value);
    form_data.append('price', inpPrice.value);
    form_data.append('category', inpSelect.value);

    fetch(url, {
      method: 'POST',
      body: form_data,
    })
      .then((res) => location.reload())
      .catch((error) => {
        alert('При добавлении Услуги произошла ошибка');
        console.log(error);
      });
  }
  async function getCategory() {
    let products = await fetch('/API/product/get.php').then((response) =>
      response.json()
    );
    inpSelect.innerHTML = '';
    for (let el of products) {
      inpSelect.innerHTML += `<option value="${el.name}">${el.name}</option>`;
    }
  }
})();

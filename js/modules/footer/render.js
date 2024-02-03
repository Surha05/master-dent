(function () {
  const section = document.querySelector('.js-footer-services');
  let listProduct = [];

  getData();
  function getData() {
    const url = '/API/product/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        for (let item of res) {
          listProduct.push({
            id: item.id,
            name: item.name,
            photo: item.photo,
            full_description: item.full_description,
          });
        }
        listProduct.reverse();

        render(listProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function render(listProduct) {
    let fragment = '';
    for (let i = 0; i < listProduct.length; i++) {
      const li = template(listProduct[i]);
      fragment += li;
    }

    section.insertAdjacentHTML('afterbegin', fragment);
  }

  function template({ id, name, photo, full_description } = {}) {
    return `
    <li id=${id}><a href="#">${name}</a></li>

    `;
  }
})();

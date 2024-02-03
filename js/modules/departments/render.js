(function () {
  const section = document.querySelector('.js-departments_row');

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
            description: item.description,
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
      if (i < 3) {
        const li = template(listProduct[i]);
        fragment += li;
      }
    }

    section.insertAdjacentHTML('afterbegin', fragment);
  }

  function template({ id, name, photo, description } = {}) {
    return `
      <div class="col-lg-3 col-md-6 dept_col" id=${id}>
        <div class="dept">
          <div class="dept_image"><img src="/images/product/${photo}" alt=""></div>
            <div class="dept_content text-center">
              <div class="dept_title">${name}</div>
              <div class="dept_subtitle">${description}</div>
            </div>
        </div>
      </div>
    `;
  }
})();

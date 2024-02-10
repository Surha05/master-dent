(function () {
  const section = document.querySelector('.js-features-services');
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
    <div class="feature feature-item" id=${id}>
      <div class="feature_image"><img src="/images/product/${photo}" alt=""></div>
      <div class="feature_content">
        <div class="section_title"><h2>${name}</h2></div>
        <div class="feature_text">
          <p>${full_description}</p>
        </div>
      </div>
    </div>
    `;
  }
})();

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
          let linkName = item.name.replaceAll(' ', '');
          listProduct.push({
            id: item.id,
            name: item.name,
            linkName: linkName,
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
  // <a href="/single-services.php?linkName=${linkName}"></a>

  function render(listProduct) {
    let fragment = '';
    for (let i = 0; i < listProduct.length; i++) {
      if (i < 4) {
        const li = template(listProduct[i]);
        fragment += li;
      }
    }

    section.insertAdjacentHTML('afterbegin', fragment);
  }

  function template({ id, name, photo, description, linkName } = {}) {
    return `

      <div class="dep-item" id=${id}>
          <a href="/single-services.php?linkName=${linkName}" class="dept">
            <div class="dept_image"><img src="/images/product/${photo}" alt=""></div>
              <div class="dept_content text-center">
                <div class="dept_title">${name}</div>
                <div class="dept_subtitle">${description}</div>
              </div>
          </a>
      </div>



    `;
  }
})();

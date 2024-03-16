(function () {
  const section = document.querySelector('.js-single-services');
  const parsedUrl = new URL(window.location.href);
  const linkHref = parsedUrl.searchParams.get('linkName');
  const sectionTitle = document.querySelector('.container-card-top');

  let linksServices = [];

  getDataService();
  getDataProduct();

  function getDataService() {
    const url = '/API/service/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (linkHref) {
          for (let item of res) {
            let linkName = item.category.replaceAll(' ', '');
            if (linkHref == linkName) {
              linksServices.push({
                id: item.id,
                name: item.name,
                price: item.price,
                category: item.category,
              });
            }
          }
        }
        renderContent(linksServices);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getDataProduct() {
    const url = '/API/product/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (linkHref) {
          for (let item of res) {
            let linkName = item.name.replaceAll(' ', '');
            if (linkHref == linkName) {
              let title = item.name;
              renderTitle(title);
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function renderTitle(listProducts) {
    let title = document.querySelector('.js-accordion-title');
    let subTitle = document.querySelector('.js-accordion-sub-title');

    title.textContent = listProducts;
    subTitle.textContent = 'Услуги: ' + listProducts;
  }

  function renderContent(listProducts) {
    let fragment = '';

    listProducts.forEach((item) => {
      const content = templateContent(item);
      fragment += content;
    });

    section.insertAdjacentHTML('afterbegin', fragment);
  }

  function templateContent({ id, name, price } = {}) {
    return `
  	
    <div class="accordion_panel-content" id=${id}>
     <p>${name}</p>
     <p class="accordion_panel-price">${price} руб.</p>
    </div>
  		
    `;
  }
})();

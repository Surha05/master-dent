(function () {
  const section = document.querySelector('.js-single-services');
  const parsedUrl = new URL(window.location.href);
  const linkHref = parsedUrl.searchParams.get('linkName');
  let linksServices = [];

  getData();

  function getData() {
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
        render(linksServices);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function render(linkNews) {
    let fragment = '';
    linkNews.forEach((el) => {
      const li = template(el);
      fragment += li;
    });

    section.insertAdjacentHTML('afterbegin', fragment);
  }

  function template({ id, name, price, category } = {}) {
    return `
    <div class="col-lg-8" id=${id}>
					<div class="row">
						<div class="col">
							<div class="section_title"><h2>${category}</h2></div>
						</div>
					</div>

					<div class="news_posts">
						<div class="accordion_container">
								<div class="accordion d-flex flex-row align-items-center"><div>Услуги: ${category}</div></div>
								<div class="accordion_panel">
									<div class="accordion_panel-content">
										<p>${name}</p>
										<p class="accordion_panel-price">${price} руб.</p>
									</div>
								</div>
							</div>
					</div>	
				</div>
    `;
  }
})();

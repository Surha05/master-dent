(function () {
  const section = document.querySelector('.js-single-services');
  const parsedUrl = new URL(window.location.href);
  const newId = parsedUrl.searchParams.get('id');
  let linksServices = [];

  getData();

  function getData() {
    const url = '/API/service/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (newId) {
          for (let item of res) {
            if (newId == item.id) {
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
							<div class="section_title"><h2>Accordions & Tabs</h2></div>
						</div>
					</div>

					<div class="news_posts js-single-services">
						<div class="accordion_container">
								<div class="accordion d-flex flex-row align-items-center"><div>A great medical team to help your needs</div></div>
								<div class="accordion_panel">
									<div class="accordion_panel-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellen tesque in luctus ex. Praesent luctus erat sit amet tortor aliquam bibendum.</p>
										<p class="accordion_panel-price">200 руб.</p>
									</div>
								</div>
							</div>
					</div>	
				</div>
    `;
  }
})();

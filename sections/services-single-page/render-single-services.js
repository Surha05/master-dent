(function () {
  const section = document.querySelector('.js-single-services');
  const parsedUrl = new URL(window.location.href);
  const linkHref = parsedUrl.searchParams.get('linkName');
  const sectionTitle = document.querySelector('.container-card-top');

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
        renderContent(linksServices);
        renderTitle(linksServices);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function renderTitle(listProducts) {
    let subTitle = document.querySelector('.js-accordion-sub-title');
    let firstElementOfArray = listProducts[0];
    subTitle.textContent = 'Услуги: ' + firstElementOfArray.category;
    
    let fragment = '';
    const title = templateSubtitle(firstElementOfArray);

    fragment += title;
    sectionTitle.insertAdjacentHTML('afterbegin', fragment);
  }

  function renderContent(listProducts) {
    let fragment = '';

    listProducts.forEach((item) => {
      const content = templateContent(item);
      fragment += content;
    });

    section.insertAdjacentHTML('afterbegin', fragment);
  }

  function templateSubtitle({ category } = {}) {
    return `
        <div class="section_title"><h2>${category}</h2></div>
    
    `;
  }

  function templateContent({ id, name, price, category } = {}) {
    return `
  	
    <div class="accordion_panel-content" id=${id}>
     <p>${name}</p>
     <p class="accordion_panel-price">${price} руб.</p>
    </div>
  		
    `;
  }

  // function render(linkNews) {
  //   let fragment = '';
  //   console.log(linkNews);

  //   linkNews.forEach((el) => {
  //     const li = template(el);
  //     fragment += li;
  //   });

  //   section.insertAdjacentHTML('afterbegin', fragment);
  // }

  // function template({ id, name, price, category } = {}) {
  //   return `
  //   <div class="col-lg-10" id=${id}>
  // 				<div class="row">
  // 					<div class="col">
  // 						<div class="section_title"><h2>${category}</h2></div>
  // 					</div>
  // 				</div>

  // 				<div class="news_posts">
  // 					<div class="accordion_container">
  // 							<div class="accordion d-flex flex-row align-items-center active"><div>Услуги: ${category}</div></div>
  // 							<div class="accordion_panel">
  // 								<div class="accordion_panel-content">
  // 									<p>${name}</p>
  // 									<p class="accordion_panel-price">${price} руб.</p>
  // 								</div>
  // 							</div>
  // 						</div>
  // 				</div>
  // 			</div>
  //   `;
  // }
})();

// <div class="col-lg-10" id=${id}>
// <div class="row">
//   <div class="col">
//     <div class="section_title"><h2>${category}</h2></div>
//   </div>
// </div>

// <div class="news_posts">
//   <div class="accordion_container">
//       <div class="accordion d-flex flex-row align-items-center active"><div>Услуги: ${category}</div></div>
//       <div class="accordion_panel">
//         <div class="accordion_panel-content">
//           <p>${name}</p>
//           <p class="accordion_panel-price">${price} руб.</p>
//         </div>
//       </div>
//     </div>
// </div>
// </div>
// `;

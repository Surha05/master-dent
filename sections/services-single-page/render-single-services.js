(function () {
  const section = document.querySelector('.js-single-services');
  const parsedUrl = new URL(window.location.href);
  const newId = parsedUrl.searchParams.get('id');
  let linkNews = [];

  getData();

  function getData() {
    const url = '/API/service/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (newId) {
          for (let item of res) {
            if (newId == item.id) {
              linkNews.push({
                id: item.id,
                name: item.name,
                photo: item.photo,
                description: item.description,
                create_date: +item.create_date,
              });
            }
          }
        }
        console.log(linkNews);
        render(linkNews);
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

  function template({ id, name, photo, description, create_date } = {}) {
    let date = new Date(create_date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `
      <div class="news_post" id${id}>
        <div class="news_image">
          <img src="/images/new/${photo}" alt="">
          <div class="news_date d-flex flex-column align-items-center justify-content-center">
              <div class="news_month">${day}.${month}.${year}</div>
          </div>
        </div>
        <div class="news_body">
          <div class="news_title"><a href="#">${name}</a></div>
          
          <div class="news_text">
            <p>${description}.</p>
          </div>
        </div>
      </div>
    `;
  }
})();

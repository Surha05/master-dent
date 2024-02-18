(function () {
  const section = document.querySelector('.js-posts');

  getData();

  function getData() {
    const url = '/API/new/get.php';
    let listNews = [];

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        for (let item of res) {
          listNews.push({
            id: item.id,
            name: item.name,
            photo: item.photo,
            description: item.description,
            create_date: +item.create_date,
          });
        }
        console.log(listNews);
        render(listNews);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function render(listNews) {
    let fragment = '';

    listNews.forEach((doctor) => {
      const li = template(doctor);
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
          <div class="news_link"><a href="/single-news.php?id=${id}">Перейти</a></div>
        </div>
      </div>
    `;
  }
})();

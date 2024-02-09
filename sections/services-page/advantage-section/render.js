(function () {
  const section = document.querySelector('.js-advantage');

  getData();
  function getData() {
    let listAdvantage = [];
    const url = '/API/advantage/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        for (let item of res) {
          listAdvantage.push({
            id: item.id,
            name: item.name,
            photo: item.photo,
            description: item.description,
          });
        }
        listAdvantage.reverse();

        render(listAdvantage);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function render(listAdvantage) {
    let fragment = '';
    listAdvantage.forEach((item) => {
      const li = template(item);
      fragment += li;
    });

    section.insertAdjacentHTML('afterbegin', fragment);
  }

  function template({ id, name, photo, description } = {}) {
    return `
    <div class="services-item" id=${id}, >
        <a href="/services.php" class="server-link">
          <div class="service text-center trans_200">
            <div class="service_icon">
              <img class="" src="/images/advantage/${photo}" alt="">
            </div>
            <div class="service_title trans_200">${name}</div>
            <div class="service_text">
              <p>${description}.</p>
            </div>
          </div>
        </a>
      </div>
    `;
  }
})(); 
 
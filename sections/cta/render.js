(function () {
  const section = document.querySelector('.js-cta');

  getData();

  function getData() {
    const url = '/API/action/get.php';
    let listItem = [];

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        for (let item of res) {
          listItem.push({
            id: item.id,
            title: item.title,
            description: item.description,
            button: item.button,
            photo: item.photo,
          });
        }

        renderSection(listItem);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function renderSection(listItem) {
    let fragment = '';
    listItem.forEach((item) => {
      const li = template(item);
      fragment += li;
    });

    section.insertAdjacentHTML('afterbegin', fragment);

    let linkTell = document.querySelector('.cta-tell');
    let data = {};

    getDataTell();

    function getDataTell() {
      const url = '/API/contact/get.php';

      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          data = res[0];
          renderTell(data);
        })
        .catch((error) => {
          alert('При загрузке секции Cta произошла ошибка');
          console.log(error);
        });
    }

    function renderTell({ phone }) {
      linkTell.href = 'tel:' + phone;
    }
  }

  function template({ id, title, description, button, photo } = {}) {
    return `
    <div class="cta js-cta" id${id}>
    <div class="cta_background" style="background-image: url('/images/about/${photo}')"></div>
      <div class="cta-container" >
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="cta_content text-center">
                <h2>${title}</h2>
                <p>${description}</p>
                <div class="button cta_button"><a href="#" class="cta-tell">${button}</a></div>
              </div>
            </div>
          </div>
        </div>		
        </div>
      </div>
    `;
  }
})();

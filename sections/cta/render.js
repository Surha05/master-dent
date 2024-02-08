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

        render(listItem);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function render(listItem) {
    let fragment = '';
    listItem.forEach((item) => {
      const li = template(item);
      fragment += li;
    });

    section.insertAdjacentHTML('afterbegin', fragment);
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
                <div class="button cta_button"><a href="#">${button}</a></div>
              </div>
            </div>
          </div>
        </div>		
        </div>
      </div>
    `;
  }
})();

(function () {
  const section = document.querySelector('.js-help-section');

  getData();
  function getData() {
    const url = '/API/help/get.php';
    let listItems = [];

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        for (let item of res) {
          listItems.push({
            id: item.id,
            title: item.title,
            description: item.description,
            button: item.button,
            photo: item.photo,
          });
        }
        render(listItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function render(listItems) {
    let fragment = '';
    listItems.forEach((item) => {
      const li = template(item);
      fragment += li;
    });

    section.insertAdjacentHTML('afterbegin', fragment);
  }

  function template({ id, title, description, button, photo } = {}) {
    return `
    <div class="col-lg-5" id=${id}>
      <div class="text_section_image"><img src="/images/about/${photo}" alt=""></div>
    </div>

    <div class="col-lg-7">
      <div class="text_section_content">
        <div class="section_title"><h2>${title}</h2></div>
        <div class="text_section_text">
          <p>${description}</p>
        </div>
        <div class="button text_section_button"><a href="#">${button}</a></div>
      </div>
    </div>
    `;
  }
})();

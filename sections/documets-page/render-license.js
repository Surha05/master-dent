(function () {
  const section = document.querySelector('.js-list-licenses');
  let listLicenses = [];

  getData();
  function getData() {
    const url = '/API/license/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        for (let item of res) {
          listLicenses.push({
            id: item.id,
            name: item.name,
            photo: item.photo,
          });
        }
        listLicenses.reverse();
        console.log(listLicenses);

        render(listLicenses);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function render(listLicenses) {
    let fragment = '';
    for (let i = 0; i < listLicenses.length; i++) {
      const li = template(listLicenses[i]);
      fragment += li;
    }

    section.innerHTML = fragment;
  }

  function template({ id, name, photo } = {}) {
    return `
    <div class="license__item">
			
      <a href="/docs/${photo}" class="gallery-lightbox" data-gall="license__item">
        <img src="/docs/${photo}" alt="${name}" class="license_img">
      </a>
		</div>
    `;
  }
})();

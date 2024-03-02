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

    section.insertAdjacentHTML('afterbegin', fragment);
  }

  function template({ id, name, photo } = {}) {
    return `
    <li id=${id}><a href="/docs/${photo}" target="_blank">${name}</a></li>

    `;
  }
})();

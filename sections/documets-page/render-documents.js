(function () {
  const section = document.querySelector('.js-list-documents');
  let listDocuments = [];

  getData();
  function getData() {
    const url = '/API/docs/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        for (let item of res) {
          listDocuments.push({
            id: item.id,
            name: item.name,
            photo: item.photo,
          });
        }
        listDocuments.reverse();

        render(listDocuments);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function render(listDocuments) {
    let fragment = '';
    for (let i = 0; i < listDocuments.length; i++) {
      const li = template(listDocuments[i]);
      fragment += li;
    }

    section.innerHTML = fragment;
  }

  function template({ id, name, photo } = {}) {
    return `
    <li id=${id}><a href="/docs/${photo}" target="_blank">${name}</a></li>

    `;
  }
})();

(function () {
  (function () {
    const section = document.querySelector('.js-dropdown-services');

    //запрет перехода по ссылке
    const linkDoctors = document.querySelector('.js-link-doctors');

    linkDoctors.addEventListener('click', (e) => {
      e.preventDefault();
    });

    getData();
    function getData() {
      const url = '/API/product/get.php';

      let listDoctors = [];

      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          for (let item of res) {
            let linkName = item.name.replaceAll(' ', '');
            listDoctors.push({
              id: item.id,
              name: item.name,
              linkName: linkName,
              photo: item.photo,
              description: item.description,
              full_description: item.full_description,
            });
          }
          console.log(listDoctors);
          render(listDoctors);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    function render(listDoctors) {
      let fragment = '';

      listDoctors.forEach((doctor) => {
        const li = template(doctor);
        fragment += li;
      });

      section.insertAdjacentHTML('afterbegin', fragment);
    }

    function template({ id, name, linkName} = {}) {
      return `
      <li id=${id}><a href="/single-services.php?linkName=${linkName}">${name}</a></li>
  
      `;
    }
  })();
})();

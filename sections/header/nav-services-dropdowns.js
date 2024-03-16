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

      let listServices = [];

      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          for (let item of res) {
            let linkName = item.name.replaceAll(' ', '');
            listServices.push({
              id: item.id,
              name: item.name,
              linkName: linkName,
            });
          }
          render(listServices);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    function render(listServices) {
      let fragment = '';

      listServices.forEach((item) => {
        const li = template(item);
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

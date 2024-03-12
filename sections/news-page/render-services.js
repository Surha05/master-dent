(function () {
  (function () {
    const section = document.querySelector('.js-news-sidebar');

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

      listServices.forEach((doctor) => {
        const li = template(doctor);
        fragment += li;
      });

      section.insertAdjacentHTML('afterbegin', fragment);
    }

    function template({ id, name, linkName } = {}) {
      return `
      <li id=${id}><a href="/single-services.php?linkName=${linkName}">${name}</a></li> 
  
      `;
    }
  })();
})();

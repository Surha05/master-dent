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
            listServices.push({
              id: item.id,
              name: item.name,
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
  
    function template({ id, name, post, photo, description } = {}) {
      return `
      <li id=${id}><a href="#">${name}</a></li>
  
      `;
    }
  })();
  
})();

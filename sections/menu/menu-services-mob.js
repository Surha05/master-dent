(function () {
  (function () {
    const section = document.querySelector('.js-dropdown-mobail-services');
  
    getData();
    function getData() {
      const url = '/API/product/get.php';
      let listProducts = [];
  
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          for (let item of res) {
            listProducts.push({
              id: item.id,
              name: item.name,
              post: item.post,
              photo: item.photo,
              description: item.description,
              full_description: item.full_description,
            });
          }
  
          render(listProducts);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    function render(listProducts) {
      let fragment = '';
  
      listProducts.forEach((doctor) => {
        const li = template(doctor);
        fragment += li;
      });
  
      section.insertAdjacentHTML('afterbegin', fragment);
    }
  
    function template({ id, name, post, photo, description } = {}) {
      return `
      <li id=${id}><a href="/single-doctor.php?id=${id}">${name}</a></li>
  
      `;
    }
  })();
  
})();

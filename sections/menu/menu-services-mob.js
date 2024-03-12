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
            let linkName = item.name.replaceAll(' ', '');
            listProducts.push({
              id: item.id,
              name: item.name,
              linkName: linkName,
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
   
    function template({ id, name, linkName } = {}) {
      return `
      <li id=${id}><a href="/single-services.php?linkName=${linkName}">${name}</a></li>
  
      `;
    }
  })();
  
})();

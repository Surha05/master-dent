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
      const url = '/API/service/get.php';
      let listDoctors = [];

      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          for (let item of res) {
            listDoctors.push({
              id: item.id,
              name: item.category,
              post: item.post,
              photo: item.photo,
              description: item.description,
              full_description: item.full_description,
            });
          }

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

    function template({ id, name, post, photo, description } = {}) {
      return `
      <li id=${id}><a href="/single-services.php?id=${id}">${name}</a></li>
  
      `;
    }
  })();
})();

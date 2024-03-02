(function () {
  const section = document.querySelector('.js-section');

  getData();
  function getData() {
    const url = '/API/galery/get.php';
    let listDoctors = [];

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        for (let item of res) {
          listDoctors.push({
            id: item.id,
            photo: item.photo,
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
    
    // GLightbox
    const galleryLightbox = GLightbox({
      selector: '.gallery-lightbox'
    });
  }

  function template({ id, photo } = {}) {
    return `
        <div class="" id=${id}>
          <div class="gallery-item">
            <a href="/images/galery/${photo}" class="gallery-lightbox" data-gall="gallery-item">
              <img src="/images/galery/${photo}" alt="" class="img-fluid">
            </a>
          </div>
        </div>    
        `;
  }
})();

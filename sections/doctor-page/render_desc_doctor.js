(function () {
  const section = document.querySelector('.js-doctor-content');

  const parsedUrl = new URL(window.location.href);
  const doctorId = parsedUrl.searchParams.get('id');

  getData();
  function getData() {
    const url = '/API/doctor/get.php';
    let listDoctors = [];

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (doctorId) {
          for (let item of res) {
            if (item.id == doctorId) {
              listDoctors.push({
                id: item.id,
                name: item.name,
                post: item.post,
                photo: item.photo,
                description: item.description,
                full_description: item.full_description,
              });
            }
          }
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

  function template({ id, name, post, photo, full_description } = {}) {
    return `
    <div class="news_post" id=${id}>
      <div class="news_image">
        <img src="images/doctor/${photo}" alt="">
      </div>
      <div class="news_body">
        <div class="news_title">${name}</div>
        <div class="news_info">
          <ul>
            <li class="news_author">${post}</li>
          </ul>
        </div>
        <div class="news_text">
          <p>${full_description}.</p>
        </div>
      </div>
    </div>
    `;
  }
})();

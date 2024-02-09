(function () {
  const section = document.querySelector('.js-team');

  getData();
  function getData() {
    const url = '/API/doctor/get.php';
    let listDoctors = [];

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        for (let item of res) {
          listDoctors.push({
            id: item.id,
            name: item.name,
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
      <div class="col-lg-3 team_col" id=${id}>
        <a href="/single-doctor.php?id=${id}" class="server-link">
          <div class="team_member">
            <div class="team_member_image d-flex flex-column align-items-center justify-content-end"><img src="images/doctor/${photo}" alt=""></div>
            <div class="team_member_info">
              <div class="team_member_name"><a href="#">${name}</a></div>
              <div class="team_member_title">${post}</div>
              <div class="team_member_desc">${description}</div>
            </div>
          </div>
        </a>
      </div>
    `;
  }
})();

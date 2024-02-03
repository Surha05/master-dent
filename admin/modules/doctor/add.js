(function () {
  const btnAdd = document.querySelector('#add-doctor-modal #btn-add');
  const inpName = document.querySelector('#add-doctor-modal #inp-name');
  const inpPost = document.querySelector('#add-doctor-modal #inp-post');
  const inpPhoto = document.querySelector('#add-doctor-modal #inp-photo');
  const inpDescription = document.querySelector('#add-doctor-modal #inp-description');
  const inpFullDescription = document.querySelector('#add-doctor-modal #inp-full-description');

  btnAdd.addEventListener('click', add);
  
  function add() {
    if (!validate()) return;
    send();
  }
  function validate() {
    let type = inpPhoto.files[0].type;
    if (inpName.value == '') {
      alert('Введите название');
      return false;
    }
    if (inpPhoto.files.length == 0) {
      alert('Добавьте фото');
      return false;
    }
    if (type != 'image/jpg' && type != 'image/jpeg' && type != 'image/png') {
      alert('Добавьте фото в формате JPEG или PNG');
      return false;
    }
    if (inpPhoto.files[0].size > 500000) {
      alert('Добавьте фото менее 500Кб');
      return false;
    }
    return true;
  }
  function send() {
    const url = '/API/doctor/add.php';
    const form_data = new FormData();
    form_data.append('name', inpName.value);
    form_data.append('post', inpPost.value);
    form_data.append('photo', inpPhoto.files[0]);
    form_data.append('description', inpDescription.value);
    form_data.append('full_description', inpFullDescription.value);

    fetch(url, {
      method: 'POST',
      body: form_data,
    })
      .then((res) => location.reload())
      .catch((error) => {
        alert('При добавлении Специалиста произошла ошибка');
        console.log(error);
      });
  }
})();

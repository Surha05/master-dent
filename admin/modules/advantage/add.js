(function () {
  const btnAdd = document.querySelector('#add-advantage-modal #btn-add');
  const inpName = document.querySelector('#add-advantage-modal #inp-name');
  const inpPhoto = document.querySelector('#add-advantage-modal #inp-photo');
  const inpDescription = document.querySelector('#add-advantage-modal #inp-description');

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
    const url = '/API/advantage/add.php';
    const form_data = new FormData();
    form_data.append('name', inpName.value);
    form_data.append('photo', inpPhoto.files[0]);
    form_data.append('description', inpDescription.value);

    fetch(url, {
      method: 'POST',
      body: form_data,
    })
      .then((res) => location.reload())
      .catch((error) => {
        alert('При добавлении Преимущества произошла ошибка');
        console.log(error);
      });
  }
})();

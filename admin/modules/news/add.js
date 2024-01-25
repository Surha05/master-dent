(function () {
  const btnAdd = document.querySelector('#add-new-modal #btn-add');
  const inpName = document.querySelector('#add-new-modal #inp-name');
  const inpPhoto = document.querySelector('#add-new-modal #inp-photo');
  const inpDesc = document.querySelector('#add-new-modal #description');

  btnAdd.addEventListener('click', add);

  function add() {
    if (!validate()) return;
    send();
  }
  function validate() {
    if (inpName.value == '') {
      alert('Введите Заголовок');
      return false;
    }
    if (inpDesc.value == '') {
      alert('Введите описание');
      return false;
    }
    if (inpPhoto.files.length == 0) {
      alert('Добавьте фото');
      return false;
    }
    if (inpPhoto.files[0].type != 'image/jpeg') {
      alert('Добавьте фото формата JPEG');
      return false;
    }
    if (inpPhoto.files[0].size > 200000) {
      alert('Добавьте фото менее 200Кб');
      return false;
    }
    return true;
  }
  function send() {
    const url = '/API/new/add.php';
    const date = new Date().getTime();
    const form_data = new FormData();
    form_data.append('name', inpName.value);
    form_data.append('photo', inpPhoto.files[0]);
    form_data.append('description', inpDesc.value);
    form_data.append('create_date', date);

    fetch(url, {
      method: 'POST',
      body: form_data,
    })
      .then((res) => location.reload())
      .catch((error) => {
        alert('При загрузке произошла ошибка');
        console.log(error);
      });
  }
})();

(function () {
  const btnAdd = document.querySelector('#add-license-modal #btn-add');
  const inpName = document.querySelector('#add-license-modal #inp-name');
  const inpPhoto = document.querySelector('#add-license-modal #inp-photo');

  btnAdd.addEventListener('click', add);

  function add() {
    if (!validate()) return;
    send();
  }
  function validate() {
    if (inpName.value == '') {
      alert('Введите Имя');
      return false;
    }
    if (inpPhoto.files.length == 0) {
      alert('Добавьте файл');
      return false;
    }
    return true;
  }
  function send() {
    const url = '/API/license/add.php';
    const form_data = new FormData();
    form_data.append('name', inpName.value);
    if (inpPhoto.files[0]) form_data.append('photo', inpPhoto.files[0]);

    fetch(url, {
      method: 'POST',
      body: form_data,
    })
      .then((res) => location.reload())
      .catch((error) => {
        alert('При загрузке Документа произошла ошибка');
        console.log(error);
      });
  }
})();

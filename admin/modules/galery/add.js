(function () {
  const btnAdd = document.querySelector('#add-galery-modal #btn-add');
  const inpPhoto = document.querySelector('#add-galery-modal #inp-photo');

  btnAdd.addEventListener('click', add);

  function add() {
    if (!validate()) return;
    send();
  }
  function validate() {
    if (inpPhoto.files.length == 0) {
      alert('Добавьте фото');
      return false;
    }
    return true;
  }
  function send() {
    const url = '/API/galery/add.php';
    const form_data = new FormData();
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

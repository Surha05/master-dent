(function () {
  const btnAdd = document.querySelector('#add-feedback-modal #btn-add');
  const inpName = document.querySelector('#add-feedback-modal #inp-name');
  const inpPhoto = document.querySelector('#add-feedback-modal #inp-photo');
  const inpDesc = document.querySelector('#add-feedback-modal #description');

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
    if (inpDesc.value == '') {
      alert('Введите описание');
      return false;
    }
    return true;
  }
  function send() {
    const url = '/API/feedback/add.php';
    const date = new Date().getTime();
    const form_data = new FormData();
    form_data.append('name', inpName.value);
    if(inpPhoto.files[0]) form_data.append('photo', inpPhoto.files[0]);
    form_data.append('description', inpDesc.value);
    form_data.append('moder', 'true');

    fetch(url, {
      method: 'POST',
      body: form_data,
    })
      .then((res) => location.reload())
      .catch((error) => {
        alert('При загрузке Отзыва произошла ошибка');
        console.log(error);
      });
  }
})();

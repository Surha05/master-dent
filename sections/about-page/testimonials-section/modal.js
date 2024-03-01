(function () {
  const openBtn = document.querySelector('.testimonials .about_button');
  const modal = document.querySelector('.tes-modal');
  const submitBtn = document.querySelector('.tes-modal .tes-modal__btn');
  const input = document.querySelector('.tes-modal .tes-modal__input');
  const textarea = document.querySelector('.tes-modal .tes-modal__textarea');
  const inpPhoto = document.querySelector('#tes-input-file');

  openBtn.addEventListener('click', openModal);
  modal.addEventListener('click', closeModal);
  submitBtn.addEventListener('click', send);

  function send() {
    const url = '/API/feedback/add.php';
    const form_data = new FormData();
    form_data.append('name', input.value);
    if (inpPhoto.files[0]) form_data.append('photo', inpPhoto.files[0]);
    form_data.append('description', textarea.value);

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
  function openModal(e) {
    e.preventDefault();
    modal.style.display = 'flex';
  }
  function closeModal(e) {
    let el = e.target;
    let bool =
      el.classList.contains('tes-modal') ||
      el.classList.contains('tes-modal__close');
    if (bool) modal.style.display = 'none';
  }
})();

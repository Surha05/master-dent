(function () {
  const section = document.querySelector('#galery-section .photo-galery');

  section.addEventListener('click', del);

  function del(e) {
    e.preventDefault();
    if (!e.target.classList.contains('photo-del')) return;
    let is_delete = confirm('Удалить фото?');
    if (!is_delete) return;

    let parent = e.target.closest('.photo-item');
    let id = parent.id;
    send(id);
  }
  function send(id) {
    const url = '/API/galery/del.php';
    const form_data = new FormData();
    form_data.append('id', id);

    fetch(url, {
      method: 'POST',
      body: form_data,
    })
      .then((res) => location.reload())
      .catch((error) => {
        alert('При удалении фото произошла ошибка');
        console.log(error);
      });
  }
})();

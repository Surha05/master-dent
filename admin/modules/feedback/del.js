(function () {
   
   const section = document.querySelector('#feedback-section .admin-list');

   section.addEventListener('click', del)

   function del(e) {
      e.preventDefault();
      if(!(e.target.id == 'btn-del-new')) return;
      let is_delete = confirm("Удалить отзыв?")
      if(!is_delete) return;

      let parent = e.target.closest('.admin-list__item');
      let id = parent.id;
      send(id);
   }
   function send(id) {
      const url = '/API/feedback/del.php';
      const form_data = new FormData();
      form_data.append('id', id);

      fetch(url, {
         method: 'POST',
         body: form_data,
      })
      .then(res => location.reload())
      .catch((error) => {
         alert('При удалении отзыва произошла ошибка');
         console.log(error);
      });
   }
   
})();
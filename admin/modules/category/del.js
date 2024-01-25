(function () {
   
   const section = document.querySelector('#category-section .admin-list');

   section.addEventListener('click', del)

   function del(e) {
      e.preventDefault();
      if(!(e.target.id == 'btn-del-category')) return;
      let is_delete = confirm("Удалить категорию?")
      if(!is_delete) return;

      let parent = e.target.closest('.admin-list__item');
      let id = parent.id;
      send(id);
   }
   function send(id) {
      const url = '/API/category/del.php';
      const form_data = new FormData();
      form_data.append('id', id);

      fetch(url, {
         method: 'POST',
         body: form_data,
      })
      .then(res => location.reload())
      .catch((error) => {
         alert('При загрузке произошла ошибка');
         console.log(error);
      });
   }
   
})();
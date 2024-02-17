(function () {
   
   const section = document.querySelector('#product-section .admin-list');

   section.addEventListener('click', del)

   function del(e) {
      e.preventDefault();
      if(!(e.target.id == 'btn-del-product')) return;
      let is_delete = confirm("Удалить услугу?")
      if(!is_delete) return;

      let parent = e.target.closest('.admin-list__item');
      let id = parent.id;
      send(id);
   }
   function send(id) {
      const url = '/API/service/del.php';
      const form_data = new FormData();
      form_data.append('id', id);

      fetch(url, {
         method: 'POST',
         body: form_data,
      })
      .then(res => location.reload())
      .catch((error) => {
         alert('При удалении Услуги произошла ошибка');
         console.log(error);
      });
   }
   
})();
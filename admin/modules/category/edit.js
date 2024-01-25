(function(){
   const section = document.querySelector('#category-section .admin-list');
   const modal = document.querySelector('#edit-category-modal');
   const btnSend = modal.querySelector('#btn-edit');
   const inpName = modal.querySelector('#inp-name');
   const inpDesc = modal.querySelector('#inp-desc');
   const inpPhoto = modal.querySelector('#inp-photo');
   let id;

   section.addEventListener('click', edit);
   btnSend.addEventListener('click', send);

   function edit(e) {
      e.preventDefault();
      if(!(e.target.id == 'btn-edit-category')) return;
      
      const parent = e.target.closest('.admin-list__item');
      const name = parent.querySelector('#data-name').textContent;
      const desc = parent.querySelector('#data-desc').textContent;
      id = parent.id;

      inpName.value = name;
      inpDesc.value = desc;
   }
   function send(e) {
      e.preventDefault();
      const url = '/API/category/edit.php';
      const form_data = new FormData();
      form_data.append('id', id);
      form_data.append('name', inpName.value);
      form_data.append('desc', inpDesc.value);
      form_data.append('photo', inpPhoto.files[0]);

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
(function(){
   const section = document.querySelector('#feedback-section .admin-list');
   const modal = document.querySelector('#edit-feedback-modal');
   const btnSend = modal.querySelector('#btn-edit');
   const inpName = modal.querySelector('#inp-name');
   const inpDesc = modal.querySelector('#description');
   const inpPhoto = modal.querySelector('#inp-photo');
   let id;

   section.addEventListener('click', edit);
   btnSend.addEventListener('click', send);

   function edit(e) {
      e.preventDefault();
      if(!(e.target.id == 'btn-edit-new')) return;
      
      const parent = e.target.closest('.admin-list__item');
      const name = parent.querySelector('#data-name').textContent;
      const description = parent.querySelector('#data-desc').textContent;
      id = parent.id;

      inpName.value = name;
      inpDesc.value = description;
   }
   function send(e) {
      e.preventDefault();
      const url = '/API/feedback/edit.php';
      const form_data = new FormData();
      form_data.append('id', id);
      form_data.append('name', inpName.value);
      form_data.append('photo', inpPhoto.files[0]);
      form_data.append('description', inpDesc.value);

      fetch(url, {
         method: 'POST',
         body: form_data,
      })
      .then(res => location.reload())
      .catch((error) => {
         alert('При редактировании отзыва произошла ошибка');
         console.log(error);
      });
   }
})();
(function(){
   const section = document.querySelector('#advantage-section .admin-list');
   const modal = document.querySelector('#edit-advantage-modal');
   const btnSend = modal.querySelector('#btn-edit');
   const inpName = modal.querySelector('#inp-name');
   const inpPhoto = modal.querySelector('#inp-photo');
   const inpDescription = modal.querySelector('#inp-description');
   let id;

   section.addEventListener('click', edit);
   btnSend.addEventListener('click', send);

   function edit(e) {
      e.preventDefault();
      if(!(e.target.id == 'btn-edit-advantage')) return;
      
      const parent = e.target.closest('.admin-list__item');
      const name = parent.querySelector('#data-name').textContent;
      const description = parent.querySelector('#data-description').textContent;
      id = parent.id;

      inpName.value = name;
      inpDescription.value = description;
   }
   function send(e) {
      e.preventDefault();
      const url = '/API/advantage/edit.php';
      const form_data = new FormData();
      form_data.append('id', id);
      form_data.append('name', inpName.value);
      form_data.append('photo', inpPhoto.files[0]);
      form_data.append('description', inpDescription.value);

      fetch(url, {
         method: 'POST',
         body: form_data,
      })
      .then(res => location.reload())
      .catch((error) => {
         alert('При редактировании Преимущества произошла ошибка');
         console.log(error);
      });
   }
})();
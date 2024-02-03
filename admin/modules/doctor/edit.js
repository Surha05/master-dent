(function(){
   const section = document.querySelector('#doctor-section .admin-list');
   const modal = document.querySelector('#edit-doctor-modal');
   const btnSend = modal.querySelector('#btn-edit');
   const inpName = modal.querySelector('#inp-name');
   const inpPost = modal.querySelector('#inp-post');
   const inpPhoto = modal.querySelector('#inp-photo');
   const inpDescription = modal.querySelector('#inp-description');
   const inpFullDescription = modal.querySelector('#inp-full-description');
   let id;

   section.addEventListener('click', edit);
   btnSend.addEventListener('click', send);

   function edit(e) {
      e.preventDefault();
      if(!(e.target.id == 'btn-edit-doctor')) return;
      
      const parent = e.target.closest('.admin-list__item');
      const name = parent.querySelector('#data-name').textContent;
      const post = parent.querySelector('#data-post').textContent;
      const description = parent.querySelector('#data-description').textContent;
      const fullDescription = parent.querySelector('#data-full-description').textContent;
      id = parent.id;

      inpName.value = name;
      inpPost.value = post;
      inpDescription.value = description;
      inpFullDescription.value = fullDescription;
   }
   function send(e) {
      e.preventDefault();
      const url = '/API/doctor/edit.php';
      const form_data = new FormData();
      form_data.append('id', id);
      form_data.append('name', inpName.value);
      form_data.append('post', inpPost.value);
      form_data.append('photo', inpPhoto.files[0]);
      form_data.append('description', inpDescription.value);
      form_data.append('full-description', inpFullDescription.value);

      fetch(url, {
         method: 'POST',
         body: form_data,
      })
      .then(res => location.reload())
      .catch((error) => {
         alert('При редактировании Специалиста произошла ошибка');
         console.log(error);
      });
   }
})();
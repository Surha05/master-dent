(function(){
   const btnAdd = document.querySelector('#add-category-modal #btn-add');
   const inpName = document.querySelector('#add-category-modal #inp-name');
   const inpPhoto = document.querySelector('#add-category-modal #inp-photo');
   const inpDesc = document.querySelector('#add-category-modal #inp-desc');
   
   btnAdd.addEventListener('click', add);
   
   function add() {
      if(!validate()) return;
      send();
   }
   function validate() {
      if(inpName.value == '') {
         alert('Введите название');
         return false;
      }
      if(inpPhoto.files.length == 0) {
         alert('Добавьте фото');
         return false;
      }
      if(inpPhoto.files[0].type != 'image/jpeg') {
         alert('Добавьте фото формата JPEG');
         return false;
      }
      if(inpPhoto.files[0].size > 500000) {
         alert('Добавьте фото менее 500Кб');
         return false;
      }
      return true;
   }
   function send() {
      const url = '/API/category/add.php';
      const form_data = new FormData();
      form_data.append('name', inpName.value);
      form_data.append('photo', inpPhoto.files[0]);
      form_data.append('desc', inpDesc.value);

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
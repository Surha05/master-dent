(function(){
   const section = document.querySelector('#product-section .admin-list');
   const modal = document.querySelector('#edit-product-modal');
   const btnSend = modal.querySelector('#btn-edit');
   const inpName = modal.querySelector('#inp-name');
   const inpPhoto = modal.querySelector('#inp-photo');
   const inpPrice = modal.querySelector('#inp-price');
   const inpCategory = modal.querySelector('#inp-category');
   const checkDiscount = document.querySelector('#edit-product-modal #check-discount');
   const inpDiscount = document.querySelector('#edit-product-modal #inp-discount');
   const inpDescription = document.querySelector('#edit-product-modal #inp-description');
   let id;
   let activeCategory;

   section.addEventListener('click', edit);
   btnSend.addEventListener('click', send);
   checkDiscount.addEventListener('change', checkedDiscount);
   inpDiscount.addEventListener('change', validateDiscount);

   function validateDiscount() {
      if(+inpDiscount.value < 0) inpDiscount.value = 0;
      if(+inpDiscount.value > 100) inpDiscount.value = 100;
   }
   function checkedDiscount() {
      if(checkDiscount.checked) {
        inpDiscount.disabled = false;
      } else {
        inpDiscount.disabled = true;
      }
   }
   function edit(e) {
      e.preventDefault();
      if(!(e.target.id == 'btn-edit-product')) return;

      getCategory();
      
      const parent = e.target.closest('.admin-list__item');
      const name = parent.querySelector('#data-name').textContent;
      const price = parent.querySelector('#data-price').textContent;
      const discount = parent.querySelector('#data-discount').textContent;
      const description = parent.querySelector('#data-description').textContent;
      activeCategory = parent.querySelector('#data-category').textContent;
      id = parent.id;

      inpDiscount.value = +discount;
      inpName.value = name;
      inpPrice.value = price;
      inpDescription.value = description;
   }
   function send(e) {
      e.preventDefault();
      const url = '/API/product/edit.php';
      const form_data = new FormData();
      form_data.append('id', id);
      form_data.append('name', inpName.value);
      form_data.append('photo', inpPhoto.files[0]);
      form_data.append('price', inpPrice.value);
      form_data.append('category', inpCategory.value);
      form_data.append('description', inpDescription.value);
      if(checkDiscount.checked) {
         form_data.append('discount', inpDiscount.value);
      } else {
         form_data.append('discount', 0);
      }

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
   function getCategory() {
      const url = '/API/category/get.php';
  
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          renderCategory(res);
        })
        .catch((error) => {
          alert('При загрузке категорий произошла ошибка');
          console.log(error);
        });
   }
   function renderCategory(arr) {
      arr.map(item => {
         if(item.name == activeCategory) inpCategory.innerHTML += `<option selected value="${item.name}">${item.name}</option>`;
         else inpCategory.innerHTML += `<option value="${item.name}">${item.name}</option>`;
      })
   }
})();
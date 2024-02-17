import { products } from '../../../API/product/get.js';

(function(){
   const section = document.querySelector('#product-section .admin-list');
   const modal = document.querySelector('#edit-product-modal');
   const btnSend = modal.querySelector('#btn-edit');
   const inpName = modal.querySelector('#inp-name');
   const inpPrice = modal.querySelector('#inp-price');
   const inpCategory = modal.querySelector('#inp-category');
   let id;

   section.addEventListener('click', edit);
   btnSend.addEventListener('click', send);

   async function edit(e) {
      e.preventDefault();
      if(!(e.target.id == 'btn-edit-product')) return;
      
      const parent = e.target.closest('.admin-list__item');
      const name = parent.querySelector('#data-name').textContent;
      const price = parent.querySelector('#data-price').textContent;
      const category = parent.querySelector('#data-category').textContent;
      id = parent.id;

      inpName.value = name;
      inpPrice.value = price;

      for(let el of await products) {
         if(el.name == category) {
            inpCategory.innerHTML += `<option selected value="${el.name}">${el.name}</option>`
         } else {
            inpCategory.innerHTML += `<option value="${el.name}">${el.name}</option>`
         }
      }
   }
   function send(e) {
      e.preventDefault();
      const url = '/API/service/edit.php';
      const form_data = new FormData();
      form_data.append('id', id);
      form_data.append('name', inpName.value);
      form_data.append('price', inpPrice.value);
      form_data.append('category', inpCategory.value);

      console.log(id)
      console.log(inpName.value)
      console.log(inpPrice.value)
      console.log(inpCategory.value)

      fetch(url, {
         method: 'POST',
         body: form_data,
      })
      .then(res => location.reload())
      .catch((error) => {
         alert('При редактировании Услуги произошла ошибка');
         console.log(error);
      });
   }
})();
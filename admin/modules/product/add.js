(function () {
  const btnAdd = document.querySelector('#add-product-modal #btn-add');
  const inpName = document.querySelector('#add-product-modal #inp-name');
  const inpPhoto = document.querySelector('#add-product-modal #inp-photo');
  // const inpPrice = document.querySelector('#add-product-modal #inp-price');
  const inpCategory = document.querySelector('#add-product-modal #inp-category');
  // const checkDiscount = document.querySelector('#add-product-modal #check-discount');
  // const inpDiscount = document.querySelector('#add-product-modal #inp-discount');
  const inpDescription = document.querySelector('#add-product-modal #inp-description');
  const inpFullDescription = document.querySelector('#add-product-modal #inp-full-description');

  getCategory();

  btnAdd.addEventListener('click', add);
  // checkDiscount.addEventListener('change', checkedDiscount);
  // inpDiscount.addEventListener('change', validateDiscount);

  // function validateDiscount() {
  //   if(+inpDiscount.value < 0) inpDiscount.value = 0;
  //   if(+inpDiscount.value > 100) inpDiscount.value = 100;
  // }
  // function checkedDiscount() {
  //   if(checkDiscount.checked) {
  //     inpDiscount.disabled = false;
  //   } else {
  //     inpDiscount.disabled = true;
  //   }
  // }
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
      inpCategory.innerHTML += `<option value="${item.name}">${item.name}</option>`;
    })
  }
  function add() {
    if (!validate()) return;
    send();
  }
  function validate() {
    let type = inpPhoto.files[0].type;
    if (inpName.value == '') {
      alert('Введите название');
      return false;
    }
    // if (inpPrice.value == '') {
    //   alert('Введите цену');
    //   return false;
    // }
    if (inpPhoto.files.length == 0) {
      alert('Добавьте фото');
      return false;
    }
    if (type != 'image/jpg' && type != 'image/jpeg' && type != 'image/png') {
      alert('Добавьте фото в формате JPEG или PNG');
      return false;
    }
    if (inpPhoto.files[0].size > 500000) {
      alert('Добавьте фото менее 500Кб');
      return false;
    }
    return true;
  }
  function send() {
    const url = '/API/product/add.php';
    // const date = new Date().getTime();
    const form_data = new FormData();
    form_data.append('name', inpName.value);
    form_data.append('photo', inpPhoto.files[0]);
    // form_data.append('price', inpPrice.value);
    form_data.append('category', inpCategory.value);
    // form_data.append('create_date', date);
    form_data.append('description', inpDescription.value);
    form_data.append('full_description', inpFullDescription.value);
    
    // if(checkDiscount.checked) {
    //   form_data.append('discount', inpDiscount.value);
    // } else {
    //   form_data.append('discount', 0);
    // }
    

    fetch(url, {
      method: 'POST',
      body: form_data,
    })
      .then((res) => location.reload())
      .catch((error) => {
        alert('При загрузке произошла ошибка');
        console.log(error);
      });
  }
})();

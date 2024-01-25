(function () {
  const inpTitle = document.querySelector('#hero-title');
  const inpDesc = document.querySelector('#hero-desc');
  const inpBtn = document.querySelector('#hero-btn');
  const inpImg = document.querySelector('#hero-img');
  const btnSubmit = document.querySelector('#hero-submit');
  let data = {};

  btnSubmit.addEventListener('click', sendData);
  inpImg.addEventListener('change', choiceImg);
  getData();

  function choiceImg() {
    if (inpImg.files[0].type !== 'image/jpg' && inpImg.files[0].type !== 'image/jpeg') {
      alert('Выберите фото в формате JPG');
      return;
    }
    if (inpImg.files[0].size > 500000) {
      alert('Выберите фото меньше 500Кб');
      return;
    }
  }
  function sendData(e) {
    e.preventDefault();
    let title = inpTitle.value;
    let desc = inpDesc.value;
    let button = inpBtn.value;

    const url = '/API/hero/update.php';
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', desc);
    formData.append('button', button);
    if(inpImg.files[0]) {
      formData.append('photo', inpImg.files[0]);
    }

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        window.location.reload();
      })
      .catch(() => {
        alert('Ошибка обновления секции Hero');
      });
  }
  function getData() {
    const url = '/API/hero/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        data = res[0];
        render(data);
      })
      .catch((error) => {
        alert('При загрузке секции Hero произошла ошибка');
        console.log(error);
      });
  }
  function render({ title, description, button }) {
    inpTitle.value = title;
    inpDesc.value = description;
    inpBtn.value = button;
  }
})();

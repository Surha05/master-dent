(function () {
  const inpTitle = document.querySelector('#help-title');
  const inpDesc = document.querySelector('#help-desc');
  const inpBtn = document.querySelector('#help-btn');
  const inpImg = document.querySelector('#help-img');
  const btnSubmit = document.querySelector('#help-submit');
  let data = {};

  btnSubmit.addEventListener('click', sendData);
  inpImg.addEventListener('change', choiceImg);
  getData();

  function sendData(e) {
    e.preventDefault();
    let title = inpTitle.value;
    let desc = inpDesc.value;
    let button = inpBtn.value;

    const url = '/API/help/update.php';
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
        // console.log(res.text());
        window.location.reload();
        // getData();
      })
      .catch(() => {
        alert('Ошибка обновления секции Помощь');
      });
  }
  function getData() {
    const url = '/API/help/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        data = res[0];
        render(data);
      })
      .catch((error) => {
        alert('При загрузке секции Помощь произошла ошибка');
        console.log(error);
      });
  }
  function render({ title, description, button }) {
    inpTitle.value = title;
    inpDesc.value = description;
    inpBtn.value = button;
  }
  function choiceImg() {
    if (inpImg.files[0].type !== 'image/jpg' && inpImg.files[0].type !== 'image/jpeg' && inpImg.files[0].type !== 'image/png') {
      alert('Выберите фото в формате JPG или PNG');
      return;
    }
    if (inpImg.files[0].size > 500000) {
      alert('Выберите фото меньше 500Кб');
      return;
    }
  }
})();

(function () {
  const inpTitle = document.querySelector('#action-title');
  const inpDesc = document.querySelector('#action-desc');
  const inpBtn = document.querySelector('#action-btn');
  const inpImg = document.querySelector('#action-img');
  const btnSubmit = document.querySelector('#action-submit');
  let data = {};

  btnSubmit.addEventListener('click', sendData);
  inpImg.addEventListener('change', choiceImg);
  getData();

  function sendData(e) {
    e.preventDefault();
    let title = inpTitle.value;
    let desc = inpDesc.value;
    let button = inpBtn.value;

    const url = '/API/action/update.php';
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
        alert('Ошибка обновления секции Призыв к действию');
      });
  }
  function getData() {
    const url = '/API/action/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        data = res[0];
        render(data);
      })
      .catch((error) => {
        alert('При загрузке секции Призыв к действию произошла ошибка');
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

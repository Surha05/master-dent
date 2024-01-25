(function () {
  const inpTitle = document.querySelector('#about-title');
  const inpDesc = document.querySelector('#about-desc');
  const inpCount = document.querySelector('#about-count');
  const inpCountDesc = document.querySelector('#about-count-desc');
  const inpImg = document.querySelector('#about-img');
  const btnSubmit = document.querySelector('#about-submit');
  let data = {};

  btnSubmit.addEventListener('click', sendData);
  inpImg.addEventListener('change', choiceImg);
  getData();

  function sendData(e) {
    e.preventDefault();
    let title = inpTitle.value;
    let desc = inpDesc.value;
    let count = inpCount.value;
    let countDesc = inpCountDesc.value;

    const url = '/API/about/update.php';
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', desc);
    formData.append('count', count);
    formData.append('countDesc', countDesc);
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
        alert('Ошибка обновления секции about');
      });
  }
  function getData() {
    const url = '/API/about/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        data = res[0];
        render(data);
      })
      .catch((error) => {
        alert('При загрузке секции about произошла ошибка');
        console.log(error);
      });
  }
  function render({ title, description, count, countDesc }) {
    inpTitle.value = title;
    inpDesc.value = description;
    inpCount.value = count;
    inpCountDesc.value = countDesc;
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

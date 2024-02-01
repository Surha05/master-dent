(function () {
  const titleBlock = document.querySelector('#js_about_title');
  const descBlock = document.querySelector('#js_about_text');
  const btn = document.querySelector('#js_about_btn');
  const imgBlock = document.querySelector('#js_about_img');

  let data = {};

  getData();

  function getData() {
    const url = '/API/about/get.php';

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

  function render({ title, description, button, photo }) {
    imgBlock.src = '/images/about/' + photo;
    titleBlock.textContent = title;
    descBlock.textContent = description;
    btn.textContent = button;
  }
})();

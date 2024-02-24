(function () {
  const backgroundBlock = document.querySelector('#js_home_background');
  const titleBlock = document.querySelector('#js_home_title');
  const descBlock = document.querySelector('#js_home_text');
  const btn = document.querySelector('#js_home_btn');

  let data = {};

  getData();

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

  function render({ title, description, button, photo}) {
    backgroundBlock.style.backgroundImage = `url("/images/hero/${photo}")`;
    titleBlock.textContent = title;
    descBlock.textContent = description;
    btn.textContent = button;
  }
})();

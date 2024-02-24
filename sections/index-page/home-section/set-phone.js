(function () {
  const btn = document.querySelector('#js_home_btn');

  let data = {};

  getDataPhone();
  function getDataPhone() {
    const url = '/API/contact/get.php';

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

  function render({ phone }) {
    btn.href = 'tel:' + phone;
  }
})();

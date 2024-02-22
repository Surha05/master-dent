(function () {
  const section = document.querySelector('.js-cta');

  window.addEventListener('DOMContentLoaded', () => {
    renderTell();
  });

  // section.addEventListener('load', renderTell, true);
  function renderTell() {
    let tell = document.querySelector('.cta-tell');

    let data = {};

    getData();

    function getData() {
      const url = '/API/contact/get.php';

      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          data = res[0];
          render(data);
        })
        .catch((error) => {
          alert('При загрузке секции Cta произошла ошибка');
          console.log(error);
        });
    }

    function render({ phone }) {
      tell.href = 'tel:' + phone;
    }
  }
})();

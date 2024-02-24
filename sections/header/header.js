(function () {
  (function () {
    const tell = document.querySelector('#header__tell-1');
    const tell2 = document.querySelector('#header__tell-2');

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
          alert('При загрузке секции Hero произошла ошибка');
          console.log(error);
        });
    }

    function render({ phone, phone2, view_phone, view_phone2 }) {
      tell.textContent = view_phone;
      tell.href = 'tel:' + phone;

      tell2.textContent = view_phone2;
      tell2.href = 'tel:' + phone2;

    }
  })();
})();

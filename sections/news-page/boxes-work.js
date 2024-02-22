(function () {
  let tell = document.querySelector('#work_phone-1');
  let tell2 = document.querySelector('#work_phone-2');
  let timeWork = document.querySelector('#working_hours_p');

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

  function render({ phone, phone2, view_phone, view_phone2, clock }) {
    tell.textContent = view_phone;
    tell.href = 'tel:' + phone;

    tell2.textContent = view_phone2;
    tell2.href = 'tel:' + phone2;

    timeWork.textContent = clock;
  }
})();

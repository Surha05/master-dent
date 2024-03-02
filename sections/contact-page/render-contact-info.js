(function () {
  let tell = document.querySelector('#contact_phone-1');
  let tell2 = document.querySelector('#contact_phone-2');
  let envelopeBlock = document.querySelector('#contact-envelope');
  const imgBlock = document.querySelector('#js_contact_img');

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
        alert('При загрузке секции Контакты произошла ошибка');
        console.log(error);
      });
  }

  function render({
    phone,
    phone2,
    view_phone,
    view_phone2,
    mail,
    img
  }) {
    tell.textContent = view_phone;
    tell.href = 'tel:' + phone;

    tell2.textContent = view_phone2;
    tell2.href = 'tel:' + phone2;
    envelopeBlock.href = 'mailto:' + mail;

    imgBlock.src = '/images/contact/' + img;

  }
})();

(function () {
  let tell = document.querySelector('#footer_phone-1');
  let tell2 = document.querySelector('#footer_phone-2');
  let whatsappBlock = document.querySelector('#footer-whatsapp');
  let instagramBlock = document.querySelector('#footer-instagram');
  let envelopeBlock = document.querySelector('#footer-envelope');

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
        alert('При загрузке секции footer произошла ошибка');
        console.log(error);
      });
  }

  function render({
    phone,
    phone2,
    view_phone,
    view_phone2,
    wa,
    insta,
    mail,
  }) {
    tell.textContent = view_phone;
    tell.href = 'tel:' + phone;

    tell2.textContent = view_phone2;
    tell2.href = 'tel:' + phone2;

    whatsappBlock.href = href = 'https://wa.me/' + wa;
    instagramBlock.href = insta;
    envelopeBlock.href = 'mailto:' + mail;
  }
})();

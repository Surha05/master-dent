(function () {
  const inpPhone = document.querySelector('#phone');
  const inpPhone2 = document.querySelector('#phone2');
  const inpViewPhone = document.querySelector('#view-phone');
  const inpViewPhone2 = document.querySelector('#view-phone2');
  const inpWA = document.querySelector('#wa');
  const inpTelegram = document.querySelector('#telegram');
  const inpInsta = document.querySelector('#insta');
  const inpMail = document.querySelector('#mail');
  const inpClock = document.querySelector('#clock-work');
  const contactImg = document.querySelector('#contact-img');
  const btnSubmit = document.querySelector('#contact-submit');
  let data = {};

  btnSubmit.addEventListener('click', sendData);
  getData();

  function sendData(e) {
    e.preventDefault();
    
    let phone = inpPhone.value;
    let phone2 = inpPhone2.value;
    let viewPhone = inpViewPhone.value;
    let viewPhone2 = inpViewPhone2.value;
    let wa = inpWA.value;
    let telegram = inpTelegram.value;
    let insta = inpInsta.value;
    let mail = inpMail.value;
    let clock = inpClock.value;
    let img = contactImg.files[0];

    const url = '/API/contact/update.php';
    const formData = new FormData();
    formData.append('phone', phone);
    formData.append('phone2', phone2);
    formData.append('view_phone', viewPhone);
    formData.append('view_phone2', viewPhone2);
    formData.append('wa', wa);
    formData.append('telegram', telegram);
    formData.append('insta', insta);
    formData.append('mail', mail);
    formData.append('clock', clock);
    formData.append('img', img);

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
        alert('Ошибка обновления Контактов');
      });
  }
  function getData() {
    const url = '/API/contact/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        data = res[0];
        render(data);
      })
      .catch((error) => {
        alert('При загрузке Контактов произошла ошибка');
        console.log(error);
      });
  }
  function render({ phone, phone2, view_phone, view_phone2, wa, telegram, insta, mail, clock }) {
    inpPhone.value = phone;
    inpPhone2.value = phone2;
    inpViewPhone.value = view_phone;
    inpViewPhone2.value = view_phone2;
    inpWA.value = wa;
    inpTelegram.value = telegram;
    inpInsta.value = insta;
    inpMail.value = mail;
    inpClock.value = clock;
  }
})();

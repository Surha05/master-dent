(function () {
  const inpAdvant1 = document.querySelector('#advantage-1');
  const inpDesc1 = document.querySelector('#advantage-1-desc');
  const inpAdvant2 = document.querySelector('#advantage-2');
  const inpDesc2 = document.querySelector('#advantage-2-desc');
  const inpAdvant3 = document.querySelector('#advantage-3');
  const inpDesc3 = document.querySelector('#advantage-3-desc');
  const inpAdvant4 = document.querySelector('#advantage-4');
  const inpDesc4 = document.querySelector('#advantage-4-desc');
  const btnSubmit = document.querySelector('#advantage-submit');
  let data = {};

  btnSubmit.addEventListener('click', sendData);
  getData();

  function sendData(e) {
    e.preventDefault();
    let advant1 = inpAdvant1.value;
    let desc1 = inpDesc1.value;
    let advant2 = inpAdvant2.value;
    let desc2 = inpDesc2.value;
    let advant3 = inpAdvant3.value;
    let desc3 = inpDesc3.value;
    let advant4 = inpAdvant4.value;
    let desc4 = inpDesc4.value;

    const url = '/API/advantage/update.php';
    const formData = new FormData();
    formData.append('advant1', advant1);
    formData.append('desc1', desc1);
    formData.append('advant2', advant2);
    formData.append('desc2', desc2);
    formData.append('advant3', advant3);
    formData.append('desc3', desc3);
    formData.append('advant4', advant4);
    formData.append('desc4', desc4);

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
        alert('Ошибка обновления секции Преимущества');
      });
  }
  function getData() {
    const url = '/API/advantage/get.php';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        data = res[0];
        render(data);
      })
      .catch((error) => {
        alert('При загрузке секции Преимущества произошла ошибка');
        console.log(error);
      });
  }
  function render({ advant1, desc1, advant2, desc2, advant3, desc3, advant4, desc4 }) {
    inpAdvant1.value = advant1;
    inpDesc1.value = desc1;
    inpAdvant2.value = advant2;
    inpDesc2.value = desc2;
    inpAdvant3.value = advant3;
    inpDesc3.value = desc3;
    inpAdvant4.value = advant4;
    inpDesc4.value = desc4;
  }
})();

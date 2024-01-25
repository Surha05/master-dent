(function () {
   const validBoard = document.querySelector('.valid-board');
   const loginInput = document.querySelector('#login');
   const passwordInput = document.querySelector('#password');
   const submitBtn = document.querySelector('#submit');

   submitBtn.addEventListener('click', validate);

   function validate(e) {
      e.preventDefault();
      if(loginInput.value === '') {
         validBoard.textContent = 'Введите логин';
         validBoard.classList.add('t-red');
         return;
      }
      if(passwordInput.value === '') {
         validBoard.textContent = 'Введите пароль';
         validBoard.classList.add('t-red');
         return;
      }
      validBoard.textContent = 'Отправка данных ...';
      validBoard.classList.remove('t-red');
      auth();
   }

   function auth() {
      
      const url = '/admin/modules/auth/login.php';
      const form_data = new FormData();
      form_data.append('login', loginInput.value);
      form_data.append('password', passwordInput.value);
      fetch(url, {
         method: 'POST',
         body: form_data,
      })
      .then(res => res.json())
      .then((res) => {
         if(res) {
            sessionStorage.setItem ('auth', 'true');
            location.replace("/admin/");
         } else {
            validBoard.textContent = 'Логин или пароль не верны';
            validBoard.classList.add('t-red');
         }
      })
      .catch((error) => {
        alert('Логин или Пароль не прошли проверку');
        console.log(error);
      });
    }
})();
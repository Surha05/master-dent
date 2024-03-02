(function () {
  (function () {
    const section = document.querySelector('.js-section-slider');
  
    getData();
    function getData() {
      let listFeedback = [];
      const url = '/API/feedback/get.php';
  
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          for (let item of res) {
            listFeedback.push({
              id: item.id,
              name: item.name,
              photo: item.photo,
              description: item.description,
            });
          }
          // listFeedback.reverse();
  
          render(listFeedback);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    function render(listFeedback) {
      let fragment = '';
      listFeedback.forEach((item) => {
        const li = template(item);
        fragment += li;
      });
  
      section.insertAdjacentHTML('afterbegin', fragment);
    }
  
    function template({ id, name, photo, description } = {}) {
      return `
      <div class="col-lg-6 test_col swiper-slide" id=${id}>
        <div class="testimonial">
          <div class="test_icon d-flex flex-column align-items-center justify-content-center"><img src="images/quote.png" alt=""></div>
          <div class="test_text">${description}.</div>
          <div class="test_author d-flex flex-row align-items-center justify-content-start">
            <div class="test_author_image"><div><img src="images/feedback/${photo}" alt=""></div></div>
            <div class="test_author_name"><a href="#">${name}</a></div>
          </div>
        </div>
      </div>
      `;
    }
  })(); 
   
})();

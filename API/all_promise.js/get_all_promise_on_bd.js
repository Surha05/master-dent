function getDataonBd() {
  return Promise.all([
    // Массив из Promise элементов
    fetch('/API/category/get.php').then((response) => response.json()),
    fetch('/API/product/get.php').then((response) => response.json()),
  ]);
  // .then((results) => {
  //   let arrCategory = results[0];
  //   let arrProduct = results[1];
  //   console.log(arrCategory);
  // });
} 

export default getDataonBd;

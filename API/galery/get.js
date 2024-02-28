export let galery = fetch('/API/galery/get.php').then((response) =>
  response.json()
);

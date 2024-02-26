export let license = fetch('/API/license/get.php').then((response) =>
  response.json()
);

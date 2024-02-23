export let docs = fetch('/API/docs/get.php').then((response) =>
  response.json()
);

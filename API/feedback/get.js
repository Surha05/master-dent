export let feedback = fetch('/API/feedback/get.php').then((response) =>
  response.json()
);

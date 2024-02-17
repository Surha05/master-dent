export let products = fetch('/API/service/get.php').then((response) => response.json());

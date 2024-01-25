export let products = fetch('/API/product/get.php').then((response) => response.json());

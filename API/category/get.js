export let category = fetch('/API/category/get.php').then((response) => response.json());
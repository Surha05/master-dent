export let products = fetch('/API/doctor/get.php').then((response) => response.json());

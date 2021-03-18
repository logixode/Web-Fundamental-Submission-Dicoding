let month = new Date().getMonth();
let year = new Date().getFullYear();

let semester = month < 6 ? (year - 2019) * 2 : (year - 2019) * 2 + 1;

document.getElementById("semester").innerText = semester;

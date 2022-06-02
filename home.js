function owener() {
  window.open(`https://twitter.com/abipravi1`, "_blank");
}

// function go() {
// 	const username = document.getElementById('username').value;
//     const location = window.location.href;
//     const loca = location
// 	const newlocation = location + '?user=' + username;
// 	window.location.href = '/home.html';
// }
//

function changevalue() {
  const username = document.getElementById("username").value;
  document.getElementById(
    "div121"
  ).innerHTML += `<a class="bi bi-search btn btn-outline-warning" href='user.html?user=${username}' ></a>`;
  document.getElementById("username").value = username;
}

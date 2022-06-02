// var username1;
const url = window.location.search;
const params = new URLSearchParams(url);
var username1 = params.get("user");
var loading = false;
function navigate() {
  window.open(`https://twitter.com/${username1}`, "_blank");
}

function owener() {
  window.open(`https://twitter.com/abipravi1`, "_blank");
}
async function initialcall() {
  // username1 = window.prompt('Enter User Name');

  document.getElementById("username").innerHTML =
    `<p onclick="navigate()" class="h6 text-primary" href="https://twitter.com/${username1}">@` +
    username1 +
    "</p>";
}

async function share() {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
  Toastify({
    text: "Copied",
    duration: 3000,
    destination: url,
    newWindow: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "rgb(0 0 0 / 54%)",
      color: "white",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

async function getData() {
  var userdata;
  document.getElementById("datacard").classList.remove("d-flex");
  document.getElementById("datacard").style.display = "none";
  document.getElementById("loading").classList.add("loading");
  document.getElementById("loading").classList.remove("loadingfalse");
  await fetch(`https://newsapi-abipravi.herokuapp.com/twitter/${username1}`)
    .then((response) => response.json())
    .then((data) => (userdata = data));
  let cont = document.getElementById("contents");
  document.getElementById("twittercard").innerHTML +=
    '<p class="h6 text-white" >' + userdata.name + "</p>";
  cont.innerHTML = `<div class="d-flex flex-column align-items-center"><p class="text-warning h6">Followers</p><p class="h5 text-white">${userdata.followers}</p></div><div class="vr text-success"></div><div class="d-flex flex-column align-items-center"><p class="text-warning h6">Following</p><p class="h5 text-white">${userdata.following}</p></div><div class="vr text-success"></div><div class="d-flex flex-column align-items-center"><p class="text-warning h6">Tweets</p><p class="h5 text-white">${userdata.tweets}</p></div>`;
  document.getElementById("datacard").classList.add("d-flex");
  document.getElementById("loading").classList.add("loadingfalse");
  document.getElementById("loading").classList.remove("loading");
}

initialcall();
getData();

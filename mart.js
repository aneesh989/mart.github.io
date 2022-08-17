function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[120px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[120px]"),
      list.classList.remove("opacity-100"));
}
function proceed() {
  document.getElementById("photo").style.display = "none";
  document.getElementById("photo2").style.display = "block";
}
function signin() {
  var email = document.getElementById("email-address").value;
  var pass = document.getElementById("password").value;

  let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  if (!email || !pass) {
    document.getElementById("errors").innerHTML = "Please Enter Details!";
  } else if (!checkEmail) {
    document.getElementById("errors").innerHTML =
      "You have entered an invalid email address!";
  } else {
    window.location.href = "./contact.html";
  }
}

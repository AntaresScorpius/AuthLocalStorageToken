let fullname = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let btn = document.getElementById("btn");
if (!localStorage.getItem("name")) {
  window.open("./index.html", "_self");
}
fullname.innerHTML = "Full Name: " + localStorage.getItem("name");
email.innerHTML = "Email: " + localStorage.getItem("email");
pass.innerHTML = "Password: " + localStorage.getItem("password");
// console.log(fullname, email, pass);
btn.addEventListener("click", (e) => {
  console.log("logout");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  if (!localStorage.getItem("name")) {
    window.open("./index.html", "_self");
  }
});

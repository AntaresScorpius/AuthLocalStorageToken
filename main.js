let form = document.getElementsByClassName("forms");
let btn = document.getElementById("btn");
let err = document.getElementById("error");
let islogged = document.getElementById("isLogged");

console.log(form[0]);
console.log(form.fullname);
console.log(btn);
if (localStorage.getItem("name")) {
  btn.disabled = true;
}
const rand = () => Math.random().toString(36).substring(2);

btn.addEventListener("click", (e) => {
  err.style.display = "none";
  islogged.style.display = "none";
  e.preventDefault();
  let name = form[0].elements["fullname"].value;
  let email = form[0].elements["email"].value;
  let pass = form[0].elements["password"].value;
  let confirmpass = form[0].elements["confirmpass"].value;
  let token = (rand() + rand()).substring(0, 16);
  console.log("token", token);
  console.log();
  if (!name || !email || !pass || !confirmpass) {
    err.style.display = "initial";
    return;
  }
  if (pass !== confirmpass) {
    alert("pass dont match");
    console.log("pass not match");
    return;
  }
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", pass);
  localStorage.setItem("token", token);
  islogged.style.display = "initial";
  //   window.open("./profile.html", "_self");
});

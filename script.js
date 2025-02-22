const paragraph = document.getElementById("paragraph");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    paragraph.textContent = `warmatebulia`;
  } else {
    paragraph.textContent = `warumatebelia`;
  }
});

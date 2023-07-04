function login() {
  var username = document.querySelector("#username").value;
  var password = document.querySelector("#password").value;

  if (username === "admin" && password === "password") {
    alert("Login Succesfully");
    window.location.href = "main.html";
  } else {
    alert("Username or Password incorrect");
  }
}

document.querySelector("#button").addEventListener("click", login);

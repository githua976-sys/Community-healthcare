document.getElementById("registerBtn").addEventListener("click", function () {

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let role = document.getElementById("role").value;

  // validation
  if (!username || !email || !password || !role) {
    alert("Please fill all fields");
    return;
  }

  // create user object
  let user = {
    username,
    email,
    password,
    role
  };

  // save user
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration successful!");

  // redirect to login
  window.location.href = "login.html";

});
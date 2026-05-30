document.getElementById("loginBtn").addEventListener("click", function () {

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please fill all fields");
    return;
  }

  // get saved user
  let savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No registered account found");
    return;
  }

  // check credentials
  if (
    savedUser.username === username &&
    savedUser.password === password
  ) {

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", savedUser.role);

    alert("Login successful!");

    window.location.href = "patient-dashboard.html";

  } else {
    alert("Invalid username or password");
  }

});
document.getElementById("loginBtn").addEventListener("click", function () {

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  // login
  localStorage.setItem("isLoggedIn", "true");

  alert("Login successful!");

  // check if user selected a doctor
  let selectedDoctor = localStorage.getItem("selectedDoctor");

  if (selectedDoctor) {
    window.location.href = "appointment.html";
  } else {
    window.location.href = "doctors.html"; // or homepage
  }

});
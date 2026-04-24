document.getElementById("loginBtn").addEventListener("click", function () {

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  // SIMPLE LOGIN (for school project)
  localStorage.setItem("isLoggedIn", "true");

  alert("Login successful!");

  // redirect back to appointment
  window.location.href = "appointment.html";

});
function checkLogin() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    window.location.href = "appointment.html";
  } else {
    alert("Please log in first");
    window.location.href = "login.html";
  }
}
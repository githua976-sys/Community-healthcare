document.addEventListener("DOMContentLoaded", function () {

  let doctor = localStorage.getItem("selectedDoctor");
  let isLoggedIn = localStorage.getItem("isLoggedIn");

  const text = document.getElementById("selectedDoctorText");

  //  protect page (force login)
  if (isLoggedIn !== "true") {
    alert("Please log in first");
    window.location.href = "login.html";
    return;
  }

  // show doctor
  if (doctor) {
    text.innerText = "Booking with " + doctor;
  } else {
    text.innerText = "No doctor selected";
  }

});
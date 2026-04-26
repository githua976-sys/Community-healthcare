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
document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let doctor = localStorage.getItem("selectedDoctor");

  let appointment = {
    doctor: doctor,
    name: document.querySelector("input[type='text']").value,
    phone: document.querySelector("input[type='tel']").value,
    date: document.querySelector("input[type='date']").value
  };

  // get existing appointments or create empty array
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  // add new appointment
  appointments.push(appointment);

  // save back
  localStorage.setItem("appointments", JSON.stringify(appointments));

  alert("Appointment booked successfully!");

  // clear selected doctor
  localStorage.removeItem("selectedDoctor");

  // redirect to MY APPOINTMENTS PAGE
  window.location.href = "my-appointments.html";
});

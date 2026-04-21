// SEARCH DOCTORS
const searchInput = document.getElementById("searchInput");
const doctors = document.querySelectorAll(".doctor-card");

searchInput.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();

  doctors.forEach(doctor => {
    const name = doctor.getAttribute("data-name");

    if (name.includes(value)) {
      doctor.style.display = "block";
    } else {
      doctor.style.display = "none";
    }
  });
});


// STORE SELECTED DOCTOR
const buttons = document.querySelectorAll(".book-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    const doctorName = this.getAttribute("data-doctor");
    localStorage.setItem("selectedDoctor", doctorName);
  });
});
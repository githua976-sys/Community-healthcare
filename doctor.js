// SEARCH DOCTORS
const searchInput = document.getElementById("searchInput");
const doctors = document.querySelectorAll(".doctor-card");

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  doctors.forEach(doctor => {
    const name = doctor.getAttribute("data-name").toLowerCase();

    if (name.includes(value)) {
      doctor.classList.remove("hidden");
    } else {
      doctor.classList.add("hidden");
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
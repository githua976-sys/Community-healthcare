document.addEventListener("DOMContentLoaded", function () {

  let searchInput = document.getElementById("searchDoctor");
  let doctors = document.querySelectorAll(".doctor-card");

  searchInput.addEventListener("keyup", function () {
    let value = this.value.toLowerCase();

    doctors.forEach(function (doctor) {
      let name = doctor.getAttribute("data-name").toLowerCase();

      if (name.includes(value)) {
        doctor.style.display = "block";
      } else {
        doctor.style.display = "none";
      }
    });
  });

});

// FILTER BUTTONS
let buttons = document.querySelectorAll("[data-filter]");
let doctors = document.querySelectorAll(".doctor-card");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let filter = this.getAttribute("data-filter");

    doctors.forEach(function (doctor) {
      let name = doctor.getAttribute("data-name").toLowerCase();

      if (filter === "all" || name.includes(filter)) {
        doctor.style.display = "block";
      } else {
        doctor.style.display = "none";
      }
    });
  });
});
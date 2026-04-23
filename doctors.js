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
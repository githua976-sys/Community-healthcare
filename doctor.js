// SEARCH DOCTORS
document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("searchInput");

  if (!searchInput) {
    console.log("Search input not found");
    return;
  }

  const doctors = document.querySelectorAll(".doctor-card");

  searchInput.addEventListener("input", function () {

    const value = searchInput.value.toLowerCase();

    doctors.forEach(function (doctor) {

      const name = (doctor.getAttribute("data-name") || "").toLowerCase();

      if (name.indexOf(value) !== -1) {
        doctor.style.display = "";
      } else {
        doctor.style.display = "none";
      }

    });

  });

});
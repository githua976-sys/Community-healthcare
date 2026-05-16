document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("searchService");
  const services = document.querySelectorAll(".service");

  searchInput.addEventListener("keyup", () => {

    let filter = searchInput.value.toLowerCase();

    services.forEach(service => {

      let serviceName = service
        .querySelector(".service-name")
        .textContent
        .toLowerCase();

      if (serviceName.includes(filter)) {
        service.style.display = "block";
      } else {
        service.style.display = "none";
      }

    });

  });

});
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchService");

  searchInput.addEventListener("input", function () {
    const value = this.value.toLowerCase();
    const services = document.querySelectorAll(".service");

    services.forEach(service => {
      const name = service
        .querySelector(".service-name")
        .textContent
        .toLowerCase();

      service.style.display = name.includes(value) ? "block" : "none";
    });
  });
});
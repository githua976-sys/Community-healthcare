document.addEventListener("DOMContentLoaded", function () {

  // OOP CLASS
  class Doctor {
    constructor(name, specialization, image) {
      this.name = name;
      this.specialization = specialization;
      this.image = image;
    }

    createCard() {
      return `
        <div class="doctor-card bg-white p-5 rounded-lg shadow"
             data-name="${this.name.toLowerCase()} ${this.specialization.toLowerCase()}">

          <img src="${this.image}"
               onerror="this.src='https://via.placeholder.com/80'"
               class="w-20 h-20 rounded-full mx-auto mb-3">

          <h3 class="text-center font-semibold">${this.name}</h3>
          <p class="text-center text-blue-600 text-sm">${this.specialization}</p>

          <button class="book-btn block mt-4 w-full bg-blue-600 text-white py-2 rounded"
                  data-doctor="${this.name}">
            Book Appointment
          </button>
        </div>
      `;
    }
  }

  // DATA
  const doctorsList = [
    new Doctor("Dr. Nyambura", "Pediatrician", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256"),
    new Doctor("Dr. Nelson", "Surgeon", "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=256"),
    new Doctor("Dr. Antony", "Dentist", "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=256"),
    new Doctor("Dr. Debra", "Optician", "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=256"),
    new Doctor("Dr. Aisha", "Gynecologist", "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=256"),
    new Doctor("Dr. Brian", "Cardiologist", "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=256"),
    new Doctor("Dr. Faith", "Neurologist", "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=256"),
    new Doctor("Dr. James", "Dermatologist", "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=256")
  ];

  const container = document.getElementById("doctorContainer");

  // DISPLAY FUNCTION (FIXED)
  function displayDoctors(list) {
    let html = "";

    list.forEach(doc => {
      html += doc.createCard();
    });

    container.innerHTML = html;
  }

  

  // SEARCH
  document.getElementById("searchDoctor").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();

    let filtered = doctorsList.filter(doc =>
      doc.name.toLowerCase().includes(value) ||
      doc.specialization.toLowerCase().includes(value)
    );

    displayDoctors(filtered);
  });

  // FILTER BUTTONS
  document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.addEventListener("click", function () {

      let filter = this.getAttribute("data-filter");

      let filtered;

      if (filter === "all") {
        filtered = doctorsList;
      } else {
        filtered = doctorsList.filter(doc =>
          doc.specialization.toLowerCase() === filter.toLowerCase()
        );
      }

      displayDoctors(filtered);
    });
  });

});

// HANDLE BOOK BUTTON CLICK
document.addEventListener("click", function(e) {

  if (e.target.classList.contains("book-btn")) {

    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      window.location.href = "appointment.html";
    } else {
      alert("Please log in first!");
      window.location.href = "login.html";
    }

  }

});
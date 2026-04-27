document.addEventListener("DOMContentLoaded", function () {

  let isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    alert("Please log in first");
    window.location.href = "login.html";
    return;
  }

  let list = document.getElementById("appointmentsList");
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  // Stats
  document.getElementById("totalAppointments").innerText = appointments.length;

  let today = new Date().toISOString().split("T")[0];
  let todayCount = appointments.filter(app => app.date === today).length;
  document.getElementById("todayAppointments").innerText = todayCount;

  if (appointments.length === 0) {
    list.innerHTML = "<p>No appointments yet</p>";
    return;
  }

  appointments.forEach((app, index) => {

    let card = document.createElement("div");
    card.className = "bg-white p-5 rounded-xl shadow hover:shadow-lg transition";

    card.innerHTML = `
      <h3 class="font-bold text-lg mb-2">${app.name}</h3>
      <p><strong>Doctor:</strong> ${app.doctor}</p>
      <p><strong>Phone:</strong> ${app.phone}</p>
      <p><strong>Date:</strong> ${app.date}</p>

      <div class="flex justify-between mt-4">
        <button onclick="deleteAppointment(${index})"
          class="bg-red-500 text-white px-3 py-1 rounded">
          Cancel
        </button>

        <span class="text-green-600 font-semibold">✔ Confirmed</span>
      </div>
    `;

    list.appendChild(card);
  });

});

function deleteAppointment(index) {
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  appointments.splice(index, 1);

  localStorage.setItem("appointments", JSON.stringify(appointments));

  alert("Appointment removed");

  location.reload();
}

function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}
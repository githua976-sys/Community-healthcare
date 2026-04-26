document.addEventListener("DOMContentLoaded", function () {
  let list = document.getElementById("appointmentsList");

  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  if (appointments.length === 0) {
    list.innerHTML = "<p>No appointments yet</p>";
    return;
  }

  appointments.forEach(app => {
    let div = document.createElement("div");
    div.innerHTML = `
      <p><strong>Doctor:</strong> ${app.doctor}</p>
      <p><strong>Name:</strong> ${app.name}</p>
      <p><strong>Phone:</strong> ${app.phone}</p>
      <p><strong>Date:</strong> ${app.date}</p>
      <hr>
    `;
    list.appendChild(div);
  });
});
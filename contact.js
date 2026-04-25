document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.querySelector("input[type='text']").value;
  let email = document.querySelector("input[type='email']").value;
  let message = document.querySelector("textarea").value;

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  let contactData = {
    name: name,
    email: email,
    message: message
  };

  // save 
  localStorage.setItem("contactMessage", JSON.stringify(contactData));

  alert("Message sent successfully!");

  // reset form
  document.getElementById("contactForm").reset();
});
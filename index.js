document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("footerForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop default submit

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if all fields are filled
    if (name !== "" && email !== "" && message !== "") {

      // Redirect to application page
      window.location.href = "application.html";

    } else {

      // Stay on same page
      alert("Please fill all fields before submitting.");
      window.location.href = window.location.href;

    }

  });

});
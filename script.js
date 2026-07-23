document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("bookingForm");

  // Form Submission Handler Logic
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const fullName = document.getElementById("fullname").value;
      const email = document.getElementById("email").value;
      const destination = document.getElementById("destination").value;
      const travelDate = document.getElementById("travel-date").value;
      const travelers = document.getElementById("travelers").value;

      if (fullName && email && destination && travelDate) {
        alert(
          `Thank you, ${fullName}! Your inquiry request for ${destination.toUpperCase()} (${travelers} travelers) departing on ${travelDate} has been successfully received. We will contact you soon.`,
        );
        bookingForm.reset();
      } else {
        alert("Please fill in all the required form fields properly.");
      }
    });
  }

  // See More Packages Interaction Feedback logic
  const seeMoreBtn = document.querySelector(".see-more-btn");
  if (seeMoreBtn) {
    seeMoreBtn.addEventListener("click", function () {
      alert("Redirecting you to our extended holiday catalog...");
    });
  }
});

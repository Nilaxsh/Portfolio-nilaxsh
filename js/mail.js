
function SendMSG(e) {
  e.preventDefault(); // Prevent default form submission

  // Select form input elements
  let nam_txt = document.querySelector("#name");
  let email_txt = document.querySelector("#email");
  let message_txt = document.querySelector("#message");

  // Check if any required field is empty
  if (nam_txt.value === "" || email_txt.value === "" || message_txt.value === "") {
      return alert("Please fill in all required fields.");
  }

  // Construct email body
  let body = "Name: " + nam_txt.value + "\nEmail: " + email_txt.value + "\nMessage: " + message_txt.value;

  // Prepare data to send via EmailJS
  let emailData = {
      from_name: nam_txt.value,
      to_name: "Receiver's Name", // Update with actual receiver's name or email
      message: body
  };

  // Send email using EmailJS
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData, 'YOUR_USER_ID')
      .then(function(response) {
          console.log("Email sent successfully!", response);
          success(); // Display success message
      }, function(error) {
          console.error("Email sending failed:", error);
          failure(); // Display failure message
      });

  // Clear form fields after submission
  nam_txt.value = "";
  email_txt.value = "";
  message_txt.value = "";
}

function success() {
  let thank = document.querySelector(".msg-pop-up");
  thank.style.display = "block";
  setTimeout(function() {
      thank.style.display = "none";
  }, 1000);
}

function failure() {
  let fail = document.querySelector(".failed-msgpop");
  fail.style.display = "block";
  setTimeout(function() {
      fail.style.display = "none";
  }, 1000);
}

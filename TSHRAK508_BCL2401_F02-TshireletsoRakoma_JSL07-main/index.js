document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');
  const downloadLink = document.getElementById('downloadLink');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 🚨 Get input values
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage'); // Get personal message input
    const courseNameInput = document.getElementById('courseName'); // Get course name input

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    if (studentName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // 🚨 Generate certificate content dynamically
    const certificateHTML = `
      <div style="width: 75%; margin: auto;">
        <h3 style="text-align: center;">Certificate of Achievement</h3>
        <p style="text-align: center;">This is to certify that</p>
        <p style="text-align: center;"><strong>${studentName}</strong></p>
        <p style="text-align: center;">has almost completed the</p>
        <p style="text-align: center;"><strong>${courseName}</strong> <strong>course</strong>.</p>
        <p style="text-align: center; white-space: nowrap;">With legendary perseverance and world-class bad-assery for never giving up🏆</p>
        <p></p> <!-- Add an empty paragraph for spacing -->
        <div style="text-align: center;">
          <img src="Logo/logo.png" alt="Logo" style="max-width: 100%; height: auto;">
        </div>
        <div style="margin-top: 20px;"> <!-- Adding margin-top to separate input text -->
          <p style="text-align: center;">${personalMessage}</p> <!-- Display personal message directly -->
        </div>
      </div>
    `;

    // Set the certificate content
    certificateContent.innerHTML = certificateHTML;

    // Show the modal
    modal.style.display = 'block';
  });

  downloadLink.addEventListener('click', function () {
    // Convert certificate content to PDF and trigger download
    html2pdf().from(certificateContent).save();
  });

  closeModal.addEventListener('click', function () {
    // Hide the modal when close button is clicked
    modal.style.display = 'none';
  });
});




// Listen for the DOMContentLoaded event to ensure the script runs after the HTML content is fully loaded.
// Get references to important DOM elements:
//   - The form element (cardForm)
//   - The modal element (modal)
//   - The area where the certificate content will be displayed (certificateContent)
//   - The close button element within the modal (closeModal)
// Hide the modal initially by setting its display style property to 'none'.
// Add a submit event listener to the form.
// Prevent the default form submission behavior.
// Get input values from form fields:
//   - Student name input field (studentNameInput)
//   - Personal message input field (personalMessageInput)
//   - Course name input field (courseNameInput)
// Retrieve the values entered by the user:
//   - Student name (studentName)
//   - Personal message (personalMessage)
//   - Course name (courseName) with a fallback to 'a course' if no input
// Check if student name and personal message are not empty:
//   - Show an alert if any field is empty
//   - Exit the function early if fields are empty
// Generate the HTML content for the certificate dynamically using template literals.
// Set the generated certificate content into the certificate content area.
// Clear form inputs after submission:
//   - Clear student name input field
//   - Clear personal message input field
//   - Clear course name input field if it exists
// Show the modal by setting its display style property to 'block'.
// Add an event listener to the close button within the modal to hide the modal when clicked.
// Hide the modal by setting its display style property to 'none' when the close button is clicked.
// A comment before the downloadLink.addEventListener() explains that the certificate will be downloaded when the download link is clicked.
// Inside the downloadLink.addEventListener(), there's a comment indicating that the certificate content is converted to a PDF and downloaded when the download link is clicked.

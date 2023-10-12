function submitForm(event) {
    event.preventDefault();

    // Get form input values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (gender.length === 0) {
        alert("Please select a gender.");
        return;
    }

    // Display submission details in a popup
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    popup.style.display = "block";
    popupContent.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender[0].value}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    resetForm();
}

function resetForm() {
    const form = document.getElementById("surveyForm");
    form.reset();
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

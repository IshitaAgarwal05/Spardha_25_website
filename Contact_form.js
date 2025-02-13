// Send details via mail
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        contact: document.getElementById("contact").value,
        email: document.getElementById("email").value,
        university: document.getElementById("university").value,
        city: document.getElementById("city").value,
        game: document.getElementById("game").value
    };

    emailjs.send("service_cfmdki9", "template_cnn87ut", parms)
        .then((response) => {
            alert("Email sent successfully!");
            console.log("Email Sent", response);
        })
        .catch((error) => {
            alert("Failed to send email.");
            console.error("Email Error:", error);
        });
}  
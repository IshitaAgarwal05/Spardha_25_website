// Gender Selection
// Function to display game selection based on the domain chosen
function showGameSelection() {
    const domain = document.getElementById("domain").value;
    const gameSelection = document.getElementById("game");

    gameSelection.innerHTML = ""; // Clear previous options

    if (domain === "E-Sports") {
        gameSelection.style.display = 'block';
        gameSelection.style.marginTop = '20px';
        gameSelection.innerHTML = `
            <option value="">Select Game</option>
            <option value="BGMI">BGMI</option>
        `;
    } else if (domain === "Flagship") {
        gameSelection.style.display = 'block';
        gameSelection.style.marginTop = '20px';
        gameSelection.innerHTML = `
            <option value="">Select Game</option>
            <option value="Cricket">Cricket</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Basketball">Basketball</option>
            <option value="Futsal Football">Futsal Football</option>
            <option value="7-a-side Football">7-a-side Football</option>
            <option value="Badminton">Badminton</option>
            <option value="Table Tennis">Table Tennis</option>
        `;
    } else {
        gameSelection.style.display = 'none';
    }

    document.getElementById("gameSelection").style.display = (domain !== "") ? "block" : "none";
}

// Send details via mail
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        contact: document.getElementById("contact").value,
        email: document.getElementById("email").value,
        university: document.getElementById("university").value,
        city: document.getElementById("city").value,
        domain: document.getElementById("domain").value,
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
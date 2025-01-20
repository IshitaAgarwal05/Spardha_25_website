// // Title split reveal animation logic
// function runAnimation() {
//   const container = document.querySelector(".title-container");
//   container.classList.remove("open");

//   // Set dynamic width for slide doors
//   const slideWidth = (container.offsetWidth - container.offsetHeight) / 2 - 3;
//   document.querySelectorAll(".slide").forEach(slide => {
//     slide.style.width = `${slideWidth}px`;
//   });

//   container.classList.add("open");

//   setTimeout(() => {
//     document.querySelector(".countdown-container").style.display = "block";
//     setInterval(updateCountdown, 1000); // Start countdown update
//   }, 1300); // Wait for animation to complete
// }
// setTimeout(runAnimation, 500);







// scroll countdown numbers
function startCountdownAnimation(id, finalValue) {
  const element = document.getElementById(id);
  const span = element.querySelector("span");

  finalValue = finalValue.toString().padStart(2, "0");
  const finalNumber = parseInt(finalValue); // Final target number
  let currentNumber = 0; // Start from 0
  const intervalSpeed = 50; // Base speed for each increment

  // Animate each number independently
  const interval = setInterval(() => {
      currentNumber++;
      const formattedNumber = currentNumber.toString().padStart(2, "0");
      span.textContent = formattedNumber; // Update the number display

      // Stop when the number reaches its target
      if (currentNumber === finalNumber) {
          clearInterval(interval);
      }
  }, intervalSpeed);
}

// Initialize the countdown with independent timing for each value
function initializeCountdown() {
  const now = new Date();
  const targetDate = new Date("2025-01-31T23:59:59"); // Replace with your target date
  const diff = targetDate - now;

  if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      // Animate each number independently
      startCountdownAnimation("days", days);
      startCountdownAnimation("hours", hours);
      startCountdownAnimation("minutes", minutes);
      startCountdownAnimation("seconds", seconds);
  }
}
window.onload = initializeCountdown;









// Events table functioning
function openEvents(evt, eventName) {
  var i, eventSections, tablinks;

  // Hide all event sections
  eventSections = document.getElementsByClassName("Events");
  for (i = 0; i < eventSections.length; i++) {
      eventSections[i].style.display = "none";
  }

  // Remove the active class from all tabs
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }

  // Display the clicked tab's content
  document.getElementById(eventName).style.display = "block";

  // Add the active class to the clicked tab
  evt.currentTarget.classList.add("active");
}

// Automatically open the default tab (Flagship)
document.getElementById("myLink").click();





// Rulebook pdf opening
function openRulebook() {
  const rulebookPath = "assets/rulebook.pdf";
  window.open(rulebookPath, "_blank");
}





// Sponsors' Scrolling
const track = document.querySelector('.sponsor-track');
  let offset = 0; // Initial offset for scrolling
  const slideWidth = track.firstElementChild.offsetWidth; // Width of each sponsor slide

  function scrollSponsors() {
    offset += slideWidth; // Move to the next set of logos
    if (offset >= track.scrollWidth / 2) { 
      // Reset if we've scrolled through all logos once
      offset = 0;
    }
    track.style.transform = `translateX(-${offset}px)`;
  }

  // Automatically scroll every 5 seconds
  setInterval(scrollSponsors, 5000);




// Set the event date and time
const eventDate = new Date("February 21, 2025 10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = eventDate - now;

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  } else {
    // Countdown expired
    document.querySelector(".countdown-container").innerHTML =
      "<h1>Event Started!</h1>";
  }
}
setInterval(updateCountdown, 1000);
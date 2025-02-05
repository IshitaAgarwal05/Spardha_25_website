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

  document.getElementById(eventName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
document.getElementById("myLink").click();





// Rulebook pdf opening
function openRulebook() {
  const rulebookPath = "assets/rulebook.pdf";
  window.open(rulebookPath, "_blank");
}





// Sponsors' Scrolling
// const track = document.querySelector('.sponsor-track');
//   let offset = 0; // Initial offset for scrolling
//   const slideWidth = track.firstElementChild.offsetWidth; // Width of each sponsor slide

//   function scrollSponsors() {
//     offset += slideWidth; // Move to the next set of logos
//     if (offset >= track.scrollWidth / 2) { 
//       // Reset if we've scrolled through all logos once
//       offset = 0;
//     }
//     track.style.transform = `translateX(-${offset}px)`;
//   }

//   // Automatically scroll every 5 seconds
//   setInterval(scrollSponsors, 5000);




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






// Function to display game selection based on the domain chosen
function showGameSelection() {
  const domain = document.getElementById('domain').value;
  const gameSelection = document.getElementById('gameSelection');
  const gameDropdown = document.getElementById('game');

  gameDropdown.innerHTML = '';

  // Show relevant game options
  if (domain === 'Flagship') {
    gameSelection.style.display = 'block';
    gameSelection.style.marginTop = '20px';
    gameDropdown.innerHTML = `
      <option value="">Select Game</option>
      <option value="Cricket">Cricket</option>
      <option value="Volleyball">Volleyball</option>
      <option value="Basketball">Basketball</option>
      <option value="Futsal Football">Football</option>
      <option value="7-a-side Football">Football</option>
      <option value="Badminton">Badminton</option>
      <option value="Table Tennis">Table Tennis</option>
    `;
  } else if (domain === 'E-Sports') {
    gameSelection.style.display = 'block';
    gameSelection.style.marginTop = '20px';
    gameDropdown.innerHTML = `
      <option value="">Select Game</option>
      <option value="BGMI">BGMI</option>
    `;
  } else {
    gameSelection.style.display = 'none';
  }
}












  


// Handle registration form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault(); 
  document.getElementById('paymentSection').style.display = 'block';
  document.getElementById('qrCode').src = 'assets/images_main/qr_code.png';
  // saveToGoogleSheet();
});

// Handle payment form submission
function submitPayment() {
  const transactionID = document.getElementById('transactionID').value;
  if (transactionID) {
    alert('Form submitted successfully!');
    // Optionally: Save payment data to Google Sheets
    // savePaymentToGoogleSheet(transactionID);
  } else {
    alert('Please fill the provided fields.');
  }
}




// Saving registered details to google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbxrQzvYYDg4oOztwC6b7R7uMEVfad1pXLua7etZHsdsfQOib3mmT-wfI3oSGdaUdAKe/exec'
const form = document.forms['registrationForm']
form.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
  .then(response => alert("Thank you! Your form is submitted successfully!"))
  // .then(() => {window.location.reload(); })
  .catch(error => console.error('Error!', error.message))

  // var formData = new FormData(form);
  //       var gender = document.getElementById("gender").checked;
  //       var domain = document.getElementById("domain").checked;

  //       formData.append("Gender", gender);
  //       formData.append("Domain", domain);

  //       fetch(scriptURL, { method: "POST", body: formData })
  //         .then((response) => {
  //           swal("Done", "Submitted Successfully.", "success");
  //         })
  //         .catch((error) => {
  //           swal("Error", "Something went wrong. please try again!", "error");
  //         });
})





// Google Maps Toggle
function toggleMap() {
  const largeMap = document.getElementById('map-large');
  const smallMap = document.getElementById('map-small');
  
  if (window.innerWidth < 768) { // Adjust threshold as per requirement
    largeMap.style.display = 'none';
    smallMap.style.display = 'block';
  } else {
    largeMap.style.display = 'block';
    smallMap.style.display = 'none';
  }
}

toggleMap();
window.addEventListener('resize', toggleMap);









// media scroll effect
/*--------------------
Vars
--------------------*/
const $menu = document.querySelector('.menu')
const $items = document.querySelectorAll('.menu--item')
const $images = document.querySelectorAll('.menu--item img')
let menuWidth = $menu.clientWidth
let itemWidth = $items[0].clientWidth
let wrapWidth = $items.length * itemWidth

let scrollSpeed = 0
let oldScrollY = 0
let scrollY = 0
let y = 0


/*--------------------
Lerp
--------------------*/
const lerp = (v0, v1, t) => {
  return v0 * ( 1 - t ) + v1 * t
}


/*--------------------
Dispose
--------------------*/
const dispose = (scroll) => {
  gsap.set($items, {
    x: (i) => {
      return i * itemWidth + scroll
    },
    modifiers: {
      x: (x, target) => {
        const s = gsap.utils.wrap(-itemWidth, wrapWidth - itemWidth, parseInt(x))
        return `${s}px`
      }
    }
  })
} 
dispose(0)


/*--------------------
Wheel
--------------------*/
const handleMouseWheel = (e) => {
  scrollY -= e.deltaY * 0.9
}


/*--------------------
Touch
--------------------*/
let touchStart = 0
let touchX = 0
let isDragging = false
const handleTouchStart = (e) => {
  touchStart = e.clientX || e.touches[0].clientX
  isDragging = true
  $menu.classList.add('is-dragging')
}
const handleTouchMove = (e) => {
  if (!isDragging) return
  touchX = e.clientX || e.touches[0].clientX
  scrollY += (touchX - touchStart) * 2.5
  touchStart = touchX
}
const handleTouchEnd = () => {
  isDragging = false
  $menu.classList.remove('is-dragging')
}


/*--------------------
Listeners
--------------------*/
$menu.addEventListener('mousewheel', handleMouseWheel)

$menu.addEventListener('touchstart', handleTouchStart)
$menu.addEventListener('touchmove', handleTouchMove)
$menu.addEventListener('touchend', handleTouchEnd)

$menu.addEventListener('mousedown', handleTouchStart)
$menu.addEventListener('mousemove', handleTouchMove)
$menu.addEventListener('mouseleave', handleTouchEnd)
$menu.addEventListener('mouseup', handleTouchEnd)

$menu.addEventListener('selectstart', () => { return false })


/*--------------------
Resize
--------------------*/
window.addEventListener('resize', () => {
  menuWidth = $menu.clientWidth
  itemWidth = $items[0].clientWidth
  wrapWidth = $items.length * itemWidth
})


/*--------------------
Render
--------------------*/
const render = () => {
  requestAnimationFrame(render)
  y = lerp(y, scrollY, .1)
  dispose(y)
  
  scrollSpeed = y - oldScrollY
  oldScrollY = y
  
  gsap.to($items, {
    skewX: -scrollSpeed * .2,
    rotate: scrollSpeed * .01,
    scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003
  })
}
render()
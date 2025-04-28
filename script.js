<<<<<<< HEAD

// Show main content and floating icons after the "Press Start" button is clicked
document.querySelector(".start-btn").addEventListener("click", function () {
  console.log("Start button clicked!");

  // Hide start menu and show main content
  document.getElementById("startMenu").style.display = "none";
  document.getElementById("bgDimmer").classList.add("visible");
  document.getElementById("mainContent").style.display = "block";

  // Show the floating icons
  document.getElementById("experienceIcon").style.display = "block";
  document.getElementById("socialsIcon").style.display = "block";
  document.getElementById("projectsIcon").style.display = "block";
});

// Add event listeners to icons to show the respective popups
document.getElementById("experienceIcon").addEventListener("click", function () {
  console.log("Experience icon clicked!");
  document.getElementById("experiencePopup").style.display = "flex";
});

document.getElementById("socialsIcon").addEventListener("click", function () {
  console.log("Socials icon clicked!");
  document.getElementById("socialsPopup").style.display = "flex";
});

document.getElementById("projectsIcon").addEventListener("click", function () {
  console.log("Projects icon clicked!");
  document.getElementById("projectsPopup").style.display = "flex";
});


// Close popups when close buttons are clicked
document.querySelectorAll(".close-btn").forEach(function (closeButton) {
  closeButton.addEventListener("click", function () {
    const popup = closeButton.closest(".popup-modal");
    popup.style.display = "none";
  });
});

// Read More Button functionality
document.getElementById("readMoreBtn").addEventListener("click", function () {
  console.log("Read More button clicked!");
  document.getElementById("popupModal").style.display = "flex";
});

// Close the "Read More" popup
document.querySelector(".close-btn.read-more").addEventListener("click", function () {
  document.getElementById("popupModal").style.display = "none";
});

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
  // Get the button and the audio element
  const toggleMusicButton = document.getElementById("toggleMusic");
  const bgMusic = document.getElementById("bgMusic");

  // Check if the music is playing or paused and update button text accordingly
  toggleMusicButton.addEventListener("click", function () {
    if (bgMusic.paused) {
      bgMusic.play();  // Play music if it is paused
      toggleMusicButton.textContent = "🔊 Music: ON";  // Change button text to "ON"
    } else {
      bgMusic.pause();  // Pause music if it is playing
      toggleMusicButton.textContent = "🔇 Music: OFF";  // Change button text to "OFF"
    }
  });
});
=======

// Show main content and floating icons after the "Press Start" button is clicked
document.querySelector(".start-btn").addEventListener("click", function () {
  console.log("Start button clicked!");

  // Hide start menu and show main content
  document.getElementById("startMenu").style.display = "none";
  document.getElementById("bgDimmer").classList.add("visible");
  document.getElementById("mainContent").style.display = "block";

  // Show the floating icons
  document.getElementById("experienceIcon").style.display = "block";
  document.getElementById("socialsIcon").style.display = "block";
  document.getElementById("projectsIcon").style.display = "block";
});

// Add event listeners to icons to show the respective popups
document.getElementById("experienceIcon").addEventListener("click", function () {
  console.log("Experience icon clicked!");
  document.getElementById("experiencePopup").style.display = "flex";
});

document.getElementById("socialsIcon").addEventListener("click", function () {
  console.log("Socials icon clicked!");
  document.getElementById("socialsPopup").style.display = "flex";
});

document.getElementById("projectsIcon").addEventListener("click", function () {
  console.log("Projects icon clicked!");
  document.getElementById("projectsPopup").style.display = "flex";
});


// Close popups when close buttons are clicked
document.querySelectorAll(".close-btn").forEach(function (closeButton) {
  closeButton.addEventListener("click", function () {
    const popup = closeButton.closest(".popup-modal");
    popup.style.display = "none";
  });
});

// Read More Button functionality
document.getElementById("readMoreBtn").addEventListener("click", function () {
  console.log("Read More button clicked!");
  document.getElementById("popupModal").style.display = "flex";
});

// Close the "Read More" popup
document.querySelector(".close-btn.read-more").addEventListener("click", function () {
  document.getElementById("popupModal").style.display = "none";
});

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
  // Get the button and the audio element
  const toggleMusicButton = document.getElementById("toggleMusic");
  const bgMusic = document.getElementById("bgMusic");

  // Check if the music is playing or paused and update button text accordingly
  toggleMusicButton.addEventListener("click", function () {
    if (bgMusic.paused) {
      bgMusic.play();  // Play music if it is paused
      toggleMusicButton.textContent = "🔊 Music: ON";  // Change button text to "ON"
    } else {
      bgMusic.pause();  // Pause music if it is playing
      toggleMusicButton.textContent = "🔇 Music: OFF";  // Change button text to "OFF"
    }
  });
});
>>>>>>> 29cb8133c42a5b4780dcc862d96ac5283f6c119a

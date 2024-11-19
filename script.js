// Select all pop-ups and buttons
const popup = document.getElementById('popup');
const thankYouPopup = document.getElementById('thankYouPopup');
const openPopupButton = document.getElementById('openPopup');
const acceptPopupButton = document.getElementById('acceptPopup');
const declinePopupButton = document.getElementById('declinePopup');
const closeThankYouPopupButton = document.getElementById('closeThankYouPopup');
const apologyText = document.getElementById('apologyText');

// Variasi teks permohonan maaf
const apologyMessages = [
  "Aku bener-bener minta maaf udah kelewatan",
  "Aku gak bermaksud buat bikin kalian tersinggung",
  "Sorry yah, aku agak terbawa suasana",
  "Kalau ada sesuatu hal yang perlu aku tebus, bilang aja yah",
  "Semoga kalian mau memaafkanku yah",
  "Kurang jelas yah? Aku ulangin lagi deh",
];

// Current message index
let messageIndex = 0;

// Show the main apology pop-up
openPopupButton.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Handle accept action
acceptPopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
  thankYouPopup.style.display = 'flex';
});

// Handle decline action
declinePopupButton.addEventListener('click', () => {
  // Update apology text to the next message
  messageIndex = (messageIndex + 1) % apologyMessages.length; // Loop through messages
  apologyText.textContent = apologyMessages[messageIndex];
});

// Close the "Thank You" pop-up and the window
closeThankYouPopupButton.addEventListener('click', () => {
  thankYouPopup.style.display = 'none';
  window.close(); // Attempt to close the browser window
  alert("Bye Neet!!"); // Inform user if it fails
});
function showPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Event-Listener, um die Funktion beim Laden der Seite auszuführen
window.onload = function () {
  setTimeout(showPopup, 1000);
};

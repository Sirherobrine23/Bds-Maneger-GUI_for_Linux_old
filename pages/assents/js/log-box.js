// Get the modal2
var modal2 = document.getElementById("CHANGELOG");

// Get the button that opens the modal2
var btn2 = document.getElementById("log");

// Get the <span2> element that closes the modal2
var span2 = document.getElementsByClassName("closeLOG")[0];

// When the user clicks the button, open the modal2 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span2> (x), close the modal2
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal2, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

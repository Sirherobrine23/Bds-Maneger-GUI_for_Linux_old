// Get the modal3
var modal3 = document.getElementById("GIVEM");

// Get the button that opens the modal3
var btn3 = document.getElementById("giveMENU");

// Get the <span3> element that closes the modal3
var span3 = document.getElementsByClassName("closeG")[0];

// When the user clicks the button, open the modal3 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span3> (x), close the modal3
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal3, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

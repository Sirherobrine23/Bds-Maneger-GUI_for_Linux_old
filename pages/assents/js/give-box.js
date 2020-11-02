// Pegar os Player
giveplayer();

var modal3 = document.getElementById("GIVEM");
var btn3 = document.getElementById("giveMENU");
var span3 = document.getElementsByClassName("closeG")[0];
btn3.onclick = function() {
  modal3.style.display = "block";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

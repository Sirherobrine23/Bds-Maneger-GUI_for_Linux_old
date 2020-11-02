var modal2 = document.getElementById("CHANGELOG");
var btn2 = document.getElementById("log");
var span2 = document.getElementsByClassName("closeLOG")[0];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

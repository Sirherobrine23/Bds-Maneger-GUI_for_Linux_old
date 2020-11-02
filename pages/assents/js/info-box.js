var box_info = document.getElementById("Info");
var button_info = document.getElementById("InfoB");
var span_info = document.getElementsByClassName("infoclose")[0];
button_info.onclick = function() {
  box_info.style.display = "block";
}
span_info.onclick = function() {
  box_info.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == box_info) {
    box_info.style.display = "none";
  }
}

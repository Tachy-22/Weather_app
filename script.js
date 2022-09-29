function change() {
  var percent = "invert(87%)";
  document.getElementById("icon-day").style.display = "flex";
  document.getElementById("icon-night").style.display = "none";
  document.getElementById("wind").style.color = "rgb(30, 120, 235)";
  document.getElementById("wind").style.filter = "invert";
  document.getElementById("rain").style.filter = percent;
  document.getElementById("temp").style.filter = percent;
  document.getElementById("therm").style.filter = percent;
  document.getElementById("main_app").style.filter = percent;
 document.getElementById("A").style.filter = percent;
 document.getElementById("B").style.filter = percent;
 document.getElementById("C").style.filter = percent;
 document.getElementById("D").style.filter = percent;
 document.getElementById("E").style.filter = percent;
 document.getElementById("F").style.filter = percent;
}
function changeB() {
  document.getElementById("icon-day").style.display = "none";
  document.getElementById("icon-night").style.display = "flex";
  document.getElementById("wind").style.filter = "none";
  document.getElementById("rain").style.filter = "none";
  document.getElementById("temp").style.filter = "none";
  document.getElementById("therm").style.filter = "none";
  document.getElementById("main_app").style.filter = "none";
   document.getElementById("A").style.filter = "none";
   document.getElementById("B").style.filter = "none";
   document.getElementById("C").style.filter = "none";
   document.getElementById("D").style.filter = "none";
   document.getElementById("E").style.filter = "none";
   document.getElementById("F").style.filter = "none";
}

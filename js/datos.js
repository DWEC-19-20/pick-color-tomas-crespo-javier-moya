'use strict';
/*Coge los datos de los inputs de RGB y los pasa al de Hexadecimal.
Además, pasa el valor hexadecimal a una caja de color. */
document.getElementById("enviar").addEventListener("click", 
function (e) {
  var r = document.getElementById("r").value;
  var g = document.getElementById("g").value;
  var b = document.getElementById("b").value;

  var valorHex = rgb(r, g, b);
  document.getElementById("hex").value = valorHex;
  document.documentElement.style.setProperty('--colores1', valorHex);
});

/*Coge los datos del input hexadecimal y los pasa al de RGB.
Además, pasa el valor RGB a una caja de color. */
document.getElementById("enviar2").addEventListener("click", function (e) {
  var h = document.getElementById("h").value;

  var rgbHex = hex(h);
  document.getElementById("rgbHex").value = rgbHex;
  var colorcaja=rgbHex.substring(0,3)+", "+rgbHex.substring(3,6)+", "+rgbHex.substring(6,9);
  document.documentElement.style.setProperty('--colores2', colorcaja);

});
'use strict';

Number.prototype.rangoRGB = function() {
  var rgb;
  rgb = this.valueOf() ;
  if (rgb > 255) {
    rgb = 255;
  } 
  if (rgb < 0) {
    rgb = 0;
  }
  return rgb;
}; 

/* Función que al pasar un valor RGB devuelva el resultado en representación 
hexadecimal
*/

function rgb(r, g, b) {

  var red, green, blue;
  
  /* Pasa los valores rgb a un string hexadecimal */
  red =  Number(r).rangoRGB().toString(16).padStart(2, "0").toUpperCase();
  green = Number(g).rangoRGB().toString(16).padStart(2, "0").toUpperCase();
  blue = Number(b).rangoRGB().toString(16).padStart(2, "0").toUpperCase();

  var valor = "#" + red + green + blue;
  return valor;
}

/* Función que al pasar un valor RGB en representación hexadecimal
   devuelve la representación en formato decimal con el formato RRRGGGBB
*/

function hex(h) {
  h = h.toString();

  var red, green, blue;

  /* Pasa el valor hexadecimal a decimal */
  red = (parseInt(h.substring(2, 4), 16)).toString().padStart(3, "0");
  green = (parseInt(h.substring(4, 6), 16)).toString().padStart(3, "0");
  blue = (parseInt(h.substring(6, 8), 16)).toString().padStart(3, "0");

  var rgbtoHex = red + green  + blue;

  return rgbtoHex;
}
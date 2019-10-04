'use strict';

document.getElementById("enviar").addEventListener("click", function (e) {
  var r = document.getElementById("r").value;
  var g = document.getElementById("g").value;
  var b = document.getElementById("b").value;

  var valorHex = rgb(r, g, b);
  // alert(valorHex);
  document.getElementById("hex").value = valorHex;

});

/* Función que al pasar un valor RGB devuelva el resultado en representación 
hexadecimal
*/
function rgb(r, g, b) {
  if (r > 255 || g > 255 || b > 255) {
    r = 255;
    g = 255;
    b = 255;
  }
  if (r < 0 || g < 0 || b < 0) {
    r = 0;
    g = 0;
    b = 0;
  }
  var r2 = parseInt(r).toString(16);
  var g2 = parseInt(g).toString(16);
  var b2 = parseInt(b).toString(16);
  if (r2.length == 1) {
    r2 = "0" + r2;
  }
  if (g2.length == 1) {
    g2 = "0" + g2;
  }
  if (b2.length == 1) {
    b2 = "0" + b2;
  }
  var valor = "#" + r2 + "" + "" + g2 + "" +
    "" + b2;
  return valor.toUpperCase();
}

/* Función que al pasar un valor RGB en representación hexadecimal
   devuelve la representación en formato decimal con el formato RRRGGGBB
*/

document.getElementById("enviar2").addEventListener("click", function (e) {
  var h = document.getElementById("h").value; //coge el valor introducido en la caja hexadecimal

  var rgbHex = hex(h); //coge el valor y lo aplica a la funcion
  document.getElementById("rgbHex").value = rgbHex; //lo saca por los 3 r g b
});



function hex(h) {

  var r3 = (parseInt(h.substring(2, 4), 16)).toString();//coge las 2 cifras de rojo las pasa a number y luego a string.
  var b3 = (parseInt(h.substring(6, 8), 16)).toString();
  var g3 = (parseInt(h.substring(4, 6), 16)).toString();

  if(r3.length==1){ //si r3 devuelve un número le añade 2 ceros.
    r3="00"+r3;
  }
  if(r3.length==2){//si r3 devuelve un número le añade 1 ceros.
    r3="0"+r3;
  }
  if(g3.length==1){ //si g3 devuelve un número le añade 2 ceros.
    g3="00"+g3;
  }
  if(g3.length==2){//si g3 devuelve un número le añade 1 ceros.
    g3="0"+g3;
  }
  if(b3.length==1){ //si b3 devuelve un número le añade 2 ceros.
    b3="00"+b3;
  }
  if(b3.length==2){//si b3 devuelve un número le añade 1 ceros.
    b3="0"+b3;
  }

  var rgbHex2= r3+""+g3+""+b3;
  return rgbHex2;
}
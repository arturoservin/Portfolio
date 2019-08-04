var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporclick);



var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);
var ancho = d.width;
function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoporclick()
{

  var l = 0;
  var lineas = parseInt(texto.value);
  var espacio = ancho/lineas;
   //alert("dibujando en el dom");
  while(l < lineas)
  {

    dibujarlinea("grey", 0, espacio*l, espacio*(l+1), ancho);
    l = l + 1;

  }
  dibujarlinea("blue", 1, 1, 1, ancho);
  dibujarlinea("blue", 0, ancho, ancho, ancho);
  dibujarlinea("red", 0, 0, ancho, 0);
  dibujarlinea("red", ancho, 0, ancho, ancho);
}

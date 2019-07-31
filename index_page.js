//******************************************************************************************************************************************* */
//este codigo esta intencionalmente escrito de una manera altamente descriptiva y cosas que parecen obvias estan detalladamente comentadas
//no intentes optimizar este codigo. manten el transbordador espacial volando.
//******************************************************************************************************************************************* */
//

var boton = document.getElementById("more_portafolio");
boton.addEventListener("click",alertaClick);

var boton2 = document.getElementById("more_experiencia");
boton2.addEventListener("click",alertaClick);

function alertaClick ()
{
    alert("Estas seguro que deseas salir de esta pagina?");
}

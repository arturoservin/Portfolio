var peso1 = document.getElementById("peso1");

var planeta1 = document.getElementById("planeta1");

var boton = document.getElementById("botoncito");
boton.addEventListener("click" , calcular);


var gravedad;
var pesofinal;



function calcular ()
    {
    var usuario = peso1.value;
    console.log ("calculos");
    var planeta = planeta1.value;
    if (planeta == 1)
    {
        console.log("marte");
        gravedad = 3.711;
        console.log (gravedad);
        pesofinal = parseFloat((gravedad*9.81)/usuario)*100;
        
    }
    else if (planeta == 2)
    {
        console.log("jupiter");
        gravedad = 24.79;
        console.log (gravedad);
        pesofinal = parseFloat((gravedad*9.81)/usuario)*100;
        
    }
    var planeta2;
    if (planeta == 1) 
    {
        planeta2 = "marte";
    }  
    else if (planeta == 2)
    {
        planeta2 = "jupiter";
    }
    document.getElementById("resultado").innerHTML = ("su peso en " + planeta2 + " es " + pesofinal);
    console.log(pesofinal);
    }

    
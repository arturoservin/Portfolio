var peso1 = document.getElementById("peso1");
var usuario = peso1.value;
var planeta1 = document.getElementById("planeta1");
var planeta = planeta1.value;
var boton = document.getElementById("botoncito");
boton.addEventListener("click" , calcular);
var gravedad;
var pesofinal;



function calcular ()
    {
    console.log ("calculos");
    if (planeta == 1)
    {
        console.log("marte");
        gravedad = 3.711;
        console.log (gravedad);
        pesofinal = ((gravedad*9.81)/usuario)*10;
        
    }
    else if (planeta == 2)
    {
        console.log("jupiter");
        gravedad = 24.79;
        console.log (gravedad);
        pesofinal = ((gravedad*9.81)/usuario)*10;
        
    }
    
    document.getElementById("resultado").innerHTML = ("su peso en marte es " + pesofinal);
    }

    
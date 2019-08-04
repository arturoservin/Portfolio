var usuario
      var g_tierra = 9.8;
      var g_marte = 3.7;
      var g_jupiter = 24.8;
      var peso = parseFloat(usuario);
      var peso_final;
      var planeta;
      var p1 = document.getElementById("peso1");
      usuario = p1.value; 
      var p2 = document.getElementById("planeta1");
      planeta = p2.value;

      if (planeta == 1);
      {
        peso_final = peso * g_marte/g_tierra
        document.write("tu peso en marte es " + peso_final +"Kg")
      }
     if(planeta == 2)
      {
        peso_final = peso * g_jupiter/g_tierra;
        document.write("tu peso en jupiter es " + peso_final +"Kg");
      }
      else {
        peso_final = 1000000;
        document.write("tu peso en kripton es " + peso_final +"Kg");
      }
      peso_final  = parseFloat(peso_final);

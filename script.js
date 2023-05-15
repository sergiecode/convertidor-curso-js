function convertir() {
    let valorDeEntrada = document.getElementById("valorDeEntrada").value;
    let desde = document.getElementById("desde").value;
    let hasta = document.getElementById("hasta").value;
  
    if (desde === hasta) {
      document.getElementById("resultado").innerHTML = "Las unidades de origen y destino son las mismas.";
      return;
    }
  
    let valorConvertido;
  
    if (desde === "cm" && hasta === "m") {
      valorConvertido = valorDeEntrada / 100;
    } else if (desde === "cm" && hasta === "km") {
      valorConvertido = valorDeEntrada / 100000;
    } else if (desde === "m" && hasta === "cm") {
      valorConvertido = valorDeEntrada * 100;
    } else if (desde === "m" && hasta === "km") {
      valorConvertido = valorDeEntrada / 1000;
    } else if (desde === "km" && hasta === "cm") {
      valorConvertido = valorDeEntrada * 100000;
    } else if (desde === "km" && hasta === "m") {
      valorConvertido = valorDeEntrada * 1000;
    }
  
    document.getElementById("resultado").innerHTML = valorDeEntrada + " " + desde + " es igual a " + valorConvertido + " " + hasta + ".";
  }
  
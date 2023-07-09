## Link al curso completo de Javascript en Youtube:
[VIDEO CURSO GRATIS COMPLETO: JavaScript Desde Cero por Sergie Code](https://youtu.be/N8Xt5rP_DUo)


# Convertidor de Medidas

Este es un repositorio que contiene un convertidor de medidas implementado en JavaScript. Te permite convertir valores de longitud entre diferentes unidades como centímetros (cm), metros (m) y kilómetros (km).


## Cómo funciona

El archivo principal de este proyecto es `index.html`, que contiene la interfaz de usuario implementada con HTML y CSS. El JavaScript encargado de realizar las conversiones se encuentra en el siguiente fragmento de código:

    function convertir() {
        // Obtener los valores de entrada del usuario
        let valorDeEntrada = document.getElementById("valorDeEntrada").value;
        let desde = document.getElementById("desde").value;
        let hasta = document.getElementById("hasta").value;
    
        // Comprobar si las unidades de origen y destino son las mismas
        if (desde === hasta) {
          document.getElementById("resultado").innerHTML = "Las unidades de origen y destino son las mismas.";
          return;
        }
    
        let valorConvertido;
    
        // Realizar las conversiones según las unidades seleccionadas
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
    
        // Mostrar el resultado de la conversión en la interfaz de usuario
        document.getElementById("resultado").innerHTML = valorDeEntrada + " " + desde + " es igual a " + valorConvertido + " " + hasta + ".";
    }

## Uso

Para utilizar este convertidor de medidas, simplemente abre el archivo `index.html` en tu navegador web. Verás dos campos de entrada para el valor y las unidades de origen, y un campo de selección para las unidades de destino. Después de ingresar los valores, haz clic en el botón de "Convertir" para obtener el resultado de la conversión.

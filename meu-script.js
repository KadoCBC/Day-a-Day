
var hud = document.getElementById("Top");

var distanciaMaxima = 10;

hud.style.display = "none";

document.addEventListener("mousemove", function(event) {
    
    var distanciaX = event.clientX - (hud.offsetLeft + hud.offsetWidth / 2);
    var distanciaY = event.clientY - (hud.offsetTop + hud.offsetHeight / 2);
    var distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);

      if (distancia < distanciaMaxima) {
        hud.style.display = "block";
      } else {
        hud.style.display = "none";
      }
    }
  );



let PalabraParaDesencriptar = "";
var LetrasEncriptadas = "";
var PalabraSinEncriptar = "";

function desencriptarPalabra() {
  // Obtener la palabra del input
  let palabra = document.getElementById("palabra").value;
  
  // Llamar a la función de encriptación
  let PalabraParaDesencriptar = palabra;
  var LetrasEncriptadas = PalabraParaDesencriptar.split ("");

  for (let x = 0; x < LetrasEncriptadas.length; x++) {
    /*if (LetrasEncriptadas [x] === "ai") {
      
    } */
    if (LetrasEncriptadas[x] === "a" && LetrasEncriptadas[x + 1] === "i") {
      LetrasEncriptadas[x] = "a";
      LetrasEncriptadas[x+1] = "";
    }
    else if (LetrasEncriptadas[x] === "e" && LetrasEncriptadas[x + 1] === "n" && LetrasEncriptadas[x + 2] === "t" && LetrasEncriptadas[x + 3] === "e" && LetrasEncriptadas[x + 4] === "r") {
      LetrasEncriptadas[x] = "e";
      LetrasEncriptadas[x+1] = "";
      LetrasEncriptadas[x+2] = "";
      LetrasEncriptadas[x+3] = "";
      LetrasEncriptadas[x+4] = "";
    }
    else if (LetrasEncriptadas[x] === "i" && LetrasEncriptadas[x + 1] === "m" && LetrasEncriptadas[x + 2] === "e" && LetrasEncriptadas[x + 3] === "s") {
      LetrasEncriptadas[x] = "i";
      LetrasEncriptadas[x+1] = "";
      LetrasEncriptadas[x+2] = "";
      LetrasEncriptadas[x+3] = "";
    }
    else if (LetrasEncriptadas[x] === "o" && LetrasEncriptadas[x + 1] === "b" && LetrasEncriptadas[x + 2] === "e" && LetrasEncriptadas[x + 3] === "r") {
      LetrasEncriptadas[x] = "o";
      LetrasEncriptadas[x+1] = "";
      LetrasEncriptadas[x+2] = "";
      LetrasEncriptadas[x+3] = "";
    }
    else if (LetrasEncriptadas[x] === "u" && LetrasEncriptadas[x + 1] === "f" && LetrasEncriptadas[x + 2] === "a" && LetrasEncriptadas[x + 3] === "t") {
      LetrasEncriptadas[x] = "u";
      LetrasEncriptadas[x+1] = "";
      LetrasEncriptadas[x+2] = "";
      LetrasEncriptadas[x+3] = "";
    }
    else {
      LetrasEncriptadas [x] = LetrasEncriptadas [x];
    }
  }

  var PalabraSinEncriptar=LetrasEncriptadas.join("");
  
document.getElementById("resultado").textContent = PalabraSinEncriptar;
}
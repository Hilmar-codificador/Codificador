var PalabraParaEncriptar = "";
var LetrasSinEncrptar = "";
var PalabraEncriptada = "";

function encriptarPalabra() {
  let palabra = document.getElementById("palabra").value;
  
  document.getElementById("output-image").style.display = "none";
  document.getElementById("respuesta").style.display = "block";
  
  // Llamar a la función de encriptación
  let PalabraParaEncriptar = palabra;
  var LetrasSinEncrptar = PalabraParaEncriptar.split ("");

  for (let x = 0; x < LetrasSinEncrptar.length; x++) {
    if (LetrasSinEncrptar [x] === "a") {
      LetrasSinEncrptar [x] = "ai";
    } 
    else if (LetrasSinEncrptar [x] === "e") {
      LetrasSinEncrptar [x] = "enter";
    } 
    else if (LetrasSinEncrptar [x] === "i") {
      LetrasSinEncrptar [x] = "imes";
    } 
    else if (LetrasSinEncrptar [x] === "o") {
      LetrasSinEncrptar [x] = "ober";
    } 
    else if (LetrasSinEncrptar [x] === "u") {
      LetrasSinEncrptar [x] = "ufat";
    } 
    else {
      LetrasSinEncrptar [x] = LetrasSinEncrptar [x];
    }
  }

var PalabraEncriptada=LetrasSinEncrptar.join("");
document.getElementById("resultado").textContent = PalabraEncriptada;
}
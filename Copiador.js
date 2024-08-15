function copiadorDeTexto() {
    let textoACopiar = document.getElementById("resultado").textContent;
  
     navigator.clipboard.writeText(textoACopiar)
      .then(() => {
        
        let palabra = document.getElementById("palabra");
  
         navigator.clipboard.readText()
          .then(textoPegado => {
            palabra.value = textoPegado;
          })
          
      })
      
  }
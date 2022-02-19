const buttonCodificar = document.getElementById("codificar");

const buttonDecodifica = document.getElementById("decodificar");

const button = document.getElementById("submit");

const inserirCripto = document.getElementById("inserirCripto");

const alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZÃÕãõéàÀúÚÓóÍí";

const choose = document.getElementById("choose");

const selectNumber = document.getElementById('selectNumber');

buttonCodificar.addEventListener("click", function () {
  button.innerText = "Codificar mensagem";
});

buttonDecodifica.addEventListener("click", function () {
  button.innerText = "Decodificar mensagem";
});

choose.addEventListener('change', function () {
  if (choose.value == "Cifra de Cesar") {
    selectNumber.style.display = 'block'
  } else {
    selectNumber.style.display = 'none'
  }
})

button.addEventListener("click", function (e) {
  e.preventDefault();
  let imputNumber = document.getElementById('imputNumber').value;
  if (choose.value == "Cifra de Cesar") {
    if (buttonCodificar.checked) {
      console.log(buttonCodificar.value);
      const codificarMensagem = document.getElementById("text").value;
      const alfabetoLetras = codificarMensagem.toLowerCase();
      const mensagemCodificada = "";
      for (let i = 0; i < alfabetoLetras.length; i++) {
        for (let j = 0; j < alfabeto.length; j++) {
          if (alfabetoLetras[i] == alfabeto[j]) {
            mensagemCodificada += alfabeto[j + parseInt(imputNumber)];
            break;
          } else if (alfabetoLetras[i] == " ") {
            mensagemCodificada += " ";
          }
        }
      }
    } else {
      const codificarMensagem = document.getElementById("text").value;
      const alfabetoLetras = codificarMensagem.toLowerCase();
      const mensagemCodificada = "";
      for (let i = 0; i < alfabetoLetras.length; i++) {
        for (let j = alfabeto.length; j >= 0; j--) {
          if (alfabetoLetras[i] == alfabeto[j]) {
            mensagemCodificada += alfabeto[j - parseInt(imputNumber)];
            break;
          } else if (alfabetoLetras[i] == " ") {
            mensagemCodificada += " ";
          }
        }
      }
    }
  } else {
    if (buttonCodificar.checked) {
      const codificarMensagem = document.getElementById("text").value;
      var mensagemCodificada = btoa(codificarMensagem);
    } else {
      let codificarMensagem = document.getElementById("text").value;
      var mensagemCodificada = atob(codificarMensagem);
    }
  } {}

  inserirCripto.innerHTML = ` <p>${mensagemCodificada}</p>`;
})
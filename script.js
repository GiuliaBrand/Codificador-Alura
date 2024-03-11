var textInput = document.querySelector("#entrada-mensagem");
var outInput = document.querySelector("#saida-mensagem");


function bntCrip(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/g, "enter").replace(/é/g, "enter").replace(/ê/g, "enter").replace(/i/g, "imes").replace(/í/g, "imes").replace(/a/g, "ai").replace(/á/g, "ai").replace(/â/g, "ai").replace(/ã/g, "ai").replace(/o/g, "ober").replace(/õ/g, "ober").replace(/ó/g, "ober").replace(/ô/g, "ober").replace(/u/g, "ufat").replace(/ú/g, "ufat");
  
  document.getElementById('saida-mensagem').innerHTML = resultCripto;

}

function bntDesc(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('saida-mensagem').innerHTML = resultDescripto;
}

function bntLimpar(){
    var texto = document.getElementById("entrada-mensagem");
    texto.value = '';
}

function bntCopiar(){
    var texto = document.getElementById("saida-mensagem");
    texto.select();
    document.execCommand("copy");
    alert('A mensagem foi copiada com sucesso!');
}

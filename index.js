const saida = document.querySelector('.saida')

function digitacao(texto, contador){
    if(contador < texto.length){
        setTimeout(()=>{
            saida.textContent += texto.charAt(contador);
            contador++;
            digitacao(texto,contador)
        }, 50)
    }
}

digitacao("Se inscrevam no canal do Luca", 0)
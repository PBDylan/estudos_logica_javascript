//Ele vai na func soma, que tem os parametros 5 e 10
//Vai soma-los
//Guardar o resultado na var somatório
//Para enfim retornar para quem o chamou
//Você pode por opção ou não, guardar em uma var o retorno de uma func
//Como foi feito em let resultado
let resultado = soma(5, 10)

console.log("O resultado dessa função é " + resultado)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}

//Para chamar diretamente, seria assim:
console.log("O resultado dessa função é " + soma2(5, 16))

function soma2(numA, numB){
    let somatorio = numA + numB
    return somatorio
}

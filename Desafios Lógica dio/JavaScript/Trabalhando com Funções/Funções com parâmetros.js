pagamento("Pix")

//Por padrão quando não mencionamos um valor como "nome"
//O js informa "undefined" para o valor, para mudar isso basta colocar
//Dentro dos parênteses com "=" o valor para undefined
//No nosso caso, colocamos "Cliente"

function pagamento(forma, nome = "Cliente"){
    console.log("O " + nome + " selecionou a forma de pagamento: " + forma + ".")
}
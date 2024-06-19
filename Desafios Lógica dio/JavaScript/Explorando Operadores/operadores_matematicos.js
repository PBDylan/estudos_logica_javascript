//A ordem da execução é sequencial
let idade = 30
console.log(idade)

//Exemplo de soma com váriavel já definida
idade = 30 + 8
console.log(idade)
//Subtração iria necessitar somente de um "-x"

//Concatenando texto com variável(tipo: número)
console.log("Dylan tem: " + idade + " anos de idade.")

//Operação de Subtração
let preco_produto = 60
let dinheiro_cliente = 80
console.log("O cliente Dylan tinha " + dinheiro_cliente + " na sua carteira, mas o produto valia: " + preco_produto)
console.log("Logo o troco de Dylan será: ")
console.log(dinheiro_cliente - preco_produto)

//Operação com multiplicação
let preco_item = 249.99
let valor_taxacao = 2
console.log(valor_taxacao)
//Você pode fazer o mesmo com os nomes apenas
console.log(preco_item * valor_taxacao)

//Operação com divisão
let nota_do_mercado = 80
let pessoas_para_dividir = 3
console.log(nota_do_mercado / pessoas_para_dividir)

//Operação de Módulo("O resto que sobra de uma divisão")
let calculo = 10 % 3
console.log(calculo)
//O resultado daria em 3 partes iguais de 2 e iria sobrar "1"

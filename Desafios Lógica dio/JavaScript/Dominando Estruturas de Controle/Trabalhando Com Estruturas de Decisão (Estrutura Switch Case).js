//Serve para quando há muitas if e else.
//Uma estrutura de decisão
//switch/case/break/default
//case = caso seja
//break = quebrar, ou seja ele para de rodar os switch`s, caso seja (case).
//default = case padrão (resposta padrão caso nenhum case seja encontrado).

let fruta = "Laranja"

switch (fruta){
    case "Banana":
    console.log("Vitamina de Banana")
    break

    case "Laranja":
    console.log("Suco de Laranja")
    break

    case "Maçã":
    console.log("Suco de maçã")
    break

    default:
    console.log("Suco genérico")
}
//Explicação: Como fruta = "Laranja", a saída é "Suco de laranja"

//Possibilidades com switch case (você pode usar mais de um case)
let marca_carro = "Chrevrolet"

switch (marca_carro){
    case "Chrevrolet":
    case "Honda":
    console.log("Carro de puto gostoso")
}
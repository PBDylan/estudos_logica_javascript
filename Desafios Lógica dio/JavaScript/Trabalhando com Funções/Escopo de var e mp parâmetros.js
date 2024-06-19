esquentar("Bauru", "Dylan")
function esquentar(salgado, nome){
    console.log("Esquentando " + salgado + "do cliente " + nome)
}

//Var é uma variável Global, enquanto let funciona por escopo.
dancar()
var nome
function dancar(nome){
    nome = "Maria Eduarda"
    console.log("A dançarina " + nome + " está no palco!")
}
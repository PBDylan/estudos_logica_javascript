//Nomeie/declare sua func
function fritar(){
    console.log("Fritando ")
}
function temperar(){
    console.log("Preparando o tempero da sua fritura!")
    console.log("Fritura temperada!")
}
//Chame sua função para que ela seja exibida
temperar()
fritar()

//Funções podem chamar outras funçÕes
function atender(){
    console.log("Garçom anota pedido do cliente...")
}
function cliente_chama_garçcom(){
    console.log("O cliente visualiza o garçom e resolve chamá-lo")
    console.log("Garçom se aproxima para atender o cliente...")
    console.log("Cliente começa o pedido")
    atender()
}
cliente_chama_garçcom()
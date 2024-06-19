//FOR (Repetição contada)
//let contador = 0 (da onde vai iniciar)
//contador < 4 (enquanto for menor que 4)
//contador++ (a cada contagem vai incrementar +1)
for (let contador = 0; contador < 4; contador++){
    console.log(contador)
    console.log("aumentador do contador")
}

//for exp 2
let pontos_de_vida = 0

//i de interador
//i < 10 (enquanto for menor que 10)
//i++ < (incrementar 1 a cada execução)
//pontos_de_vida += 1 (Somou um ponto)
for(let i = 1; i <= 10 ; i++){
    pontos_de_vida += 1
    console.log("Tomou poção mágica " + i)
}

console.log(pontos_de_vida + " Totais ")

//while = enquanto
//contador++ para não ficar em looping infinito, para ele saber que vai ficar incrementando até chegar ao 3.
let contador_2 = 0
while(contador_2 < 3){
    console.log("Olá")
    contador_2++
}

//do while = faça enquanto
//Aqui a regra (while), fica no final
//Primeiro ele faz e depois ele verifica, então leva em consideração que ele vai rodar uma vez no seu comando, mesmo que esteja fora da regra
let contador_3 = 0

do {
    console.log("tchau")
    contador_3++
} while (contador_3 < 3)

    
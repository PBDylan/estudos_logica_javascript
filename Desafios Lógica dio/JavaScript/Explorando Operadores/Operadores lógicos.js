// AND (&&) Somente se as duas forem verdadeiras
let idade = 18
let visto_verificado = true
console.log( (idade >= 18) && (visto_verificado === true) )
// Resposta: true; Leitura: Idade é maior que 18? se sim = true, se idade for igual a "true" e idade for igual a "visto_verficado", então resposta será "true".

// - 100 medas coletadas E 1 item estrela
let moedas_coletadas = 100
let item = "estrela"
let resultado = (moedas_coletadas === 100) && (item === "estrela")
console.log(resultado)
//Resposta: true; moedas_coletadas são iguais a 100? e item é igual a estrela? se sim, a resposta será "true"

//OR ( || ) Ou uma ou outra
//Exercício - Nosso personagem só pode sair se tiver sem chuva ou se estiver com guarda-chuva
let tempo = "sol"
let item_2 = "guarda-chuva"
let pode_sair = (tempo !== "chuva") || (item === "guarda-chuva")
console.log("Nosso personagem pode sair? " + pode_sair)

//NOT ( !) - Nega uma afirmação
let tempo_2 = "chuva_2"
let resultado_2 = tempo !== "chuva_2"
console.log(resultado_2)
//tempo_2 não é chuva, logo a resposta é "true".
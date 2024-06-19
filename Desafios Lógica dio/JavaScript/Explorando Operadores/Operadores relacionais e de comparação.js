// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo
// !== é diferente?

//Operadores de igual e diferente
let numero = "1"
console.log(numero == "1")
//true

//Exemplo de false com "==="
let numero_2 = "1"
console.log(numero_2 === 1)
//false

let marca = "Renault"
resultado = marca !== "Renault"
console.log(resultado)
//false

//guardar o valor em um var de resultado TRUE?FALSE
let cpf_bloqueado = "291.329.151-34"
let cpf_usu = "222.111.324-24"
let eh_cpu_bloqueado = cpf_usu === cpf_bloqueado
console.log("O usuário pode embarcar? " + eh_cpu_bloqueado)

//Outro exemplo
let cpf_perm = "932.280.174-29"
let cpf_usu_2 = "932.281.173-28"
let eh_bloq_2 = cpf_usu_2 !== cpf_perm
console.log("É um usuário inválido? " + eh_bloq_2)



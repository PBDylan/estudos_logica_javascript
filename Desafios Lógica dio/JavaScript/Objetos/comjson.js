//Exemplo de organização utilizando o JSON
let invoice = {
    name: "Dylan",
    age: 28,
        products: {
            0: ["mouse Logitech", 29.90],
            1: ["Teclado mecânico", 129.99],
            2: ["Monitor", 899.99]
        }
}

console.log(invoice)
console.log(invoice.name)
console.log(invoice.age)
//Tudo feito com json, muito mais prático e sem várias variáveis!!!

//Para concatenar é simples, você usa crase (``) e sifrão($)
//Exemplo:
console.log(`O nome do usuário é ${invoice.name}`)
console.log(`A idade de ${invoice.name} é ${invoice.age}`)

//Exemplo de utilização com for para percorrer as listas
//for in percorre
//index é var
//O resto da pra entender
for(let index in invoice.products){
    let [productName, productPrice] = invoice.products[index]
    console.log(`- ${productName}: R$ ${productPrice}`)
}
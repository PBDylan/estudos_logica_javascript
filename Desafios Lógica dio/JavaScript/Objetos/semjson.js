//Exemplo de organização utilizando o JSON
let name = "Dylan"
let age = 20
let products = ["mouse Logitech", "Headset Corsair", "Monitor"]
let productsValues = [29.90, 129.99, 899,99]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name){
    console.log("O comprador é " + name)
    console.log("-------------------")
    console.log("O produto é " + products[0])
    console.log("O valor é " + productsValues[0])
}
//Em cima foi feito sem JSON


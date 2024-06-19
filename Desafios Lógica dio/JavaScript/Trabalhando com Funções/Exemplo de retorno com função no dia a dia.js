
//.split separa um texto de acordo com caracter, aqui seria sempre qeu houve espaço.
//É uma função já existente no js.
let username = get_first_name("Pedro Pinto Pau Gonçalves");

console.log("Seja Welcome " + username);

function get_first_name(name) {
    let first_name = name.split(" ")[0];
    return first_name;
}
// Vai quebrar os espaços e guardar os caracteres em um vetor.
// [0] é a posição 0. ("Pedro")

// Exemplo com splitChar
let name_with_hyphens = "Henrique-Cardoso-de-Almeida";
let first_name_with_hyphens = get_first_name_with_char(name_with_hyphens, "-");

console.log("Oi babaca! " + first_name_with_hyphens);

function get_first_name_with_char(name, splitChar) {
    let first_name = name.split(splitChar)[0];
    return first_name;
}

console.log("Welcomed " + get_first_name("Paulo Paulada"));

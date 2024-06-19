//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada (String) para um valor numérico (int).
let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido; 

// Implemente as condições necessárias para a solução do desafio. Utilize a tabela de exemplos para identificar a escolha do treinador:
if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 3) {
    pokemonEscolhido = "Squirtle"; // Assumindo que o treinador pode escolher Squirtle com o número 3
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else if (escolhaDoTreinador === 5) {
    pokemonEscolhido = "Mewtwo";
} else {
    pokemonEscolhido = "um Pokémon desconhecido"; // Caso padrão para valores não mapeados
}

// Imprime o Pokémon escolhido:
print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");

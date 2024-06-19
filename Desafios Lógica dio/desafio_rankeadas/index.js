function results_player(wins_player, loss_player) {
    let rank_player = wins_player - loss_player;
    return rank_player;
}

let wins_player = 12; // Exemplo de vitórias do jogador
let loss_player = 3;  // Exemplo de derrotas do jogador

let rank_player = results_player(wins_player, loss_player);
let rank_description;

switch (true) {
    case (wins_player < 10):
        rank_description = "Ferro";
        break;
    case (wins_player <= 20):
        rank_description = "Bronze";
        break;
    case (wins_player <= 50):
        rank_description = "Prata";
        break;
    case (wins_player <= 80):
        rank_description = "Ouro";
        break;
    case (wins_player <= 90):
        rank_description = "Diamante";
        break;
    case (wins_player <= 100):
        rank_description = "Lendário";
        break;
    case (wins_player >= 101):
        rank_description = "Imortal";
        break;
    default:
        rank_description = "Indefinido";
}

console.log("O Herói tem de saldo de " + rank_player + " vitórias e está no nível de " + rank_description + ".");

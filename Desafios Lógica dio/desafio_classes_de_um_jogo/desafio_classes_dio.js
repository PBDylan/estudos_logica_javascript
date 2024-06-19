class Hero {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        let ataque;
        switch(this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Diferentes heróis para teste
let mago = new Hero("Merlin", 150, "mago");
let guerreiro = new Hero("Arthur", 35, "guerreiro");
let monge = new Hero("Shaolin", 40, "monge");
let ninja = new Hero("Hattori", 30, "ninja");

// Testando o método para cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();     
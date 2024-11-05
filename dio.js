let herois = [
    {"nome": "Orus" , "idade" : "26" , "classe": "Guerreiro" , "combate" : "Espada"},
    {"nome": "Perzival" , "idade" : "54" , "classe": "Mago", "combate" : "Magia"},
    {"nome": "Chun" , "idade" : "35" , "classe": "Monge", "combate" : "Marcial"},
    {"nome": "Orus" , "idade" : "26" , "classe": "Ninja", "combate" : "Ninjutsu"},
];

// Função de ataque
function atacar(heroi) {
    let ataque;

    // classe do herói e habilidades
    switch (heroi.classe) {
        case "Guerreiro":
            ataque = "usou a habilidade estocada crítica";
            break;
        case "Mago":
            ataque = "usou a habilidade magia de fogo";
            break;
        case "Monge":
            ataque = "usou a habilidade Punho de pedra";
            break;
        case "Ninja":
            ataque = "usou a habilidade Shuriken fantasma";
            break;
        default:
            ataque = "não usou nenhuma habilidade";
            break;
    }

    // Saída
    console.log("O " + heroi.nome + " (" + heroi.classe + ") " + ataque);
}

// Aplica a função atacar para cada herói
herois.forEach(atacar);

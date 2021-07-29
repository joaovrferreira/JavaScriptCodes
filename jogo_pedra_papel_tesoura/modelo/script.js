// User choice
var jogadorEscolha = prompt("Você escolherá pedra, papel ou tesoura?");

if (! jogadorEscolha) {
    // User choice was undefined
    document.write("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
} else {
    // Display user choice
    document.write("<p>Jogador:" + " " + jogadorEscolha + "</p>");
}

// Computer choice
var computadorEscolha = Math.random();
if (computadorEscolha < 0.34) {
    computadorEscolha = "pedra";
} else if(computadorEscolha <= 0.67) {
    computadorEscolha = "papel";
} else {
    computadorEscolha = "tesoura";
}

// Display computer choice
document.write("<p>Computador:" + " " + computadorEscolha + "</p>");

// Compare user choice vs computer choice
var comparar = function(escolha1,escolha2) {
    if (escolha1 === escolha2) {
        return "Empate!";
    }
    if (escolha1 === "pedra") {
        if (escolha2 === "tesoura") {
            // rock wins
            return "Você ganhou!";
        } else {
            // paper wins
            return "Você perdeu! Tente novamente.";
        }
    }
    if (escolha1 === "papel") {
        if (escolha2 === "pedra") {
            // paper wins
            return "Você ganhou!";
        } else {
            // scissors wins
            return "Você perdeu! Tente novamente.";
        }
    }
    if (escolha1 === "tesoura") {
        if (escolha2 === "pedra") {
            // rock wins
            return "Você perdeu! Tente novamente.";
        } else {
            // scissors wins
            return "Você ganhou!";
        }
    }
};

// Run the compare function
var res = comparar(jogadorEscolha,computadorEscolha);

// Display results
document.write("<br><hr><br>" + res);
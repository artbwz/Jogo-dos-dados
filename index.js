document.getElementById("refresh").addEventListener("click", function () {
    location.reload();
});


//criar uma funçao para criar um numero aleatorio entre 1 e 6
var numero1 = Math.floor(Math.random() * 6) + 1;
var numero2 = Math.floor(Math.random() * 6) + 1;

if (numero1 == 1) {
    dice1 = "dice1.svg";
} else if (numero1 == 2) {
    dice1 = "dice2.svg";
} else if (numero1 == 3) {
    dice1 = "dice3.svg";
} else if (numero1 == 4) {
    dice1 = "dice4.svg";
} else if (numero1 == 5) {
    dice1 = "dice5.svg";
} else if (numero1 == 6) {
    dice1 = "dice6.svg";
};

if (numero2 == 1) {
    dice2 = "dice1.svg";
} else if (numero2 == 2) {
    dice2 = "dice2.svg";
} else if (numero2 == 3) {
    dice2 = "dice3.svg";
} else if (numero2 == 4) {
    dice2 = "dice4.svg";
} else if (numero2 == 5) {
    dice2 = "dice5.svg";
} else if (numero2 == 6) {
    dice2 = "dice6.svg";
};

document.getElementById("dice1").src = "src/" + dice1;
document.getElementById("dice2").src = "src/" + dice2;

if (numero1 > numero2) {
    document.querySelector("h1").innerHTML = "Jogador 1 ganhou!";
} else if (numero1 < numero2) {
    document.querySelector("h1").innerHTML = "Jogador 2 ganhou!";
} else {
    document.querySelector("h1").innerHTML = "Empate!";
}
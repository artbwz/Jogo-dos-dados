
document.getElementById("button").addEventListener("click", function () {
    //criar uma funçao para criar um numero aleatorio entre 1 e 6
    var numero1 = Math.floor(Math.random() * 6) + 1;
    var numero2 = Math.floor(Math.random() * 6) + 1;

    for (var i = 1; i < 7; i++) {
        if (numero1 == i) {
            dice1 = "dice" + i + ".svg";
        }
        if (numero2 == i) {
            dice2 = "dice" + i + ".svg";
        }
    }

    document.getElementById("dice1").src = "src/" + dice1;
    document.getElementById("dice2").src = "src/" + dice2;
    if (numero1 > numero2) {
        document.querySelector("h1").innerHTML = "Jogador 1 ganhou!";
    } else if (numero1 < numero2) {
        document.querySelector("h1").innerHTML = "Jogador 2 ganhou!";
    } else {
        document.querySelector("h1").innerHTML = "Empate!";
    }
});
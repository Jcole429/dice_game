var result_text = document.querySelector(".container h1");
var img1 = document.querySelector(".dice .img1");
var img2 = document.querySelector(".dice .img2");

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random int 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Random int 1-6

var imagesSource = "images/";

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

img1.src = imagesSource + randomDiceImage1;
img2.src = imagesSource + randomDiceImage2;

if (randomNumber1 > randomNumber2) {
    result_text.innerHTML = "Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    result_text.innerHTML = "Player 2 Wins!"
} else {
    result_text.innerHTML = "Draw!"
}
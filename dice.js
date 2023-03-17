var img1 = document.querySelector(".dice .img1");

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random int 1-6

var imagesSource = "images/";

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

img1.src = imagesSource + randomDiceImage1;

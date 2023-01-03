let randomNumber1 = Math.floor(Math.random() * 6) + 1;   //this give us a random number from 1-6


let randomDiceImage = "dice" + randomNumber1 + ".png";

let randomImageSource = "images/" + randomDiceImage;

console.log(randomImageSource);
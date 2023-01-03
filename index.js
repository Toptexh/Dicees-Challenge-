let randomNumber1 = Math.floor(Math.random() * 6) + 1;   //this give us a random number from 1-6


let randomDiceImage = "dice" + randomNumber1 + ".png";

let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;   //this give us a random number from 1-6

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins!🙂 ";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 wins!! ☠ ";   
}
else{
    document.querySelector("h1").innerHTML = "Draws.......🧨"
}

 
 


 
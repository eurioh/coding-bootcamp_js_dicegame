// First Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 number generated

var randomDiceImage = "dice" + randomNumber1 + ".png"; //eg) "dice 1.png" - "dice 6.png"

//change the string (dice 1.pgn) based on the random number that we got back
// tap into the sourece attribute of our image element

// dice picture nested in the image folder

var randomImagesSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png


//Let's change the attribure of element DOM

var image1 = document.querySelectorAll("img")[0];


// want to change the src attribute 
image1.setAttribute("src", randomImagesSource);


// Second Dice
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //another way to change the pictures
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//flags for winner
let h1 = document.querySelector('h1');// var image1= $('h1') in jQuery

if (randomNumber1 > randomNumber2){
    h1.innerHTML = "🚩 Player 1 Wins!";
}else if (randomNumber1 < randomNumber2){
    h1.innerHTML = "Player 2 Wins!  🚩";
}else{
    h1.innerHTML = "Draw!"; 
}





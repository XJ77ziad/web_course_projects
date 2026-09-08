firstDice = Math.floor(Math.random()*6) + 1;
secondDice = Math.floor(Math.random()*6) +1;

images = document.querySelectorAll("img");

images[0].setAttribute("src","./images/dice" + firstDice +".png");
images[1].setAttribute("src","./images/dice" + secondDice +".png");

if (firstDice > secondDice){
    document.querySelector("h1").innerText = "Player one won!";
}

else if (firstDice < secondDice){
    document.querySelector("h1").innerText = "Player two won!";
}

else {
    document.querySelector("h1").innerText = "Tie!";
}
var gameNext = Math.floor(Math.random()*4);
var colors = ["red","green","blue","yellow"];
var gameSequence = [];
var playerSequence = [];

gameSequence[0] = colors[gameNext];

$(document).on("keypress",function(){
    $("h1").text("Level " + gameSequence.length);
    setTimeout(() => {
        playSound(gameSequence[0]);
        animate(gameSequence[0]);
    }, 90);
    $(document).off("keypress");
    playGame();
});

function gameUpdate (){
    gameNext = Math.floor(Math.random()*4);
    gameSequence.push(colors[gameNext]);
    playSound(gameSequence[gameSequence.length-1]);
    animate(gameSequence[gameSequence.length-1]);
}

function playSound(soundName){
    var sound = new Audio("./sounds/" + soundName + ".mp3");
    sound.play();
}

function animate (btn){
    $("." + btn).addClass("pressed");
    setTimeout(() => {
        $("." + btn).removeClass("pressed");
    }, 150);
}

function playGame(){
    for (i = 0; i<colors.length; i++){
        $("." + colors[i]).on("click",function(){
            var color = $(this).attr("id");
            animate(color);
            playSound(color);
            playerSequence.push(color);
        });
    }
}

function checkAnswer(){
    if (playerSequence.length == gameSequence.length){
        var length = playerSequence.length;
        if (playerSequence[length -1]== gameSequence[length -1]){
            gameUpdate();
        }
        else if (playerSequence[length -1] != gameSequence[length -1]) {
            $("body").addClass("game-over");
        }
    }
}

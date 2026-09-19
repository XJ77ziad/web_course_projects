function getRandomNumber(){
    return Math.floor(Math.random()*4);
}

function getLevel (){
    return gameSequence.length +1;
}

var colors = ["red","green","blue","yellow"];
var gameSequence = [];
var playerSequence = [];
var started = false;

function btnAnimation (btn){
    $("." + btn).addClass("pressed");
    setTimeout(() => {
        $("."+ btn).removeClass("pressed");
    }, 200);
}

function btnPlaySound (btn){
    var sound = new Audio("./sounds/" + btn + ".mp3");
    sound.play();
}

function updateGame (){
    playerSequence = [];
    var level = getLevel();
    var gameNext = getRandomNumber();
    var randomColor = colors [gameNext];
    $("h1").text("Level " +level);
    gameSequence.push(randomColor);
    btnAnimation(randomColor);
    btnPlaySound(randomColor);
}

function checkAnswer(currentLevel){
    if (playerSequence[currentLevel] == gameSequence[currentLevel]){
        if (playerSequence.length == gameSequence.length){
            setTimeout(() => {
                updateGame();
            }, 500
            );
        }
    }
    else {
        $(".btn").off("click");
        $("body").addClass("game-over");
        btnPlaySound("wrong");
        $("h1").text("Game over. Press any key to start again");
        started = false;
        startGame();
    }
}

function addClick (){
    $(".btn").on("click",
        function (){
            var btnColor = $(this).attr("id");
            btnAnimation(btnColor);
            btnPlaySound(btnColor);
            playerSequence.push(btnColor);
            checkAnswer(playerSequence.length-1);
        }
    );
}

function startGame (){
    $(document).on("keypress",function(){
        if ($("body").hasClass("game-over")){
            $("body").removeClass("game-over")
        }
        playerSequence = [];
        gameSequence = [];
        setTimeout(() => {
            updateGame();
        }, 400);
        if (!started){
            addClick();
            started = true;
        }
        $(document).off("keypress");
    });
}


startGame();
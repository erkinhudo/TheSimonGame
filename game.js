
var userClickedPattern =  [];
var gamePattern = []; // 2.5 step
var buttonColours = ["red","blue","green","yellow"]; // 2.3 step
var started = false;
var level = 0 ;

$(".btn").click(function(){
    // created a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1)
});

function playSound(name){
    //2.use Javascript to play the sound for the button colour selected in step 1.
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// kalan yerimiz , Step-2 Creat new pattern

function nextSequence(){ //2.1 step
    userClickedPattern = [];
    level ++;
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);  // 2.2 step
    var randomChosenColour = buttonColours[randomNumber]; // 2.4 step
    gamePattern.push(randomChosenColour);
 
    //1. Use jQuery to select the button with the same id as the randomChosenColour
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
     playSound(randomChosenColour);
};

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");

setTimeout(function (){
    $("#"+currentColour).removeClass("pressed");
}, 100);
};

$(document).keypress(function(){ 
  if (!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }   
}); 

function checkAnswer(currentLevel){

   if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
       console.log("Seccess");
   
   if (userClickedPattern.length===gamePattern.length){
       setTimeout(function(){
           nextSequence();
       },1000);
   }
}
else {
    console.log("Wrong");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");

setTimeout(function (){
    $("body").removeClass("game-over");
}, 200);

 $("#level-title").text("Game Over,Press Any Key to Restart");

 startOver();
};
};

function startOver(){
   level = 0 ;
   gamePattern = [];
   started = false;
};
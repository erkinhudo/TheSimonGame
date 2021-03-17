
var gamePattern = []; // 2.5 step
var buttonColours = ["red","blue","green","yellow"]; // 2.3 step

// kalan yerimiz , Step-2 Creat new pattern

function nextSequence(){ //2.1 step
    var randomNumber = Math.floor(Math.random() * 4);  // 2.2 step
    var randomChosenColour = buttonColours[nextSequence()]; // 2.4 step
    gamePattern.push(randomChosenColour);
};
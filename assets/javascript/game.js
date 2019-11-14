

// This game will ask players a series of questions for every one they get correct, that gift set or product will pop-up.
// For every answer they get incorrect it will recommend another gift set to them. 
//A word bank is provided for players, to assist them in selecting the correct answer.
// A button feature allows players to select a word from the word bank.

// console.log("game.js");


// Create a prompt that asks players for their email address, so all recommended products can be emailed to them.
var email = prompt;
prompt("Please enter your email address, so you can receive all of your Kiehl's gift recommendations!");
// Create an on click feature for the let's play button. Once the player selects the let's play button, it leads them into the game.
    function scrollFunction() {
    var questions = document.getElementById('questions');
    questions.scrollIntoView();

    };

    // List products
    var products=["Creme de Corps", "Ultra Facial Cream", "Calendula Deep Foaming Face Wash", "Calendula Toner", "Midnight Recovery Oil Concentrate", "Ultimate Hand Salve", "Pure Vitality", "Daily Reviving Concentrate"];
    var randomWords;
    var wins = 0;
    var loses = 0;
    var triesLeft;
    var displayWord = [];

    function gameLayout(){
        randomWords = products[Math.floor(Math.random() * products.length)];
        triesLeft= 8;
        for (var i = 0; i < randomWords.length; i++) {
            displayWord.push('_');
        }
        console.log('randomWords', randomWords);
        console.log('displayWord', displayWord);
    
        document.getElementById('guessedWord').innerHTML = displayWord.join(' ');
    }
    
    gameSetUp();
    
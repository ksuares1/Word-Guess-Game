

// This game will ask players a series of questions for every one they get correct, that gift set or product will pop-up.
// For every answer they get incorrect it will recommend another gift set to them. 
//A word bank is provided for players, to assist them in selecting the correct answer.

// console.log("game.js");

 $(document).ready(function() {
// Create a prompt that asks players for their email address, so all recommended products can be emailed to them.

// function playGame(){

// var intro = prompt;
// prompt("Happy Holidays! Who are you shopping for today?");

// var email = prompt;
// prompt("Please enter your email address, so you can receive all of your Kiehl's gift recommendations!");
// Create an on click feature for the let's play button. Once the player selects the let's play button, it leads them into the game.
    // function scrollFunction() {
    // var questions = document.getElementById('questions');
    // questions.scrollIntoView();

    // };

    // List products
    // var products=["Creme De Corps", "Ultra Facial Cream", "Calendula Deep Foaming Face Wash", "Calendula Toner", "Midnight Recovery Oil concentrate", "Ultimate Hand Salve", "Pure Vitality"];
    // var randomWords;
    // var wins = 0;
    // var loses = 0;
    var triesLeft;
    var displayWord = [];

    function gameLayout(){
        randomWords = products[Math.floor(Math.random() * products.length)];
        triesLeft= 7;
        for (var i = 0; i < randomWords.length; i++) {
            displayWord.push('_');
        }
        console.log('randomWords', randomWords);
        console.log('displayWord', displayWord);
    
        document.getElementById('guessedWord').innerHTML = displayWord.join(' ');
    }

    gameLayout();
    
  
        //Player presses a key 
    //  var player = event.key;
  
    //  //  Is the letter in the word?
    //     if(letter=== "A"&& "B"){

        // }
        //  (Calendula Deep Foaming Face Wash") 
        //    (player === "Calendula Toner") || (player === "Midnight Recovery Oil Concentrate") ||
        //    (player === "Ultimate Hand Salve") || (player === "Pure Vitality") 
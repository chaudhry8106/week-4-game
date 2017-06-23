var wins = 0;
var losses = 0;
// var userInput = [];

var userChoice = function (min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

 var crystal1 = userChoice(1,15);
 var crystal2 = userChoice(1,15);
 var crystal3 = userChoice(1,15);
 var crystal4 = userChoice(1,15);


document.getElementById("game").innerHTML = "<h3>Wins: " + wins + "</h3>" +
                                              "<h3>Losses: " + losses + "</h3>";

var computerChoice = function (min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

var randomNumber  = computerChoice(19,120);

// document.append();
document.getElementById("random").innerHTML = "<h3>Random Number</h3>" +
                                              "<h2>" + randomNumber + "</h2>";


var userChoice = function () {
  if (true) {} else {}
}

document.getElementById("total").innerHTML = "<h3>Your total score is: </h3>" +
                                              "<h2>" + crystal1 + crystal2 + crystal3 + crystal4 + "</h2>";


// console.log();


// var newGame = function () {
  
// }
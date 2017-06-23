var wins = 0;
var losses = 0;

var computerChoice = function (min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

var randomNumber  = computerChoice(19,120);

// document.append();
document.getElementById("random").innerHTML = "<h3>Random Number</h3>" +
                                              "<h2>" + randomNumber + "</h2>";
console.log();


var newGame = function () {
  
}
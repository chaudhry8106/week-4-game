var wins = 0;
var losses = 0;

function newGame() {

	var random = function (min,max) {
    	return Math.floor(Math.random()*(max-min+1)+min);
	}

 	var number1 = random(1,15);
 	var number2 = random(1,15);
 	var number3 = random(1,15);
 	var number4 = random(1,15);
 	var randomNumber  = random(19,120);
 	var currentScore = "";

 	document.getElementById("game").innerHTML = "<h3>Wins: " + wins + "</h3>" +
                                              "<h3>Losses: " + losses + "</h3>";

    document.getElementById("random").innerHTML = "<h3>Random Number</h3>" +
                                              "<h2>" + randomNumber + "</h2>";


    $("#crystal1").on ("click", function(){
    	currentScore = parseInt(currentScore + number1);
    
    	document.getElementById("total").innerHTML = "<h3>Your total score is: </h3>" +
                                              	"<h2>" + currentScore + "</h2>";
    });

	$("#crystal2").on ("click", function(){
    	currentScore = parseInt(currentScore + number2);
    
    	document.getElementById("total").innerHTML = "<h3>Your total score is: </h3>" +
                                              	"<h2>" + currentScore + "</h2>";
    });

	$("#crystal3").on ("click", function(){
    	currentScore = parseInt(currentScore + number3);
    
    	document.getElementById("total").innerHTML = "<h3>Your total score is: </h3>" +
                                              	"<h2>" + currentScore + "</h2>";
    });

	$("#crystal4").on ("click", function(){
    	currentScore = parseInt(currentScore + number4);
    
    	document.getElementById("total").innerHTML = "<h3>Your total score is: </h3>" +
                                              	"<h2>" + currentScore + "</h2>";
    });

		if (currentScore === randomNumber) {
			wins++;
			alert("You Rock!!");
			newGame();
		} if (currentScore > randomNumber) {
			losses++;
			alert("Next time..");
			newGame();
		};

	console.log(number1);
	console.log(number2);
	console.log(number3);
	console.log(number4);
};

newGame();




// function myGame() {
// 	if (currentScore === randomNumber) {
// 		wins++;
// 		newGame();
// 		alert("You Rock!!");
// 	} if (currentScore > randomNumber) {
// 		losses++;
// 		newGame();
// 		alert("Next time..");
// 	} else {}
// };

// myGame();










var player
var oppenent


// Health Counters for both user and opponent
var userHealth = 500;
var enemyHealth = 200;
//pre-set character attributes
var playerStrength = 30;
var opponentStrength = 20;

var nedStark = new opponent(400, 20, 12)
var danyTarg = new oppenent(400, 25, 8)
var jofBar = new opponent(300, 25, 15)
var stanBar = new opponent(350, 20, 10)
var tywinLan = new opponent(350, 15, 20)
var balGrey = new opponent(300, 10, 25)

var game_over = false;

var start_game = true;



$(document).ready(function() {



//player selection

//links to character select button 

















$(".attackButton").on("click", function() {
	var userPlayer = prompt("Whom will you play as to conquer the Seven Kimngdoms of Westeros:  Eddard, Daenarys, Joffery, Tywin, Stannis, or Balon?")
	}

}(".normalButton").on("click", function(){
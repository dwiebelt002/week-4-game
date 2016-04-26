var userPlayer //represents user's character choice
var computerPlayer //respresents computer character

var playerAttack
var computerAttack


// Health Counters for both user and opponent
var userHealth = 0
var enemyHealth = 0

//pre-set character attributes
var player = function (health, strength, counter){
this.health = health;
this.strength = strength;
this.counter = counter;
};

var opponent = function (health, strength){
this.health = health;
this.strength = strength;
this.defense = defense;
};

var nedStark = new opponent(400, 20, 12)
var danyTarg = new oppenent(400, 25, 8)
var jofBar = new opponent(300, 25, 15)
var stanBar = new opponent(350, 20, 10)
var tywinLan = new opponent(350, 15, 20)
var balGrey = new opponent(300, 10, 25)


//player selection



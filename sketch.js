var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var trackIMG,groundIMG,car1_IMG,car2_IMG,car3_IMG,car4_IMG;

var cars, car1, car2, car3, car4;

function preload(){
  trackIMG = loadImage("../images/track.jpg");
  groundIMG= loadImage("../images/ground.png");
  car1_IMG= loadImage("../images/car1.png");
  car2_IMG = loadImage("../images/car2.png");
  car3_IMG = loadImage("../images/car3.png");
  car4_IMG = loadImage("../images/car4.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
  }

}

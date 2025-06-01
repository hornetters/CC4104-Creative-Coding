// Q controls player 1 and P controls player 2

let gravity = 0.3;
let squaresize = 30;
let squarerad = squaresize/2;
let squarefloor = 350 - squaresize;

let killCubeActive = false;
let killCubeCooldown = false;
let killcubeX = 300;
let killcubeY = 200;

let Xposition1 = 20;
let Yposition1 = 60;
let Yspeed1 = 0;
let Xdisplacement1 = 2;
let hasCube1 = false;
var fillColour1 = 255;

let Xposition2 = 350;
let Yposition2 = 60;
let Yspeed2 = 0;
let Xdisplacement2 = -2;
let hasCube2 = false;
var fillColour2 = 255;


function setup() {
  createCanvas(600, 400);
  
  textSize(30);
  textAlign(CENTER, CENTER)
}

function draw() {
  background(220);
  rect(0,350, width, 50);
  player1();
  player2();
  
  // Detects collision between the two squares
  var colDetect = dist(Xposition1, Yposition1, Xposition2, Yposition2)
  
  var killDetect1 = dist(Xposition1, Yposition1, killcubeX, killcubeY)
  var killDetect2 = dist(Xposition2, Yposition2, killcubeX, killcubeY)
  
  if (colDetect < squaresize){
    if(hasCube1 && hasCube2){ // Sets a draw state
      text('Its a draw!', width/2, height/2)
      frameRate(0);
      noLoop();
    }
    else if(hasCube1){ // Player 1 win state
      text('Player 1 Wins', width/2, height/2)
      frameRate(0);
      noLoop();
    }
    else if(hasCube2){ // Player 2 win state
      text('Player 2 Wins', width/2, height/2)
      frameRate(0);
      noLoop();
    }
    else{ // Makes the players bounce off of each other if neither can kill the other
      Xdisplacement1 = Xdisplacement1 * -1;
      Xdisplacement2 = Xdisplacement2 * -1;
    }
  }
  
  // Controls when the killcube spawns
  if(frameCount%300 == 0 && killCubeCooldown == false){
    killCubeActive = true;
    killCubeCooldown = true;
  }
  else if(frameCount%2500 == 0){
    killCubeCooldown = false;
  }
  
  if(killCubeActive == true){
    fill(255, 0, 0)
    square(killcubeX, killcubeY, squaresize)
    fill(255, 255, 255)
  }
  
  // Detects collision between the squares and the killCube
  if (killDetect1 < squaresize && killCubeActive == true){
    hasCube1 = true;
    killCubeActive = false;
    killCubeCooldown = true;
  }
  
  if (killDetect2 < squaresize && killCubeActive == true){
    hasCube2 = true;
    killCubeActive = false;
    killCubeCooldown = true;
  }
}

function player1(){
  
  //Controls the X position
  if (Xposition1 > width-squaresize || Xposition1 < 0){
    Xdisplacement1 = Xdisplacement1 * -1;
  }
  Xposition1 = Xposition1 + Xdisplacement1;
  
  //Controls the Y position
  if (keyIsPressed && key == 'q'){ // Jump state
    if(Yposition1 > squarefloor){
     Yposition1 = squarefloor;
     Yspeed1 = 0;
    }
    else if(Yposition1 < 0){
      Yposition1 = 2;
      Yspeed1 = 0;
    }
    else{
      Yspeed1 = Yspeed1 - gravity;
      Yposition1 = Yposition1 + Yspeed1;
    }
  }
  else{
   if(Yposition1 > squarefloor){
     Yposition1 = squarefloor;
     Yspeed1 = 0;
    }
    else if(Yposition1 < 0){
      Yposition1 = 2;
      Yspeed1 = 0;
    }
    else{
      Yspeed1 = Yspeed1 + gravity;
      Yposition1 = Yposition1 + Yspeed1;
    }
  }
  
  // Checks if the player has the kill cube
  if(hasCube1){
    fillColour1 = 0;
  }
  
  fill(fillColour1);
  
  //Initialises the square
  square(Xposition1, Yposition1, squaresize)
  
  fill(255)
}

function player2(){
  
  //Controls the X position
  if (Xposition2 > width-squaresize || Xposition2 < 0){
    Xdisplacement2 = Xdisplacement2 * -1;
  }
  Xposition2 = Xposition2 + Xdisplacement2;
  
  //Controls the Y position
  if (keyIsPressed && key == 'p'){ // Jump state
    if(Yposition2 > squarefloor){
     Yposition2 = squarefloor;
     Yspeed2 = 0;
    }
    else if(Yposition2 < 0){
      Yposition2 = 2;
      Yspeed2 = 0;
    }
    else{
      Yspeed2 = Yspeed2 - gravity;
      Yposition2 = Yposition2 + Yspeed2;
    }
  }
  else{
   if(Yposition2 > squarefloor){
     Yposition2 = squarefloor;
     Yspeed2 = 0;
    }
    else if(Yposition2 < 0){
      Yposition2 = 2;
      Yspeed2 = 0;
    }
    else{
      Yspeed2 = Yspeed2 + gravity;
      Yposition2 = Yposition2 + Yspeed2;
    }
  }
  
  // Checks if the player has the kill cube
  if(hasCube2){
    fillColour2 = 0;
  }
  
  fill(fillColour2);
  
  //Initialises the square
  square(Xposition2, Yposition2, squaresize)
  
  fill(255)
}
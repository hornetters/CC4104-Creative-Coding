let linesButton;
let linesSlider
let linesOn = false;

let circleButton;
let circleSlider;
let circleOn = false;

let curveButton;
let curveSlider;
let curveOn = false;

let zigzagButton;
let zigzagSlider;
let randZigzags;
let zigSeed = [];
let zigzagsOn = false;

function setup() {
  createCanvas(600, 700);
  
  // Creates buttons and sliders for enabling and moving each moire shape
  linesButton = createButton('Lines')
  linesButton.position(10,10)
  linesButton.mousePressed(toggleLines)
  
  linesSlider = createSlider(-50, 50, 0)
  linesSlider.position(100, 17)
  
  circleButton = createButton('Circles')
  circleButton.position(10, 50)
  circleButton.mousePressed(toggleCircles)
  
  circleSlider = createSlider(-50, 50, 0)
  circleSlider.position(100, 57)
  
  curveButton = createButton('Curves')
  curveButton.position(300, 10)
  curveButton.mousePressed(toggleCurves)
  
  curveSlider = createSlider(-50, 50, 0)
  curveSlider.position(400, 17)
  
  zigzagButton = createButton('Zigzags')
  zigzagButton.position(300, 50)
  zigzagButton.mousePressed(toggleZigzags)
  
  zigzagSlider = createSlider(-50, 50, 0)
  zigzagSlider.position(400, 57)
  
  // Styling using webkit-appearance
  linesButton.style("font-size", "20px")
  linesButton.style("border-radius", "15px")
  
  circleButton.style("font-size", "20px")
  circleButton.style("border-radius", "15px")
  
  curveButton.style("font-size", "20px")
  curveButton.style("border-radius", "15px")
  
  zigzagButton.style("font-size", "20px")
  zigzagButton.style("border-radius", "15px")
  
  for(var i = -100; i < width + 100; i++){ // Makes the zigzag pattern random on each refresh
    for(var j = 100; j < height; j++){
      randZigzags = random(0, 2);
      zigSeed[i, j] = randZigzags;
    }
  }
}

function draw() {
  strokeWeight(3)
  background(220);
  fill('darkgrey')
  rect(0,0,windowWidth, 100)
  
  if(linesOn){
    moire1.initialiseShapes();
  }
  if(circleOn){
    moire2.initialiseShapes();
  }
  if(curveOn){
   moire3.initialiseShapes(); 
  }
  if(zigzagsOn){
   moire4.initialiseShapes(); 
  }
}

class lines{
  initialiseShapes(){
    translate(linesSlider.value(), 0)
    for(var i = -100; i < width + 100; i+=6){
      line(i, 100, i, height);
    }
    translate(-linesSlider.value(),0)
  }
}

class circles{
  initialiseShapes(){
    translate(width/2, 600/2+100)
    translate(circleSlider.value(), 0)
    noFill()
    for(var i = 0; i < width; i+=10){
      circle(0, 0, i)
    }
    translate(-circleSlider.value(), 0)
    translate(-width/2, -(600/2+100))
  }
}

class curves{
  initialiseShapes(){
    noFill()
    translate(-200, -50)
    translate(curveSlider.value(), 0)
    for(var i = 0; i < width + 500; i+=50){
      for(var j = 100; j < height; j+=7){
        if(j % 2 == 0){
         curve(i, j, i+50, j+50, i+100, j+50, i, j) 
        }
        else{
        curve(i-20, j, i+30, j+50, i+80, j+50, i-20, j)
        }
      }
    }
    translate(-curveSlider.value(), 0)
    translate(200, 50)
  }
}

class zigzags{ // Creates a zigzag pattern
  initialiseShapes(){
    translate(zigzagSlider.value(), 0)
    for(let i = -100; i < width + 100; i+=10){
      for(let j = 100; j < height; j+=10){
        if(zigSeed[i, j] < 1){
         line(i, j, i + 10, j + 10) 
        }
        else if(zigSeed[i, j] < 2){
          line(i, j + 10, i + 10, j)
        }
        else if(zigSeed[i, j] < 3){
          line(i, j, i, j + 10)
        }
      }
    }
  }
}

// Class variables declared below class
let moire1 = new lines();
let moire2 = new circles();
let moire3 = new curves();
let moire4 = new zigzags();

// Functions that toggle the different shapes on
function toggleLines(){
  if (linesOn == false){
    linesOn = true;
    linesButton.style("background", "grey")
  }
  else{
    linesOn = false;
    linesButton.style("background", "white")
  }
}

function toggleCircles(){
  if (circleOn == false){
    circleOn = true;
    circleButton.style("background", "grey")
  }
  else{
    circleOn = false;
    circleButton.style("background", "white")
  }
}

function toggleCurves(){
  if (curveOn == false){
    curveOn = true;
    curveButton.style("background", "grey")
  }
  else{
    curveOn = false;
    curveButton.style("background", "white")
  }
}

function toggleZigzags(){
  if (zigzagsOn == false){
    zigzagsOn = true;
    zigzagButton.style("background", "grey")
  }
  else{
    zigzagsOn = false;
    zigzagButton.style("background", "white")
  }
}

// Sizing variable
let sizing;

//Clear variable
let clear;

// Pen variables
let pen;
let penOn = false;

// Eraser variables
let eraserOn = false;
let eraser;

// Fun variables
let fun;
let funOn = false;
let funX1;
let funY1;
let funX2;
let funY2;
let randShape;

// Save variables
let saveDrawing;

function setup(){
  createCanvas(600,600)
  background(220)
  // Creates the tool buttons at the top (reference/p5/createButton)
  pen = createButton('Pen')
  pen.position(10,10)
  pen.mousePressed(penPressed)
  
  sizing = createSlider(1, 50, 1, 1)
  sizing.position(260, 17)
  
  eraser = createButton('Eraser')
  eraser.position(75,10)
  eraser.mousePressed(eraserPressed)
  
  fun = createButton('Chaos!')
  fun.position(165, 10)
  fun.mousePressed(funPressed);
  
  saveDrawing = createButton('Save');
  saveDrawing.position(450, 10)
  saveDrawing.mousePressed(savePressed);
  
  clear = createButton('Clear')
  clear.position(width-75, 10)
  clear.mousePressed(clearPressed)
  
  // Styling using a CSS declaration (reference/p5.Element/style)
  eraser.style("font-size", "20px")
  eraser.style("border-radius", "15px")
  
  pen.style("font-size", "20px")
  pen.style("border-radius", "15px")
  
  fun.style("font-size", "20px")
  fun.style("border-radius", "15px")
  
  saveDrawing.style("font-size", "20px")
  saveDrawing.style("border-radius", "15px")
  
  // Styling using webkit-appearance (https://www.w3schools.com/howto/howto_js_rangeslider.asp)
  sizing.style("-webkit-appearance", "none")
  sizing.style("border-radius", "5px")
  
  clear.style("font-size", "20px")
  clear.style("border-radius", "15px")
}


function draw(){
  strokeWeight(2)
  fill('darkgrey')
  rect(0,0,windowWidth,50)
  noFill()
  let brushSize = sizing.value();
  if (penOn){ // Allows the user to draw with the pen
     stroke(0)
     strokeWeight(brushSize)
     if(mouseIsPressed && mouseButton == LEFT && mouseY > 50){
       line(mouseX,mouseY,pmouseX,pmouseY)
      }
  }
  else if (eraserOn){ // Allows the user to erase any lines drawn
    strokeWeight(brushSize)
    stroke(220)
    if(mouseIsPressed && mouseButton == LEFT && mouseY > 50){
      line(mouseX, mouseY, pmouseX, pmouseY)
    }
    stroke(0)
  }
  else if (funOn){ // Creates a random effect
    funX1 = random(0, width)
    funY1 = random(50, height)
    funX2 = random(0, width)
    funY2 = random(50, height)
    
    randShape = random(0, 4)
    
    strokeWeight(brushSize);
    if(mouseIsPressed && mouseButton == LEFT && mouseY > 50){
      if(randShape < 1){
        circle(funX1, funY1, brushSize)  
      }
      else if(randShape < 2){
        triangle(funX1, funY1, funX1, funY1+brushSize, funX1+brushSize, funY1)
      }
      else if(randShape < 3){
        square(funX1, funY1, brushSize)
      }
      else if(randShape < 4){
        ellipse(funX1, funY1, brushSize, brushSize/3)
      }
    }
    stroke(0);
  }
}

function penPressed(){
  if (penOn == false){ // Sets the pen to on and turns all other buttons off
    penOn = true
    eraserOn = false
    funOn = false
    pen.style("background","grey")
    eraser.style("background", "white")
    fun.style("background", "white")
  }
  else{
    penOn = false
    pen.style("background", "white")
  }
}

function eraserPressed(){
    if (eraserOn == false){ // Sets the eraser to on and turns all the other buttons off
    eraserOn = true;
    penOn = false;
    funOn = false;
    eraser.style("background","grey")
    pen.style("background", "white")
    fun.style("background", "white")
  }
  else{
    eraserOn = false
    eraser.style("background", "white")
  }
}

function funPressed(){
  if (funOn == false){
    funOn = true;
    penOn = false;
    eraserOn = false;
    eraser.style("background","white")
    pen.style("background", "white")
    fun.style("background", "grey")
  }
  else{
    funOn = false;
    fun.style("background", "white")
  }
}

function clearPressed(){
  setup()
  funOn = false;
  penOn = false;
  eraserOn = false;
  
}

function savePressed(){
  saveCanvas('myDrawing.png')
}

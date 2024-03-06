//Bouncing Ball Demo
//Jackson Peddle

let r = 20;
let dy;
let dx;
let R = 0;
let G = 0;
let B = 0;
let state = "startscreen";
let x;
let y;

function setup() {
  createCanvas(windowWidth,windowHeight);
  x = width/2;
  y = height/2;
  dx = random(10, 20);
  dy = random(10, 20);
  noStroke();
  changeCircleColour();
}

function draw() {
  if (state === "startscreen") {
    background(0);
    showInstructions();
  }

  else if (state === "bouncingball") {
    background(220);
    drawCircle();
    moveCircle();
    bounceCircle();
    mouseVelocityChange();
    keyTyped();
  }
}

function showInstructions() {
  fill(255);
  textSize(42);
  textAlign(CENTER, CENTER);
  text("Click the mouse to start!", width/2, height/2);
  textAlign(CENTER, CENTER);
  text("Once started, click mouse to change speed", width/2, height/2+50);
}

function mousePressed() {
  if (state === "startscreen"){
    state = "bouncingball";
  }
}

function drawCircle() {
  //display circle
  fill(R, G, B);
  circle(x, y, 2*r);
}
function moveCircle(){
  //move circle
  x+= dx;
  y+= dy;
}
function bounceCircle(){
  if (x + r >= width || x - r <= 0){
    dx = -1 * dx;
    changeCircleColour();
  }
  if (y + r >= height || y - r <= 0){
    dy = -1 * dy;
    changeCircleColour();
  }
}
function changeCircleColour(){
  R = random(0, 255);
  G = random(0, 255);
  B = random(0, 255);
}
function mouseVelocityChange(){
  //Mouse click changes the velocity
  if (mouseIsPressed === true) {
    dx = random(10, 20);
    dy = random(10, 20);
  }
}
function keyTyped(){
  if (key === " "){
    dx = random(-5, 5);
    dy = random(-5, 5);    
  }
  if (key === "c") {
    changeCircleColour();
  }
}
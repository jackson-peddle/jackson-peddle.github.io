// Arrays and Object Notation
// Jackson Peddle
// 04/08/24



let x;
let y;
let d = 50;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);
  x = noise(time) * width;
  y = noise(time + 1000) * height;
  fill("black");
  noStroke();
  circle(x, y, 50);
  time += 0.01;
  ball(x, y, d);
  ball(x+100, y+100, d);
}

function ball(x, y, d){
  x = noise(time) * width;
  y = noise(time + 1000) * height;
  fill("black");
  noStroke();
  circle(x, y, d);
  time += 0.01;
}
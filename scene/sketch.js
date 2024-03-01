let scene = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
  background("white");
  track();
}

function draw() {
}

//making the track
function track(){
  background("green");
  fill(220, 149, 18);
  rect(windowWidth/2, windowHeight/2, windowWidth/1.5, windowHeight/1.1, 10);
  fill(0);
  circle(windowWidth/2, windowHeight/2, windowHeight/1.2);
  fill("red");
  circle(windowWidth/2, windowHeight/2, windowHeight/2.5)



}

function title(){

}
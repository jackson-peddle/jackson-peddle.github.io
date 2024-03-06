// Traffic Light Starter Code
// Jackson Peddle
// 02/28/24

// GOAL: make a 'traffic light' simulator. For now, just have the light

let state = "green"
let lastSwitch = 0;
let gtime = 4000;
let ytime = 2000;
let rtime = 5000;

function setup() {
  createCanvas(100, 300);

}

function draw() {
  background(255);
  drawOutlineOfLights();
  
  if (state === "green" && millis() > lastSwitch + gtime){
      state = "yellow";
      lastSwitch = millis();
  }
  else if (state === "yellow" && millis() > lastSwitch + ytime){
      state = "red";
      lastSwitch = millis();
  }
  else if (state === "red" && millis() > lastSwitch + rtime){
      state = "green";
      lastSwitch = millis();
  }
  //light colours
  if (state === "red") {
    fill("red");
    ellipse(width / 2, height / 2 - 65, 50, 50); //red
  }
  else if (state === "yellow"){
    fill("yellow");
    ellipse(width / 2, height / 2, 50, 50); //yellow
  }
  else if (state === "green"){
    fill("green");
    ellipse(width / 2, height / 2 + 65, 50, 50); //green
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);
  fill(0);
  stroke(255);
  ellipse(width / 2, height / 2 - 65, 50, 50); //red
  fill(0);
  stroke(255);
  ellipse(width / 2, height / 2, 50, 50); //yellow
  fill(0);
  stroke(255);
  ellipse(width / 2, height / 2 + 65, 50, 50); //green

  
}

//collide 2D demo

function setup() {
  createCanvas(400, 400);
}

let hit = false;

function draw() {
  background(255);
  rect(200, 200, 100, 150);

  hit = collidePointRect(mouseX, mouseY, 200, 200, 100, 150);
  
  if (hit) {
    stroke("red");
  }
  else {
    stroke("black");
  }

  // stroke(hit ? color('red') : 0);
  console.log("colliding?", hit);
}
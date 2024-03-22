// Arrays and Object Notation
// Jackson Peddle
// 04/08/24


let dx, dy;
let x;
let y;
let d;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  ball();
}

function ball(){
  let perlinBall = {
    x: noise(time) * width,
    y: noise(time + 1000) * height,
    d: windowHeight/5,
  };
  fill("black");
  noStroke();
  circle(perlinBall.x, perlinBall.y, perlinBall.d);
  time += 0.01;

  let playerBall = {
    x: width/2,
    y: height/2,
    d: windowHeight/20,
    dx: 10,
    dy: 10,
  };

  fill("red");
  circle(playerBall.x, playerBall.y, playerBall.d);
  noStroke();

  if (playerBall.y < height - playerBall.d) {
    if (keyIsDown(83)) {
      //s
      playerBall.y += playerBall.dy;
    }
  }
  if (playerBall.y > playerBall.d) {
    if (keyIsDown(87)) {
      //w
      playerBall.y -= playerBall.dy;
    }
  }
  if (playerBall.x > playerBall.d) {
    if (keyIsDown(65)) {
      //a
      playerBall.x -= playerBall.dx;
    }
  }
  if (playerBall.x < width - playerBall.d) {
    if (keyIsDown(68)) {
      //d
      playerBall.x += playerBall.dx;
    }
  }
}

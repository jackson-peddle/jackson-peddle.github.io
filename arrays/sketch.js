// Arrays and Object Notation
// Jackson Peddle
// 04/08/24


let dx, dy;
let x;
let y;
let d;
let time = 0;
let playerBall;
let theBall = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() { 
  background(220);
  ball();
  spawnBall();
  moveBall();
  displayBall();
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
}
function spawnBall() {
  playerBall = {
    x: width/2,
    y: height/2,
    d: windowHeight/20,
    dx: 10,
    dy: 10,
  };
  theBall.push(playerBall);
}

function displayBall(){
  for (let ball of theBall){
    fill("red");
    circle(ball.x, ball.y, ball.d);
  }
}

function moveBall(){
  for (let ball of theBall){
  if (ball.y < height - ball.d) {
    if (keyIsDown(83)) {
      //s
      ball.y += ball.dy;
    }
  }
  if (ball.y > ball.d) {
    if (keyIsDown(87)) {
      //w
      ball.y -= ball.dy;
    }
  }
  if (ball.x > ball.d) {
    if (keyIsDown(65)) {
      //a
      ball.x -= ball.dx;
    }
  }
  if (ball.x < width - ball.d) {
    if (keyIsDown(68)) {
      //d
      ball.x += ball.dx;
    }
  }
}
}

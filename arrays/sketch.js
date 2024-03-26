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
  spawnBall();
  
}

function draw() { 
  background(220);
  noStroke();
  ball();
  moveBall();
  displayBall();
  moveBallWithNoise();
  showMovingBall();
}

function showMovingBall() {
  for (let ball of theBall){
    fill(theBall.color);
    noStroke();
    circle(ball.x, ball.y, ball.size);
  }
}

function ball(){
  let perlinBall = {
    size: random(100, 200),
    x: random(width),
    y: random(height),
    color: (255, 0, 0),
    alpha: random(255),
    timeX: random(1000000),
    timeY: random(1000000),
    deltaTime: 0.01,
  };
  theBall.push(perlinBall);
}

function moveBallWithNoise(){
  for (let ball of theBall) {
    let x = noise(ball.timeX) * width;
    let y = noise(ball.timeY) * height;

    //set the bubble objects location
    ball.x = x;
    ball.y = y;

    //increment timeX and timeY
    ball.timeX += ball.deltaTime;
    ball.timeY += ball. deltaTime;
  }
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

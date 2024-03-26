// Jackson Peddle
// Bubble Movement Demo
// 03/25/24

let theBubbles = [];
let theBall = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < 3; i++) {
    spawnBubble();
  }
  spawnBall();
}

function draw() {
  background(255);

  moveBubblesWithNoise();
  displayBubbles();
  displayBall();
  moveBall();
}

function moveBubblesWithNoise(){
  for (let bubble of theBubbles) {
    let x = noise(bubble.timeX) * width;
    let y = noise(bubble.timeY) * height;

    //set the bubble objects location
    bubble.x = x;
    bubble.y = y;

    //increment timeX and timeY
    bubble.timeX += bubble.deltaTime;
    bubble.timeY += bubble. deltaTime;
  }
}

function spawnBubble() {
  let someBubble = {
    size: random(200, 300),
    x: random(width),
    y: random(height),
    colour: ("black"),
    timeX: random(1000000),
    timeY: random(1000000),
    deltaTime: 0.03,
  };
  theBubbles.push(someBubble);
}

function displayBubbles() {
  for (let bubble of theBubbles) {
    fill(bubble.colour);
    circle(bubble.x, bubble.y, bubble.size);
  }
}

function spawnBall() {
  let playerBall = {
    x: width/2,
    y: height- height/10,
    d: windowHeight/10,
    dx: 20,
    dy: 20,
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

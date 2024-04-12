// Jackson Peddle
// Bubble Movement Demo
// 03/25/24

let theBubbles = [];
let theBall = [];
let hit = false;
let scene = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < 2; i++) {
    spawnBubble();
  }
  spawnBall();
}

function draw() {
  playing();
}

function playing() {
  if (scene === 1) {
    background(255);
    displayBubbles();
    moveBubblesWithNoise();
    displayBall();
    moveBall();
    colliding();
  }
  else if (scene === 2) {
    background(0);
    textSize(50);
    fill(255);
    stroke(255);
    text("You died!", width/2, height/2);
  }
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
    colour: 0,
    r: random(255),
    g: random(255),
    b: random(255),
    timeX: random(1000000),
    timeY: random(1000000),
    deltaTime: 0.05,
    isColliding: false,
  };
  theBubbles.push(someBubble);
}

function displayBubbles() {
  for (let bubble of theBubbles) {
    fill(bubble.r, bubble.g, bubble.b);
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
    isColliding: false,
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

function colliding() {
  
  for (let ball of theBall){
    for (let bubble of theBubbles) {
      bubble.isColliding = collideCircleCircle(ball.x, ball.y, ball.d, bubble.x, bubble.y, bubble.size);
      hit = bubble.isColliding;
      console.log("colliding?", hit);
      if (hit){
        scene = 2;
      }
    }
  }
}
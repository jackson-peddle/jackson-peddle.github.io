// Jackson Peddle
// Arrays and Object Notation Final Project
// 03/25/24

//I used arrays to contain all of the info used for both the player ball as well as the enemy ball.
//Extra for Experts -- I'm not too sure if Mr Schellenberg showed us the collide in class, and if he did I either wasn't there, or I didn't see the demo. So for that reason I'm saying my extra for experts is my collision between the player ball and the enemy balls.

let theBubbles = [];
let theBall = [];
let hit = false;
let scene = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < 5; i++) { //making the amount of bubbles
    spawnBubble();
  }
  spawnBall();
}

function draw() {
  playing();
}

function playing() { //deciding to display the playing screen or the death screen
  if (scene === 1) { //playing screen
    background(255);
    displayBubbles();
    moveBubblesWithNoise();
    displayBall();
    moveBall();
    colliding();
  }
  else if (scene === 2) { //death screen
    background(0);
    textSize(50);
    fill(255);
    stroke(255);
    textAlign(CENTER);
    text("You died!", width/2, height/2);
    text("Press SPACE to retry", width/2, height/2 + 75);
  }
}


function keyPressed(){
  if (scene === 2){ //reseting the scene when you press space
    if (key === " "){
      scene = 1;
    }
  }
}

function moveBubblesWithNoise(){
  for (let bubble of theBubbles) { //using noise intervals to move the enemy balls seperately
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

function spawnBubble() { //setting the info for the enemy balls
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

function displayBubbles() { //displaying the enemy balls
  for (let bubble of theBubbles) {
    fill(bubble.r, bubble.g, bubble.b);
    circle(bubble.x, bubble.y, bubble.size);
  }
}

function spawnBall() { //setting the info for the players ball
  let playerBall = {
    x: width/2,
    y: height- height/10,
    d: windowHeight/10,
    dx: 30,
    dy: 30,
    isColliding: false,
  };
  theBall.push(playerBall);
}

function displayBall(){ //displaying the player ball
  for (let ball of theBall){
    fill("red");
    circle(ball.x, ball.y, ball.d);
  }
}

function moveBall(){ //movement controls for the player 
  for (let ball of theBall){
    if (ball.y < height - ball.d) {
      if (keyIsDown(83)) {
        //s key
        ball.y += ball.dy;
      }
    }
    if (ball.y > ball.d) {
      if (keyIsDown(87)) {
        //w key
        ball.y -= ball.dy;
      }
    }
    if (ball.x > ball.d) {
      if (keyIsDown(65)) {
        //a key
        ball.x -= ball.dx;
      }
    }
    if (ball.x < width - ball.d) {
      if (keyIsDown(68)) {
        //d key
        ball.x += ball.dx;
      }
    }
  }
}

function colliding() { //checking wether the player ball is colliding with any of the enemy balls
  
  for (let ball of theBall){
    for (let bubble of theBubbles) {
      bubble.isColliding = collideCircleCircle(ball.x, ball.y, ball.d, bubble.x, bubble.y, bubble.size);
      hit = bubble.isColliding;
      if (hit){ //changing to the death screen if the player ball is colliding with any of the enemy balls at all
        scene = 2;
      }
    }
  }
}
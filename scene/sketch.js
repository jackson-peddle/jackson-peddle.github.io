let scene = 1;
let scalar = 0.3;
let x1;
let y1 = 10;
let x2 = 60;
let y2 = 0;
let dx1 = 5;
let dy1 = 5;
let dx2 = 5;
let dy2 = 5;
let car1;
let car2;
let race;
let start;
let rotate1;
let rotate2;




function preload(){ //loads all the images im using
  car1 = loadImage("redbullcar.png");
  car2 = loadImage("ferraricar.png");
  race = loadImage("race.png");
  start = loadImage("title.png");
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  title();
  x1 = windowWidth/2
  x2 = windowWidth/2

}

function draw(){
  track();
  
}


function title(){
  if (scene === 1) {
    //Shows the title screen with a button to continue to the game
    //Button code borrowd from "https://p5js.org/reference/#/p5/createButton"
    background(start);
    let button1 = createButton("Click to Start"); 
    button1.position(width/2-width/15, height/2);
    button1.size(width/8, height/15);
    let button2 = createButton("Controls");
    button2.position(width/2-width/15, height/2+50);
    button2.size(width/8, height/15);
    let button3 = createButton("Credits");
    button3.position(width/2-width/15, height/2+100);
    button3.size(width/8, height/15);
    //^^^Shows the buttons I use on the title screen
    //Below removes the title buttons if the mouse clicks on start
    button1.mousePressed(() => {
      scene = 2;
      button1.remove();
      button2.remove();
      button3.remove();
    });
    button2.mousePressed(() => {
      scene = 3;
      button1.remove();
      button2.remove();
      button3.remove();
    });
    button3.mousePressed(() => {
      scene = 4;
      button1.remove();
      button2.remove();
      button3.remove();
    });
  }
}

function track(){
  //making the track screen
  if (scene === 2) {
    background(race);
    car();
    noStroke();
    car1move();
    car2move();
    noStroke();
  }
}

function controls() {
  //makes the controls screen appear
  if (scene === 3) {

  }
}
  
function credits() {
  //makes the credits screen appear
  if (scene === 4) {
 
  }
}


function car(){ //draws the cars that race
  angleMode(DEGREES);
  push();
  imageMode(CENTER);
  translate(x1, y1);
  rotate(rotate1);
  scale(0.65);
  image(car1, 0, 0, car1.width * scalar, car1.height * scalar);
  noStroke();
  pop();

  push();
  imageMode(CENTER);
  translate(x2, y2);
  rotate(rotate2);
  scale(.65);
  image(car2, 0, 0, car2.width * scalar, car2.height * scalar);
  noStroke();
  pop();
}


//moving the redbull car
function car1move(){ 
  if (keyIsDown(87)){ //s 
    rotate1 = 90;
    y1 -= dy1;  
  }
  if (keyIsDown(83)){ //w
    rotate1 = 270;
    y1 += dy1;
  }
  if (keyIsDown(65)){ //a
    rotate1 = 0;
    x1 -= dx1;
  }
  if (keyIsDown(68)){ //d
    rotate1 = 180;
    x1 += dy1;
  }
}




//moving the ferrari car
function car2move(){ 
  if (keyIsDown(38)){ //up_arrow
    rotate2 = 90;
    y2 -= dy2;
  }
  if (keyIsDown(40)){ //down_arrow
    rotate2 = 270;
    y2 += dy2;
  }
  if (keyIsDown(37)){ //left_arrow
    rotate2 = 0;
    x2 -= dx2;
  }
  if (keyIsDown(39)){ //right_arrow
    rotate2 = 180;
    x2 += dy2;
  }

}
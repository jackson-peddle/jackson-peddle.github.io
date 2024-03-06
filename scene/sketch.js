let scene = 1;
let scalar = 0.3;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let dx1 = 5;
let dy1 = 5;
let dx2 = 5;
let dy2 = 5;
let car1;
let car2;
let race;



function preload(){
  car1 = loadImage("redbullcar1.png");
  car2 = loadImage("ferraricar1.png");
  race = loadImage("race.png");
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(race);

}

function draw(){
  background(race);
  image(car1, x1 + windowWidth/2, y1-10, car1.width * scalar, car1.height * scalar);
  noStroke();
  image(car2, x2 + windowWidth/2, y2+50, car2.width * scalar, car2.height * scalar);
  noStroke();
  car1move();
  car2move();
  noStroke();
  
}

//making the track
function track(){
  background("green");
  fill(220, 149, 18);
  rect(windowWidth/2, windowHeight/2, windowWidth/1.5, windowHeight/1.1, 10);
  fill(0);
  circle(windowWidth/2, windowHeight/2, windowHeight/1.2);
  fill("red");
  circle(windowWidth/2, windowHeight/2, windowHeight/2.5);



}

function title(){

}

  


function car(){ //draws the cars that race
  image(car1, x1 + windowWidth/2, y1-10, car1.width * scalar, car1.height * scalar);
  noStroke();
  image(car2, x2 + windowWidth/2, y2+50, car2.width * scalar, car2.height * scalar);
  noStroke();
}


//moving the redbull car
function car1move(){ 
  if (keyIsDown(87)){ //s 
    y1 -= dy1;  
  }
  if (keyIsDown(83)){ //w
    y1 += dy1;
  }
  if (keyIsDown(65)){ //a
    x1 -= dx1;
  }
  if (keyIsDown(68)){ //d
    x1 += dy1;
  }
}




//moving the ferrari car
function car2move(){ 
  if (keyIsDown(38)){ //up_arrow
    y2 -= dy2;
  }
  if (keyIsDown(40)){ //down_arrow
    y2 += dy2;
  }
  if (keyIsDown(37)){ //left_arrow
    x2 -= dx2;
  }
  if (keyIsDown(39)){ //right_arrow
    x2 += dy2;
  }

}
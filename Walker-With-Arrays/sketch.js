//Walker OOP demo
// JACKSON PEDDLE
// Date
//
// Extra for Experts:
// dawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawgdawg



class Walker {
  constructor(x, y, theColor){
    this.x = x;
    this.y = y;
    this.stepSize = 10;
    this.color = theColor;
    this.radius = 10;
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      //move up
      this.y -= this.stepSize;
    }
    else if (choice < 50) {
      ////move down
      this.y += this.stepSize;
    }
    else if (choice < 75) {
      ////move right
      this.x += this.stepSize;
    }
    else if (choice < 100) {
      ////move left
      this.x -= this.stepSize;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.radius * 2);

  }
}

let theWalkers = [];


function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(220);
}

function draw() {
  for (let someWalker of theWalkers) {
    someWalker.move();
    someWalker.display();
  }
}


function mousePressed() {
  let theColor = color(random(255), random(255), random(255));
  let myWalker = new Walker(mouseX, mouseY, theColor);
  theWalkers.push(myWalker);
}
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
    this.stepSize = 5;
    this.color = theColor;
    this.radius = 5;
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

let griffin;
let ben;
let andrew;
let maxLiu;


function setup() {
  createCanvas(windowWidth, windowHeight);
  griffin = new Walker(width/2, height/2, "red");
  ben = new Walker(width/3, height/3, "black");
  andrew = new Walker(width/1.5, height/1.5, "green");
  maxLiu = new Walker(width/5, height/5, "purple");

  background(220);

}

function draw() {
  griffin.move();
  griffin.display();
  ben.move();
  ben.display();
  andrew.move();
  andrew.display();
  maxLiu.move();
  maxLiu.display();
}

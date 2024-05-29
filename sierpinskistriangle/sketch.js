// Sierpinskis Triangle Demo
// Jackson Peddle
//05/29/24

let initialTriangle = [
  {x: 800, y: 20},
  {x: 200, y: 745},
  {x: 1400, y: 745}
];

let theDepth = 0;
let theColors = ["black", "red", "blue", "yellow", "brown", "purple", "orange", "green"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(initialTriangle, theDepth);
}

function mousePressed() {
  if (theDepth < 7) {
    theDepth++;
  }
}

function sierpinski(points, depth) {
  fill(theColors[depth]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  if (depth > 0) { 
    //draw the lower left triangle
    sierpinski([midpoint(points[0], points[1]), midpoint(points[1], points[2]), points[1]], depth - 1);

    //draw the upper triangle
    sierpinski([midpoint(points[0], points[1]), midpoint(points[0], points[2]), points[0]], depth - 1);

    //draw the lower right triangle
    sierpinski([midpoint(points[0], points[2]), midpoint(points[1], points[2]), points[2]], depth - 1);
  }
}

function midpoint(p1, p2) {
  let newX = (p1.x + p2.x) / 2;
  let newY = (p1.y + p2.y) / 2;
  return {x: newX, y: newY};
}
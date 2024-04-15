// 2D Grid
//Jackson
// Apr 9, 2024

// if you are hard-coding a level, I'd use something like this


let grid;
let cellSize;
const GRID_SIZE = 10;
const PLAYER = 9;
const OPENSQUARE = 0;
const IMPASSABLE = 1;
let player = {
  x: 0,
  y: 0,
};
let grass;
let stone;



function preload() {
  grass = loadImage("grass.png");
  stone = loadImage("stone.png");
}


function setup() {
  if (windowHeight>windowWidth) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }

  //if randomizing the grid, do this:
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  
  //this is dumb -- should check if this is the right size!
  cellSize = height/grid.length;

  //add player to the grid
  grid[player.y][player.x] = PLAYER;
}

function windowResized(){
  if (windowHeight>windowWidth) {
    resizeCanvas(windowWidth, windowWidth);
  }
  else {
    resizeCanvas(windowHeight, windowHeight);
  }
  cellSize = height/grid.length;

}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }

  if (key === "e") {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }

  if (key === "w") { //up
    movePlayer(player.x+0, player.y-1); //0 on x axis, -1 on y axis
  }
  if (key === "s") { //down
    movePlayer(player.x+0, player.y+1); //0 on x axis, 1 on y axis
  }
  if (key === "d") { //right
    movePlayer(player.x+1, player.y+0); //1 on x axis, 0 on y axis
  }
  if (key === "a") { //left
    movePlayer(player.x-1, player.y+0); //-1 on x axis, 0 on y axis
  }
}

function movePlayer(x, y) {
  //dont move off the grid, and only move into open tiles
  if (x < GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0 && grid[y][x] === OPENSQUARE) {
    //previous player point
    let oldX = player.x;
    let oldY = player.y;

    //move the player
    player.x = x;
    player.y = y;

    //reset old location
    grid[oldY][oldX] = OPENSQUARE;

    //change player location
    grid[player.y][player.x] = PLAYER;
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  //toggle self and NESW neighbors
    toggleCell(x, y);

}

function toggleCell(x, y) {
  //make sure the cell youre toggling is in the grid...
  if (x < GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0) {
    //toggle the color of the cell
    if (grid[y][x] === OPENSQUARE) {
      grid[y][x] = IMPASSABLE;
    }
    else if (grid[y][x] === IMPASSABLE){
      grid[y][x] = OPENSQUARE;
    }
  }
}

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === IMPASSABLE) {
        image(stone, x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === OPENSQUARE){
        image(grass, x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === PLAYER){
        fill("red");
        square(x * cellSize, y * cellSize, cellSize);
      }
    }
  }
}

function generateRandomGrid(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      //half the time, be a 1. Other half, be a 0.
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function generateEmptyGrid(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}
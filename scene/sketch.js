let grid;
let playerX = 0;
let playerY = 0;
let gridSize = 50;
let playerChar = "P";
let isJumping = false;

function setup() {
  createCanvas(400, 400);
  grid = createGrid(8, 8);
}

function draw() {
  background(220);
  drawGrid();
}

function keyPressed() {
  if (key === "w" && playerY > 0) {
    playerY--;
  } 
  else if (key === "s" && playerY < grid.length - 1) {
    playerY++;
  } 
  else if (key === "a" && playerX > 0) {
    playerX--;
  } 
  else if (key === "d" && playerX < grid[0].length - 1) {
    playerX++;
  } 
  else if (key === " " && !isJumping) {
    jump();
  }
}

function jump() {
  isJumping = true;
  playerY--;
  setTimeout(() => {
    playerY++;
    isJumping = false;
  }, 500);
}

function createGrid(rows, cols) {
  let grid = [];
  for (let i = 0; i < rows; i++) {
    grid.push([]);
    for (let j = 0; j < cols; j++) {
      grid[i].push(".");
    }
  }
  grid[playerY][playerX] = playerChar;
  return grid;
}

function drawGrid() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === playerChar) {
        fill(255, 0, 0);
      } 
      else {
        fill(255);
      }
      rect(j * gridSize, i * gridSize, gridSize, gridSize);
    }
  }
}

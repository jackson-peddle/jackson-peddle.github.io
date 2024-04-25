let grid;
let playerX = 1; // Initial player position adjusted for the zoom
let playerY = 1; // Initial player position adjusted for the zoom
let gridSize = 50;
let playerChar = "P";
let isJumping = false;
let zoom = 3; // Zoom level

function setup() {
  let canvasSize = gridSize * zoom; // Adjust canvas size based on zoom and grid cell size
  createCanvas(canvasSize, canvasSize);  grid = createGrid(20, 20);
  grid = createGrid(20, 20);

}


function draw() {
  background(220);
  zoomGrid();
}

function keyPressed() {
  if (key === "w" && playerY > 0) {
    movePlayer(0, -1);
  } 
  else if (key === "s" && playerY < grid.length - 1) {
    movePlayer(0, 1);
  } 
  else if (key === "a" && playerX > 0) {
    movePlayer(-1, 0);
  } 
  else if (key === "d" && playerX < grid[0].length - 1) {
    movePlayer(1, 0);
  } 
  else if (key === " " && !isJumping) {
    jump();
  }
}

function jump() {
  isJumping = true;
  setTimeout(() => {
    playerY++;
    isJumping = false;
  }, 500);
}

function movePlayer(dx, dy) {
  let newX = playerX + dx;
  let newY = playerY + dy;
  if (newX >= 0 && newX < grid[0].length && newY >= 0 && newY < grid.length && grid[newY][newX] !== "#") {
    grid[playerY][playerX] = ".";
    playerX = newX;
    playerY = newY;
    grid[playerY][playerX] = playerChar;
  }
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

function zoomGrid() {
  let startX = playerX - Math.floor(zoom / 2);
  let startY = playerY - Math.floor(zoom / 2);

  for (let i = 0; i < zoom; i++) {
    for (let j = 0; j < zoom; j++) {
      let x = startX + j;
      let y = startY + i;

      if (x >= 0 && x < grid[0].length && y >= 0 && y < grid.length) {
        fill(255);
        rect(j * gridSize, i * gridSize, gridSize, gridSize);
        if (grid[y][x] === playerChar) {
          fill(255, 0, 0);
          rect(j * gridSize, i * gridSize, gridSize, gridSize);
        }
      }
    }
  }
}
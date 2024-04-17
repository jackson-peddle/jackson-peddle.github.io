// 2D Grid
//Jackson
// Apr 9, 2024

// if you are hard-coding a level, I'd use something like this

// let grid = [[1, 0, 0, 1],
//             [0, 1, 0, 1],
//             [1, 1, 0, 0],
//             [1, 0, 1, 1],
//             [0, 0, 0, 1],
//             [0, 0, 1, 1],
//             [0, 1, 0, 1],
//             [0, 0, 0, 1]];

let grid;
let cellSize;
const GRID_SIZE = 40;
let switching = "others";
let isAutoPlayOn = false;
let gospergun;

function preload() {
  gospergun = loadJSON("gosper.json");
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

  if (isAutoPlayOn && frameCount % 5) {
    grid = updateGrid();
  }

  displayGrid();
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }

  if (key === "e") {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === "s") {
    switching = "self";

  }
  if (key === "n") {
    switching = "others";
  }
  if (key === " ") {
    updateGrid();
  }
  if (key === "a") {
    isAutoPlayOn = !isAutoPlayOn;
  }
  if (key === "g") {
    grid = gospergun.gun;
  }
}


function updateGrid() {
  //need a second array so i dont mess with the grid while counting neighbors
  let nextTurn = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  
  //look at every cell
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      let neighbors = 0;

      //look at every cell in a 3x3 grid around the cell
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          //avoid going off the edge of the grid
          if (x+j >= 0 && x+j < GRID_SIZE && y+i >= 0 && y+i < GRID_SIZE) {
            neighbors += grid[y + i][x + j];
          }
        }
      }

      //dont count urself in the neighbors
      neighbors -= grid[y][x];

      //apply the rules
      if (grid[y][x] === 1) { //currently alive
        if (neighbors === 2 || neighbors === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }


      }

      if (grid[y][x] === 0) {//currently dead
        if (neighbors === 3) {
          nextTurn[y][x] = 1;
        }
        else{
          nextTurn[y][x] = 0;
        }
      }
    }
  }
  return nextTurn;

}


function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  //toggle self and NESW neighbors
  if (switching === "self") {
    toggleCell(x, y);

  } 
  else if (switching === "others") {

    toggleCell(x, y);
    toggleCell(x + 1, y);
    toggleCell(x - 1, y);
    toggleCell(x, y + 1);
    toggleCell(x, y - 1);
  }
}

function toggleCell(x, y) {
  //make sure the cell youre toggling is in the grid...
  if (x < GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0) {
    //toggle the color of the cell
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else {
      grid[y][x] = 0;
    }
  }
}

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else {
        fill("white");
      }
      square(x * cellSize, y * cellSize, cellSize);
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
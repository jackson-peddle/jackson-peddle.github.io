// 2D Grid Project: Minicraft
// Jackson Peddle
// Apr 25, 2024

let grid = [
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 6, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
];
let cellSize;
const GRID_SIZE = 20;
const PLAYER = 9;
const SKY = 0;
const DIRT = 1;
const STONE = 2;
const OBBY = 3;
const GRASS = 4;
const LEAVES = 5;
const WOOD = 6;
const WALK = 7;
let player = {
  x: 0,
  y: 3,
};
let dirt;
let grass;
let stone;
let obsidian;
let leaves;
let wood;
let walk;
let steve, steve1, steve2, steve3, steve4;
let backgroundMusic;
let wallHit;
let state = "game";
let level = 1;
let xOffset = player.x-2;
let yOffset = player.y-2;
let isJumping = false;
let jumpStartTime = 0;

function preload() {
  steve = loadImage("assets/images/steve.png");
  steve1 = loadImage("assets/images/steve1.png");
  steve2 = loadImage("assets/images/steve2.png");
  steve3 = loadImage("assets/images/steve3.png");
  steve4 = loadImage("assets/images/steve4.png");
  grass = loadImage("assets/images/dirt.png");
  dirt = loadImage("assets/images/grass.png");
  stone = loadImage("assets/images/stone.png");
  obsidian = loadImage("assets/images/obby.png");
  wood = loadImage("assets/images/wood.png");
  leaves = loadImage("assets/images/leaves.png");
  backgroundMusic = loadSound("assets/sounds/cave themeb4.ogg");
  wallHit = loadSound("assets/sounds/sm64_mario_oof.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);  
  //this is dumb -- should check if this is the right size!
  cellSize = height/grid.length;

  //add player to the grid
  grid[player.y][player.x] = PLAYER;

  //equalize sounds
  backgroundMusic.setVolume(0.5);
  wallHit.setVolume(0.8);
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
  if (state === "start") {
    background(0);
  }
  else if (state === "game") {
    background(220);
    displayGrid();
  }
  if (isJumping) {
    let playerY;
    playerY = player.y;
    movePlayer(player.x+0, player.y-0); 
    if (millis() < jumpStartTime + 200) {
      isJumping = false;
      movePlayer(player.x+0, playerY);
    }
  }
}

function keyPressed() {
  if (key === " " && !isJumping) { //jump
    isJumping = true;
    jumpStartTime = millis();
  }
  if (key === "d") { //right
    movePlayer(player.x+1, player.y+0); //1 on x axis, 0 on y axis
  }
  if (key === "a") { //left
    movePlayer(player.x-1, player.y+0); //-1 on x axis, 0 on y axis
  }

  if (key === "1" && state === "start") { //start the game ad music
    state = "game";
    backgroundMusic.loop();
  }
}

function movePlayer(x, y) {
  //dont move off the grid, and only move into open tiles
  if (x < 2*GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0 && grid[y][x] === WALK || grid[y][x] === WOOD) {
    //previous player point
    let oldX = player.x;
    let oldY = player.y;

    //move the player
    player.x = x;
    player.y = y;

    //reset old location
    grid[oldY][oldX] = WALK;
    
    
    //change player location
    grid[player.y][player.x] = PLAYER;
  }
}



function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === STONE) {
        image(stone, x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === DIRT){
        image(grass, x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === OBBY){
        image(obsidian, x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === SKY){
        fill("lightblue");
        square(x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === GRASS){
        image(dirt, x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === LEAVES){
        image(leaves, x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === WOOD){
        image(wood, x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === WALK){
        fill("lightblue");
        square(x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === PLAYER){
        if (level === 1){
          image(steve, x * cellSize, y * cellSize, cellSize);
        }
        else if (level === 2){
          image(steve1, x * cellSize, y * cellSize, cellSize);
        }
        else if (level === 3){
          image(steve2, x * cellSize, y * cellSize, cellSize);
        }
        else if (level === 4){
          image(steve3, x * cellSize, y * cellSize, cellSize);
        }
        else if (level === 5){
          image(steve4, x * cellSize, y * cellSize, cellSize);
        }
      } 
    }
  }
}


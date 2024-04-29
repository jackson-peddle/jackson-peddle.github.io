// 2D Grid Project: Minicraft
// Jackson Peddle
// Apr 25, 2024

let grid = [
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 8, 8, 2, 2, 2, 8, 8, 8, 8, 8, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [2, 2, 10, 10, 10, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [10, 10, 10, 10, 10, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  [10, 10, 10, 10, 10, 10, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
  [10, 10, 10, 10, 10, 10, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
];
let grid2, grid3;
let cellSize;
const GRID_SIZE = 20;
const PLAYER = 9;

//overworld blocks
const SKY = 0;
const DIRT = 1;
const STONE = 2;
const OBBY = 3;
const GRASS = 4;
const LEAVES = 5;
const WOOD = 6;
const WALK = 7;
const DIAMOND = 8;
const LAVA = 10;

//nether blocks
const NETHERRACK = 11;
const CRIMSON = 12;
const NETHERITE = 13;
const MAGMA = 14;

let player = {
  x: 0,
  y: 3,
};
let dirt, grass, stone, obsidian, leaves, wood, walk, diamond, lava;
let netherrack, crimson, magma, netherite;
let steve, steve1, steve2, steve3, steve4, steve5, steve6;
let backgroundMusic;
let title;
let state = "start";
let level = 1;
let isJumping = false;
let jumpStartTime = 0;
let counter = 0;

function preload() {
  //loading all of the images and sounds
  steve = loadImage("assets/images/steve.png");
  steve1 = loadImage("assets/images/steve1.png");
  steve2 = loadImage("assets/images/steve2.png");
  steve3 = loadImage("assets/images/steve3.png");
  steve4 = loadImage("assets/images/steve4.png");
  steve5 = loadImage("assets/images/steve5.png");
  steve6 = loadImage("assets/images/steve6.png");

  //overworld blocks
  grass = loadImage("assets/images/dirt.png");
  dirt = loadImage("assets/images/grass.png");
  stone = loadImage("assets/images/stone.png");
  diamond = loadImage("assets/images/diamond.png");
  obsidian = loadImage("assets/images/obby.png");
  wood = loadImage("assets/images/wood.png");
  lava = loadImage("assets/images/lava.png");
  leaves = loadImage("assets/images/leaves.png");

  //nether blocks
  netherrack = loadImage("assets/images/netherrack.png");
  netherite = loadImage("assets/images/netherite.png");
  crimson = loadImage("assets/images/crimson.png");
  magma = loadImage("assets/images/magma.png");
  //end blocks


  //music/title/
  backgroundMusic = loadSound("assets/sounds/background_music.mp3");
  title = loadImage("assets/images/title.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);  
  //this is dumb -- should check if this is the right size!
  cellSize = height/grid.length;

  //add player to the grid
  grid[player.y][player.x] = PLAYER;

  //equalize sounds
  backgroundMusic.setVolume(0.5);
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
    background(title);
  }
  else if (state === "overworld") {
    background(220);
    displayGrid();
    if (counter === 50 && level < 5) { //Auto changes your level if you collect 50 of the current item
      counter = 0;
      level ++;
    }
    else if (counter === 10 && level === 4) { //For diamonds (since there are only 10 in the world), auto upgrades after collecting them all
      counter = 0;
      level++;
    }
    else if (counter === 20 && level === 5 && state === "overworld") {
      counter = 0;
      state = "nether";
      grid = grid2;
      player.x = 0;
      player.y = 3;
    }

  }
  else if (state === "nether") {
    background(220);
    displayGrid();
    if (counter === 200 && level === 5) {
      counter = 0;
      level++;

    }
    else if (counter === 10 && level === 6) {
      counter = 0;
      level++;
      state = "end";
      grid = grid3;
      player.x = 0;
      player.y = 3;
    }
  }
  else if (state === "end") {
    background(220);
    displayGrid();  
  }
  
  if (isJumping) { //Jump command (not working)
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
  if (key === " " && !isJumping) { //jump (not currently working for whatever reason)
    jumpStartTime = millis();
    isJumping = true;
  }
  if (key === "d") { //right
    movePlayer(player.x+1, player.y+0); //1 on x axis, 0 on y axis
  }
  if (key === "a") { //left
    movePlayer(player.x-1, player.y+0); //-1 on x axis, 0 on y axis
  }
  if (key === "s") { //down
    movePlayer(player.x+0, player.y+1); //0 on x axis, 1 on y axis
  }

  if (key === " " && state === "start") { //start the game ad music
    state = "overworld";
    backgroundMusic.loop();
  }
  if (key === "ArrowUp") { //REMOVE BEFORE DONE (ADMIN LEVEL UP BUTTON)
    level++;
  }
}

function movePlayer(x, y) {
  if (state === "overworld"){
    
    //dont move off the grid, and only move into open tiles
    if (x < 2*GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0 && grid[y][x] === WALK || grid[y][x] === WOOD) {
      //only allowing you to walk on the WALK blocks if youre level 1
      //previous player point
      let oldX = player.x;
      let oldY = player.y;
      
      //move the player
      player.x = x;
      player.y = y;
      
      //reset old location
      grid[oldY][oldX] = WALK;
      
      if (grid[y][x] === WOOD) {
        level = 2;
      }
      
      
      //change player location
      grid[player.y][player.x] = PLAYER;
      
    }
    else if (x < 2*GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0 && level > 1 && grid[y][x] === GRASS || level > 1 && grid[y][x] === DIRT) {
      //after level 1, allowing you to break any grass or dirt blocks if youre higher than level 1
      let oldX = player.x;
      let oldY = player.y;
      player.x = x;
      player.y = y;
      grid[oldY][oldX] = WALK;
      grid[player.y][player.x] = PLAYER;
      if (level === 2) {
        counter ++;
      }
    }
    else if (x < 2*GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0 && level > 2 && grid[y][x] === STONE) {
      //allows you to break stone if youre level 3 or higher
      let oldX = player.x;
      let oldY = player.y;
      player.x = x;
      player.y = y;
      grid[oldY][oldX] = WALK;
      grid[player.y][player.x] = PLAYER;
      if (level === 3) {
        counter ++;
      }
    }
    else if (x < 2*GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0 && level > 3 && grid[y][x] === DIAMOND) {
      //Allows you to break the diamond ores if youre level 4
      let oldX = player.x;
      let oldY = player.y;
      player.x = x;
      player.y = y;
      grid[oldY][oldX] = WALK;
      grid[player.y][player.x] = PLAYER;
      if (level === 4) {
        counter ++;
      }
    }
    else if (x < 2*GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0 && level > 4 && grid[y][x] === OBBY) {
      //Once youve broken all of the diamonds, allows you to break obsidian, letting you go to the next stage
      let oldX = player.x;
      let oldY = player.y;
      player.x = x;
      player.y = y;
      grid[oldY][oldX] = WALK;
      grid[player.y][player.x] = PLAYER;
      if (level === 5) {
        counter ++;
      }
    }
    else if (x < 2*GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0 && grid[y][x] === LAVA) { 
      //If you touch the lava, you die and the screen goes black.
      let oldX = player.x;
      let oldY = player.y;
      player.x = x;
      player.y = y;
      state = "dead";
      background(0);
    }
  }
  if (state === "nether") {
    if (x < 2*GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0 && grid[y][x] === WALK) {
      //only allowing you to walk on the WALK blocks if youre level 1
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
    else if (x < 2*GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0 && level > 4 && grid[y][x] === CRIMSON || level > 4 && grid[y][x] === NETHERRACK) {
      //allows you to break netherrack if youre level 5 or higher
      let oldX = player.x;
      let oldY = player.y;
      player.x = x;
      player.y = y;
      grid[oldY][oldX] = WALK;
      grid[player.y][player.x] = PLAYER;
      if (level === 5) {
        counter ++;
      }
    }
    else if (x < 2*GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0 && level > 5 && grid[y][x] === NETHERITE) {
      //allows you to break netherite if youre level 6 or higher
      let oldX = player.x;
      let oldY = player.y;
      player.x = x;
      player.y = y;
      grid[oldY][oldX] = WALK;
      grid[player.y][player.x] = PLAYER;
      if (level === 6) {
        counter ++;
      }
    }
  }
  if (state === "end") {
    if (x < 2*GRID_SIZE && y < GRID_SIZE && x>=0 && y>=0 && grid[y][x] === WALK) {
      //only allowing you to walk on the WALK blocks if youre level 1
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
}


  
  

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === PLAYER){ // player and levels
        if (level === 1){ // Basic steve
          image(steve, x * cellSize, y * cellSize, cellSize);
        }
        else if (level === 2){ // Leather armor steve
          image(steve1, x * cellSize, y * cellSize, cellSize);
        }
        else if (level === 3){ // Golden armor steve
          image(steve2, x * cellSize, y * cellSize, cellSize);
        }
        else if (level === 4){ // Iron armor steve
          image(steve3, x * cellSize, y * cellSize, cellSize);
        }
        else if (level === 5){ // Iron armor with diamond pickaxe steve
          image(steve4, x * cellSize, y * cellSize, cellSize);
        }
        else if (level === 6){ // Diamond armor steve
          image(steve5, x * cellSize, y * cellSize, cellSize);
        }  
        else if (level === 7){ // Netherite armor steve
          image(steve6, x * cellSize, y * cellSize, cellSize);
        }
      } 
      if (state === "overworld") {
        if (grid[y][x] === STONE) { // stone blocks
          image(stone, x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === DIRT){ // dirt blocks
          image(grass, x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === OBBY){ // obsidian blocks
          image(obsidian, x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === SKY){ // non-walkable skyblocks
          fill("lightblue");
          square(x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === GRASS){ // grass blocks
          image(dirt, x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === LEAVES){ // leaf blocks
          image(leaves, x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === WOOD){ // wood blocks
          image(wood, x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === WALK){ // walkable sky blocks
          fill("lightblue");
          square(x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === DIAMOND){ // diamond ore blocks
          image(diamond, x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === LAVA){ // lava blocks
          image(lava, x * cellSize, y * cellSize, cellSize);
        }
      }
      else if (state === "nether"){
        if (grid[y][x] === LAVA){ // lava blocks
          image(lava, x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === NETHERRACK) {
          image(netherrack, x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === CRIMSON) {
          image(crimson, x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === NETHERITE) {
          image(netherite, x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === MAGMA) {
          image(magma, x * cellSize, y * cellSize, cellSize);
        }
        else if (grid[y][x] === WALK){ // walkable sky blocks
          fill("red");
          square(x * cellSize, y * cellSize, cellSize);
        }
      }
      else if (state === "end") {
        if (grid[y][x] === OBBY){ // obsidian blocks
          image(obsidian, x * cellSize, y * cellSize, cellSize);
        }
      }
    }
  }
}












// //the nether grid.
grid2 = [[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
  [9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 13, 11, 11, 11, 11,],
  [11, 11, 11, 11, 13, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 13, 11, 11, 11, 11,],
  [11, 11, 13, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 13, 13, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 13, 13, 13, 11, 11, 11, 11, 11, 11, 11, 11,],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 13, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,],
  [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,],
];
// the end grid.
grid3 = [[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,],
[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
[1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
[2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
[2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 8, 8, 2, 2, 2, 8, 8, 8, 8, 8, 2, 2, 2, 2, 2, 2, 2, 2,],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
[2, 2, 10, 10, 10, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
[10, 10, 10, 10, 10, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
[10, 10, 10, 10, 10, 10, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
[10, 10, 10, 10, 10, 10, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],]

//Overworld stage: break blocks in stage one to get up to diamond level, then break 50 obby and get sent to the nether stage. (Dont die in the lava!)  (DONE)

//Nether stage: break more blocks to get netherite, then break a bunch of lava to get sent to the end.
//End stage: Break more blocks to get a sword; kill endermen to beat the game.

//left to do 
//finsih leveling system in nether
//place tiles for end
//finish leveling system for end
//ewin screen and death screen
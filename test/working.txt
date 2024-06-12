// Intense Walrus Mission (final name)
// Griffin Bartsch && Jackson Peddle
// 06/15/2024
//
// Rhythm based game with piano keys
//
// Extras for Experts: swtich, regex - replaceAll, added p5 to eslint, fft, 



const gameState = {
  MENU: 0,
  GAME: 1,
  LEVELS: 2,
  SETTINGS: 3,
  CREDITS: 4,
};
let lastState = gameState.MENU;
let buttons = [];
let backButton = [];
let levelSelectBackground, startScreenBackground;
let startButton, settingsButton, creditsButton, tempDeathButton, goBackButton;


let state = gameState.MENU;
let song;
let notes = [];
let fft;
let lastNoteTime = 0;
let gameStartTime;
let score = 0;
let activeArrows = [false, false, false, false]; 
let songDuration;


function preload() {
  startButton = loadImage("Assets/Images/unnamed.png");
  // goBackButton = loadImages("Assets/Images/XXX.png");
  settingsButton = loadImage("Assets/Images/settings button.png");
  startScreenBackground = loadImage("Assets/Images/intensewalrusmissionfr.png");
  levelSelectBackground = loadImage("Assets/Images/flower_background.jpg");
  creditsButton = loadImage("Assets/Images/credits.png");
  song = loadSound("riot.mp3", () => {
    songDuration = song.duration(); // get the duration of the song after it has been loaded
  });
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //adds all buttons to the "buttons" array(except the back button which is in its own array that is displayed off the start screen as well)
  let startGameButton = new Button(width-200, height/2 - 200, width/5, height/5, gameState.LEVELS, startButton);//(location:)x, y, (size:)width, height, (where it takes you:)string, name
  buttons.push(startGameButton);
  let settingsSelectButton = new Button(width-200, height/2, width/5, height/5, gameState.SETTINGS, settingsButton);
  buttons.push(settingsSelectButton);
  let infoCreditsButton = new Button(width-200, height/2 + 200, width/5, height/5, gameState.CREDITS, creditsButton);
  buttons.push(infoCreditsButton);
  let startLevel1 = new Button(width/2, height/2, width/5, height/5, gameState.GAME, settingsButton);
  buttons.push(startLevel1);
  let goBackButton = new Button(0 + width/12, 0 + height/12, width/8, height/10, state, settingsButton);
  backButton.push(goBackButton);
  
  fft = new p5.FFT(0.8, 32);
}

function draw() {
  switch (state) {
  case gameState.MENU:
    drawMenu();
    break;
  case gameState.GAME:
    drawGame();
    break;
  case gameState.LEVELS:
    drawLevels();
    break;
  case gameState.SETTINGS:
    drawSettings();
    break;
  case gameState.CREDITS:
    drawCredits();
    break;
  }
}

function drawMenu() {
  imageMode(CORNER);
  background(startScreenBackground);
  regularButtons();
  redMouseCircle();
}

function drawLevels() {
  //place to pick the song
  imageMode(CORNER);
  background(levelSelectBackground);
  redMouseCircle();
  backButtonNoS();
}

function drawSettings() {
  background(0);
  redMouseCircle();
  backButtonNoS();
}

function drawCredits() {
  background("red");
  backButtonNoS();
}

function mousePressed() {
  //checks to see if you are clicking a button and performs the action indicated if you are
  for (let button of buttons) {
    button.mouseClicked();
  }
  for (let button of backButton) {
    button.mouseClicked();
  }
}

function redMouseCircle() {
  noStroke();
  fill(255, 0, 0, 150);
  rectMode(CENTER);
  circle(mouseX, mouseY, 25);
}

function regularButtons() {
  for (let button of buttons) {
    button.update();
  }
}

function backButtonNoS() {
  for (let button of backButton) {
    button.update();
  }
}

class Button {
  constructor(x, y, w, l, state, image) {
    this.x = x;
    this.y = y;
    this.length = l;
    this.width = w;
    this.minLength = l;
    this.minWidth = w;
    this.maxLength = l * 1.5;
    this.maxWidth = w * 1.5;
    this.reach = 60;
    this.state = state;
    this.image = image;
  } 
  display(){
    fill("255");
    imageMode(CENTER);
    
    //showing the image as a button with whatever image you input
    image(this.image, this.x, this.y, this.width, this.length);
  }
  changeTheSizeOfTheButtonBasedOnTheMouseProximity() {
    //the very descriptive function name here does the explanatory lifting
    let mouseDistance = dist(this.x, this.y, mouseX, mouseY);
    if (mouseDistance < this.reach) {
      let scaleFactor = map(mouseDistance, this.reach, 0, 1, 1.5);
      this.width = this.minWidth * scaleFactor;
      this.length = this.minLength * scaleFactor; 
    }
    else {
      this.width = this.minWidth;
      this.length = this.minLength;
    } 
  }
  
  update(){
    this.changeTheSizeOfTheButtonBasedOnTheMouseProximity();
    this.display();
  }
  
  mouseClicked() {
    //look if you are within the button
    if (mouseX > this.x - this.width / 2 && mouseX < this.x + this.width / 2 &&
        mouseY > this.y - this.length / 2 && mouseY < this.y + this.length / 2 && state === gameState.MENU) {
      //change state to the state the button changes you to
      if (backButton.includes(this)) {
        state = lastState;
      }
      else {
        state = this.state;
      }
    }
    else if (mouseX > this.x - this.width / 2 && mouseX < this.x + this.width / 2 &&
        mouseY > this.y - this.length / 2 && mouseY < this.y + this.length / 2 && state !== gameState.MENU) {
      if (backButton.includes(this)) {
        state = lastState;
      }
    }
  }
}

function keyPressed() {
  let arrowIndex;

  if (keyCode === 65) {
    arrowIndex = 0;
  } 
  else if (keyCode === 83) {
    arrowIndex = 1;
  } 
  else if (keyCode === 75) {
    arrowIndex = 2;
  } 
  else if (keyCode === 76) {
    arrowIndex = 3;
  }

  if (arrowIndex !== undefined) {
    activeArrows[arrowIndex] = true;
  }

  if (keyCode === 13) {
    if (state === gameState.MENU) {
      state = gameState.GAME;
      song.play();
      gameStartTime = millis();
    } 
    else if (state === gameState.GAME) {
      song.stop();
      state = gameState.MENU;
    }
  } 
  else if (state === gameState.GAME) {
    const hitNoteIndex = notes.findIndex(note => {
      return note.arrowIndex === arrowIndex && note.y >= height - 150 && note.y <= height - 50;
    });

    if (hitNoteIndex !== -1 && !notes[hitNoteIndex].pressed) {
      score += 100;
      notes[hitNoteIndex].pressed = true;
      notes.splice(hitNoteIndex, 1);
    } 
    else if (arrowIndex !== undefined && (hitNoteIndex === -1 || hitNoteIndex !== -1 && notes[hitNoteIndex].pressed)) {
      // Deduct points or handle misses as needed
      score -= 50;
    }
  }
}

function drawScore() {
  fill(255);
  textSize(32);
  text(`Score: ${score}`, width / 2, 40);
}

function drawPercentage() { // function to draw the percentage text
  fill(255);
  textSize(24);
  let percentage = map(song.currentTime(), 0, songDuration, 0, 100); // map the current time to a percentage
  percentage = percentage.toFixed(0); // round the percentage to the nearest integer
  text(`${percentage}%`, width / 2, height - 25); // display the percentage text centered at the bottom of the canvas
}


function drawGame() {
  background(0);
  drawArrows();
  drawScore();
  drawPercentage();
  fft.analyze();

  generateNotes();

  for (let i = notes.length - 1; i >= 0; i--) {
    const note = notes[i];
    note.update();
    note.display();

    if (note.missed()) {
      // Deduct points or handle misses as needed
      score -= 50;
      note.pressed = true;
    }

    if (note.offScreen() || note.pressed) {
      notes.splice(i, 1);
    }
  }
}

function generateNotes() {
  let currentTime = millis() - gameStartTime;

  if (currentTime - lastNoteTime >= 200) {
    let bass = fft.getEnergy("bass");
    let mid = fft.getEnergy("mid");
    let treble = fft.getEnergy("treble");
    let lowMid = fft.getEnergy("lowMid");
    let highMid = fft.getEnergy("highMid");

    let direction = round(random(0, 3)); // randomly choose a direction

    switch (direction) { // create a new note in the chosen direction
    case 0: // left
      if (bass > 200) { // adjust the threshold for the left arrow
        notes.push(new Arrow("LEFT"));
      }
      break;
    case 1: // up
      if (mid > 225) { // adjust the threshold for the up arrow
        notes.push(new Arrow("UP"));
      }
      break;
    case 2: // down
      if (lowMid > 150 && treble > 150) {
        notes.push(new Arrow("DOWN"));
      }
      break;
    case 3: // right
      if (highMid > 150 && bass > 150) {
        notes.push(new Arrow("RIGHT"));
      }
      break;
    }

    lastNoteTime = currentTime;
  }
}

function drawArrow(x, y, rotation, colorVal) {
  // a
  if (rotation === 0) {
    fill(colorVal);
    rect(x, y, 55, 25);
    rectMode(CENTER);
    noStroke();
    fill(255);
    rect(x, y, 50, 20);
    // creates inner black bar that is consistent between bars (does this for every lane)
    fill(colorVal);
    rect(x, y, 35, 8);
  }
  // s
  else if (rotation === 1) {
    fill(colorVal);
    rect(x, y, 55, 25);
    rectMode(CENTER);
    noStroke(); 
    fill(255);
    rect(x, y, 50, 20);
    fill(colorVal);
    rect(x, y, 35, 8);
  }
  // k
  else if (rotation === 2) {
    fill(colorVal);
    rect(x, y, 55, 25);
    rectMode(CENTER);
    noStroke(); 
    fill(255);
    rect(x, y, 50, 20);
    fill(colorVal);
    rect(x, y, 35, 8);
  }
  // l
  else if (rotation === 3) {
    fill(colorVal);
    rect(x, y, 55, 25);
    rectMode(CENTER);
    noStroke();
    fill(255);
    rect(x, y, 50, 20);
    fill(colorVal);
    rect(x, y, 35, 8);
  }
}

function drawArrows() {
  const arrowSize = 60;
  const yPos = height - 100;
  const xOffset = width / 2 - 1.5 * arrowSize;

  for (let i = 0; i < 4; i++) {
    let x = xOffset + i * arrowSize;
    let colorVal = activeArrows[i] ? color(255, 255, 255) : color(0, 0, 0);
    drawArrow(x, yPos, i, colorVal);
  }
}

class Arrow { // class for the arrows that fall down the screen
  constructor(direction) {
    this.direction = direction;
    this.y = 0;
    this.speed = 5;
    this.pressed = false;
    const arrowSize = 60;
    const xOffset = width / 2 - 1.5 * arrowSize;

    switch (this.direction) {
    case "LEFT":
      this.x = xOffset;
      this.arrowIndex = 0;
      break;
    case "UP":
      this.x = xOffset + arrowSize;
      this.arrowIndex = 1;
      break;
    case "DOWN":
      this.x = xOffset + 2 * arrowSize;
      this.arrowIndex = 2;
      break;
    case "RIGHT":
      this.x = xOffset + 3 * arrowSize;
      this.arrowIndex = 3;
      break;
    }
  }

  update() {
    this.y += this.speed;
  }

  display() {
    let rotation;
    let colorVal = color(0);

    switch (this.direction) {
    case "LEFT":
      rotation = 0;
      colorVal = color(255, 0, 0);
      break;
    case "UP":
      rotation = 1;
      colorVal = color(0, 255, 0);
      break;
    case "DOWN":
      rotation = 2;
      colorVal = color(0, 0, 255);
      break;
    case "RIGHT":
      rotation = 3;
      colorVal = color(255, 255, 0);
      break;
    }

    push();
    translate(this.x, this.y);
    drawArrow(0, 0, rotation, colorVal);
    pop();
  }
  
  offScreen() {
    return this.y > height;
  }
  
  removeIfHit() {
    if (this.y >= height - 150 && this.y <= height - 50 && activeArrows[this.arrowIndex] && !this.pressed) {
      this.pressed = true;
      return true;
    }
    return false;
  }

  missed() {
    return this.y > height - 50 && !this.pressed;
  }
}


function keyReleased() {
  let arrowIndex;

  if (keyCode === 65) {
    arrowIndex = 0;
  } 
  else if (keyCode === 83) {
    arrowIndex = 1;
  } 
  else if (keyCode === 75) {
    arrowIndex = 2;
  } 
  else if (keyCode === 76) {
    arrowIndex = 3;
  }

  if (arrowIndex !== undefined) {
    activeArrows[arrowIndex] = false;
  }
}
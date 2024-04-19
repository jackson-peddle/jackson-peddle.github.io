//variables
let player1;
let gun1;
let gun2;

function preload(){
  let crosshair = loadImage("cROSSHAIR 2.png")
 
}

function setup(){
  //creating sprites
  player1 = createSprite(400,400,30,30)
  gun = createSprite(player1.x,player1.y-20,5,30)
  gun.shapeColor = "black"
  obj1 =createSprite(200,200,20,20)
  obj3 = createSprite(300,500,20,50)
   
}

function draw(){
  canvas = createCanvas(displayWidth,displayHeight-115)// if i dont create canvas, it works
   background("#32CD32");
   cursor('crosshair')
   gun.x = player1.x;
   gun.y = player1.y-15;

   // functions to move
   //up
  if(keyDown("up")){
    player1.y = player1.y - 5;
  }
  //down
  if(keyDown("down")){
    player1.y = player1.y + 5;
  }
  //right
  if(keyDown("right")){
    player1.x = player1.x + 5;
  }
  //left
  if(keyDown("left")){
    player1.x = player1.x - 5;
  }
  //rotate player sprite towards mouse
  let a = atan2(mouseY - player1.y, mouseX - player1.x);
push()
 angleMode(DEGREES)
  translate(width / 2, height / 2);
  player1.rotation = a;
pop()
//camera follows player
 camera.position.x = player1.x
 camera.position.y = player1.y

drawSprites();
} 
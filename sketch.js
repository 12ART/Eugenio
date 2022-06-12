

var run, running, run_collide;
var bgImg;



function preload(){
  jumpSound = loadSound("assets/sounds/jump.wav")
  collidedSound = loadSound("assets/sounds/collided.wav")
  
  bgImg = loadImage("assets/background.jpg")
  running = loadAnimation("assets/corredor 1.png","assets/corredor 2.png");
  run_collide = loadAnimation("assets/run_collide.png");
  
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  run=createSprite(500,570,20,30);
  run.addAnimation("running", running);
  run.scale = 0.4
  // trex.debug=true
  bg = createSprite(0,0, 350,700)
  bg.addImage(bgImg)
  

}

function draw() {
  //trex.debug = true;
  background("black");
  

  
  drawSprites();
}


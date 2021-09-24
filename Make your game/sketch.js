var BG;
var player;
var bgImage,playerImage1,playerImage2;
var zombie,zombieImage,zombieGrp;
var bullet,bulletGrp,bulletImg;
var heart1,heart2,heart3;


function preload(){

  bgImage = loadImage("assets/bg.jpeg");
  playerImage1 = loadImage("assets/shooter_2.png");
  playerImage2 = loadImage("assets/shooter_3.png");
  zombieImage = loadImage("assets/zombie.png");
  bulletImg=loadImage("assets/bullet.png");
  heart1=loadImage("assets/heart_1.png");
  heart2=loadImage("assets/heart_2.png");
  heart3=loadImage("assets/heart_3.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  BG = createSprite(displayWidth-700,displayHeight-300);
  BG.addImage(bgImage);
  BG.scale = 1.1
  
  
  player = createSprite(displayWidth-1200,displayHeight-250);
  player.addImage(playerImage1);
  player.scale=0.5
  
  zombieGrp= new Group();
  bulletGrp= new Group();
  
  
  
  
 
  
  
}

function draw() {
  
  background(180);

  if(keyWentDown("SPACE")){
    player.addImage(playerImage2);
  }
  
  if(keyWentUp("SPACE")){
    player.addImage(playerImage1);
  }
  
 spawnZombies()

 if(bulletGrp.isTouching(zombieGrp)){
   for(var i=0;i<zombieGrp.length;i=i+1){
    if(zombieGrp[i].isTouching(bulletGrp)){
      zombieGrp[i].destroy();
      bulletGrp.destroyEach();
    }
   }
    
 }
 


  drawSprites();
}

function spawnZombies(){
  if(frameCount % 80===0){

    zombie=createSprite(displayWidth-200,displayHeight-250)
  zombie.addImage(zombieImage);
  zombie.scale = 0.3
  zombie.velocityX=-4
    zombie.debug=false;
    zombie.setCollider("rectangle",0,0,400,400)
    zombie.lifetime=400
    zombieGrp.add(zombie);
  }
}
 
function mouseClicked(){
  bullet=createSprite(displayWidth-1100,displayHeight-295     )
  bullet.addImage(bulletImg)
  bullet.scale=0.1
  bullet.velocityX=5
  bulletGrp.add(bullet);
}



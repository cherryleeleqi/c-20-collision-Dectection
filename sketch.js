var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(300,100,50,50);
  movingRect.shapeColor="green";
}

function draw() {
  background(0); 
  movingRect.y=World.mouseY; 
  movingRect.x=World.mouseX; 

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.x/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2&&fixedRect.y-movingRect.y<fixedRect.y/2+movingRect.width/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  } 
  else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}
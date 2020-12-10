var movingRect, fixedRect;


function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 0, 50, 50);
  fixedRect.velocityY=5;
  fixedRect.debug = true;
  fixedRect.shapeColor = 'green';

  movingRect = createSprite(400, 400, 40, 60);
movingRect.velocityY=-5
  movingRect.debug = true;
  movingRect.shapeColor = 'green';
}

function draw() {
  background("lightblue");  

 // movingRect.x = mouseX;
 // movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
     fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 
    // movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    // fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 
    ){
    movingRect.shapeColor = 'red';
    fixedRect.shapeColor = 'red';
    movingRect.velocityX=-1*movingRect.velocityX
    fixedRect.velocityX=-1*fixedRect.velocityX
  }else{
    movingRect.shapeColor = 'green';
    fixedRect.shapeColor = 'green';
  }
  //if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    //fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 
   if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 
   ){
   movingRect.shapeColor = 'red';
   fixedRect.shapeColor = 'red';
   movingRect.velocityY=-1*movingRect.velocityY
   fixedRect.velocityY=-1*fixedRect.velocityY
   }

  drawSprites();
}
var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1200, 400);
  
  bullet = createSprite(50 , 200, 50, 50);
  bullet.shapeColor(grey);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor(grey);
  
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22,83);
  car.velocityX = speed;
}

function draw(){
  background(255,255,255); 
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed *speed/(thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }
    if(damage< 10){
      wall.shapeColor = color(0, 225, 0);
    }
  }
  drawSprites();
}
function hasCollided(Lbullet, Lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEgde){
    return true;
  }
  return false;
}
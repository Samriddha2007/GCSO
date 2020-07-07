var car,wall,car1,wall1,car2,wall2;
var speed,weight,speed1,weight1,speed2,weight2;


function setup() {
  createCanvas(1370,700);
  car =  createSprite(50, 120, 50,50);
  car.shapeColor = "blue";

  car1 = createSprite(50,310,50,50);
  car1.shapeColor = "purple";

  car2 = createSprite(50,500,50,50);
  car2.shapeColor = "rgb(255, 255, 255)";
  

  speed = random(25,60);
  weight = random(200,500);

  speed1 = random(25,60);
  weight1 = random(200,500);

  speed2 = random(25,60);
  weight2 = random(200,500);

  wall = createSprite(1300,110,60,car.height*4);
  wall1 = createSprite(1300,320,60,car1.height*4);
  wall2 = createSprite(1300,530,60,car2.height*4);

}

function draw() {
  background(245, 17, 203);  
  drawSprites();

  textSize(35);
  fill("black");
  text("T",1292,260);
  text("O",1290,290);
  text("U",1290,320);
  text("R",1290,350);
  text("U",1290,380);
  text("S",1290,410);

  textSize(40);
  fill("black");
  text("Z",1290,50);
  text("E",1290,85);
  text("N",1290,120);
  text("I",1300,155);
  text("A",1290,190);

  text("C",1290,470);
  text("Y",1290,500);
  text("C",1290,530);
  text("L",1292,560);
  text("A",1290,590);
  text("P",1290,620);

  car.velocityX = 5;
  car1.velocityX = 5;
  car2.velocityX = 5;

 if(car.x - wall.x <= car.width/2 + wall.width/2 && 
    wall.x - car.x <= wall.width/2 + car.width/2 &&
    car.y - wall.y <= car.height/2 + wall.height/2 &&
    wall.y - car.y <= wall.height/2 + car.height/2)
 {
   car.velocityX = 0;

    0.5*weight*weight*speed/22500;

    if(0.5*weight*weight*speed/22500 >= 180)
    {
      fill("rgb(66, 239, 245)");
      text("State = Lethal,Rate = C+",400,100);
      wall.shapeColor = rgb(255, 0, 0);
    } 
    if(0.5*weight*weight*speed/22500 >= 80 && 0.5*weight*weight*speed/22500 <= 179)
    {
      fill("rgb(66, 239, 245)");
      text("State = Average, Rate = B+",400,100);
      wall.shapeColor = rgb(230, 230, 0);
    }
    if(0.5*weight*weight*speed/22500 < 80)
    {
      fill("rgb(66, 239, 245)");
      text("State = Good, Rate = A+",400,100);
      wall.shapeColor = rgb(0, 255, 0);
    }
 }
 else
 {
  car.velocityX = 5;
 }

 if(car1.x - wall1.x <= car1.width/2 + wall1.width/2 && 
  wall1.x - car1.x <= wall1.width/2 + car1.width/2 &&
  car1.y - wall1.y <= car1.height/2 + wall1.height/2 &&
  wall1.y - car1.y <= wall1.height/2 + car1.height/2)
{
 car1.velocityX = 0;

  0.5*weight1*weight1*speed1/22500;

  if(0.5*weight1*weight1*speed1/22500 >= 180)
  {
    fill(rgb("rgb(66, 239, 245"));
    text("State = Lethal,Rate = C+",400,290);
    wall1.shapeColor = rgb(255, 0, 0);
  } 
  if(0.5*weight1*weight1*speed1/22500 >= 80 && 0.5*weight1*weight1*speed1/22500 <= 179)
  {
    fill(rgb("rgb(66, 239, 245"));
    text("State = Average, Rate = B+",400,290);
    wall1.shapeColor = rgb(230, 230, 0);
  }
  if(0.5*weight1*weight1*speed1/22500 < 80)
  {
    fill(rgb("rgb(66, 239, 245"));
    text("State = Good, Rate = A+",400,290);
    wall1.shapeColor = rgb(0, 255, 0);
  }
}
else
{
car1.velocityX = 5;
}





if(car2.x - wall2.x <= car2.width/2 + wall2.width/2 && 
  wall2.x - car2.x <= wall2.width/2 + car2.width/2 &&
  car2.y - wall2.y <= car2.height/2 + wall2.height/2 &&
  wall2.y - car2.y <= wall2.height/2 + car2.height/2)
{
 car2.velocityX = 0;

  0.5*weight2*weight2*speed2/22500;

  if(0.5*weight2*weight2*speed2/22500 >= 180)
  {
    fill(rgb("rgb(66, 239, 245"));
    text("State = Lethal,Rate = C+",400,480);
    wall2.shapeColor = rgb(255, 0, 0);
  } 
  if(0.5*weight2*weight2*speed2/22500 >= 80 && 0.5*weight2*weight2*speed2/22500 <= 179)
  {
    fill(rgb("rgb(66, 239, 245"));
    text("State = Average, Rate = B+",400,480);
    wall2.shapeColor = rgb(230, 230, 0);
  }
  if(0.5*weight2*weight2*speed2/22500 < 80)
  {
    fill(rgb("rgb(66, 239, 245"));
    text("State = Good, Rate = A+",400,480);
    wall2.shapeColor = rgb(0, 255, 0);
  }
}
else
{
car2.velocityX = 5;
}


}
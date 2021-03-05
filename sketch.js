const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() 
{
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(390,305,240,20);

  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  block16 = new Block(390,155,30,40);

  ground2 = new Ground(690,225,180,20);

  block17 = new Block(630,195,30,40);
  block18 = new Block(660,195,30,40);
  block19 = new Block(690,195,30,40);
  block20 = new Block(720,195,30,40);
  block21 = new Block(750,195,30,40);

  block22 = new Block(660,155,30,40);
  block23 = new Block(690,155,30,40);
  block24 = new Block(720,155,30,40);

  block25 = new Block(690,115,30,40);

  polygon = new Polygon(75,200,25);

  slingshot = new Slingshot(polygon.body,{x:100,y:200});
}

function draw() 
{
  background(255,255,255); 


  Engine.update(engine);
  
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  ground2.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  slingshot.display();

  polygon.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(polygon.body, {x: 100 , y: 200});

     slingshot.attach(polygon.body);
  }
}
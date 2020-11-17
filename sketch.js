const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var engine, world,ground,box1,box2

function preload(){
  bgImg=loadImage("bg.png")
}

function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box (700,320,70,70);
  box2=new Box (920,320,70,70);
  pig1= new Pig (810,320)
  ground=new Ground (600,390,1200,20);
  log1= new Log (810,260,300,PI/2)
  box3= new Box (700,240,70,70);
  box4= new Box (920,240,70,70);
  pig2= new Pig (810,240);
  log2= new Log (810,180,300,PI/2);
  box5= new Box (810,160,70,70);
  log3= new Log (760,120,120,PI/7);
  log4= new Log (870,120,120,-PI/7);
  bird= new Bird (100,100)
}


function draw() {
  background(bgImg); 
  Engine.update(engine); 

  box1.display()
  box2.display()
  ground.display()
  pig1.display()
  log1.display()
  box3.display()
  pig2.display()
  log2.display()
  box4.display()
  box5.display()
  log4.display()
  log3.display()
  bird.display()
}
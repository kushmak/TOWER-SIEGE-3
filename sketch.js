const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var stand
var block8,block9,block10,block11,block12,block13,block14,block15,block16
var ground

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
ground= new Ground(width/2,height,width,20)

block8= new Box(330,235,30,40);
block9= new Box (360,235,30,40);
block10= new Box(390,235,30,40);
block11= new Box (420,235,30,40);
block12= new Box (450,235,30,40);
block13= new Box (360,195,30,40);
block14= new Box (390,195,30,40);
block15= new Box (420,195,30,40);
block16= new Box (390,155,30,40);
polygon=Bodies.circle(50,200,20);
World.add(world,polygon);

imageMode(CENTER)
image(polygon_image,polygon.position.x,polygon.position.y,40,40);
slingshot = new SlingShot(polygon ,{x:100,y:200});



function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
block15.display();
block16.display();
slingshot.display();
  drawSprites();
}}
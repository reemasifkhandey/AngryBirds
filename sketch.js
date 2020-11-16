const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
var engine,world,ground,Box1,Box2;
function setup(){ 
createCanvas(400,400);
engine = Engine.create();
world = engine.world; 
ground = new Ground(200,390,400,20);
Box1 = new Box(200,300,50,50);
Box2 = new Box(240,100,50,50);
} 
function draw(){
background("black"); 
Engine.update(engine); 
ground.display();
Box1.display();
Box2.display();
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3, ground;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Dustbin(625,625,10,100);
	box2 = new Dustbin(740,625,10,100);
	box3 = new Dustbin1(685,675,120,10);
	ground = new Ground(400,700,800,50)
	paper = new Paper(100,50,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(90)
  
  ground.display()
  paper.display()
  box1.display()
  box2.display()
  box3.display()
  drawSprites();
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200})

	}



}



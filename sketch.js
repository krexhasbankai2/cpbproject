
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
	restitution:0.3,
	density:1.2


	}
	ball=Bodies.circle(400,300,20,ball_options)
	World.add(world,ball)
	Engine.run(engine);
	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 groundObj.display();
}


function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(body, position, force)
	}
}

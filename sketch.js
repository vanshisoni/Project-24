
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bin1 = new Bin(600,680,200,20);
	bin2 = new Bin(500,630,20,100);
	bin3 = new Bin(700,630,20,100);

	ball = new Ball(200,400,20);

	ground = new Ground(400,700,800,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	bin1.display();
	bin2.display();
	bin3.display();

	ball.display();

	ground.display();




  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:12,y:-12});
	}
}



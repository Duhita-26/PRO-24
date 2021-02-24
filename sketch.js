
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;

var stone;
var iron;

var sand1;
var sand2;
var sand3;
var sand4;
var sand5;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(100, 100)
  ground = new Ground(600, height, 1200, 30);

  stone = new Stone(700,320,70,70);
  iron = new Iron(600,220,80,80);

sand1 = new Sand(505,450,10);
sand2 = new Sand(510,450,10);
sand3 = new Sand(515,450,10);
sand4 = new Sand(520,450,10);
sand5 = new Sand(525,450,10);

rubber = new Rubber(900, 450, 70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("LIGHTBLUE");
  
  hammer.display();
  ground.display();

  stone.display();
  iron.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();

  rubber.display();

  drawSprites();
 
}




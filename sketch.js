const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var Paper, floor, leftBin, bottomBin, rightBin;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

Paper = new paper(100,600,17);
floor = new ground(400,680,800,40);
leftBin=new bin(550,620,20,100);
bottomBin=new bin(610,660,100,20);
rightBin=new bin(670,620,20,100);
    
	Engine.run(engine);
}



function draw() {
rectMode(CENTER);

background(0);

Engine.update(engine);

Paper.display();
floor.display();
leftBin.display();
rightBin.display();
bottomBin.display();

}

function KeyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85,y:-85});	
	}
};



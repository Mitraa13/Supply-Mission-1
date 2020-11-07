
var HelicopterImg,PckgImg,HelicopterSprite,PckgSprite;
var PackageBody , GroundBody , Ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	HelicopterImg=loadImage("helicopter.png");
	PckgImg=loadImage("package.png");
}

function setup(){
	createCanvas(1350,650);

	rectMode(CENTER);

	PckgSprite=createSprite(width/2,80,10,10);
	PckgSprite.addImage(PckgImg);
	PckgSprite.scale=0.2;
	PckgSprite.visible=false;

	HelicopterSprite=createSprite(0,200,10,10);
	HelicopterSprite.addImage(HelicopterImg);
	HelicopterSprite.scale=0.6;
	HelicopterSprite.velocityX=5;

	Ground=createSprite(width/2,600,width,100);
	Ground.shapeColor="Green";

	engine=Engine.create();
	world=engine.world;

	PackageBody=Bodies.circle(width/2,200,5,{restitution:0.6 , isStatic:true});
	World.add(world,PackageBody);

	GroundBody=Bodies.rectangle(width/2,550,width,50,{isStatic:true});
	World.add(world,GroundBody);

	Engine.run(engine);

}

function draw(){

	rectMode(CENTER);

	background("Lightblue");

	PckgSprite.x=PackageBody.position.x;
	PckgSprite.y=PackageBody.position.y;

	if(HelicopterSprite.x===width/2){
		HelicopterSprite.velocityX=0;
	}

	fill("White");
	stroke("White");
	textSize(20);
	text("Press 'Down Key' to Drop the Package after the Helicopter Stops",200,100);

	drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW && HelicopterSprite.x===width/2) {
	Matter.Body.setStatic(PackageBody, false);	
	PckgSprite.visible=true;
	HelicopterSprite.velocityX=5;   
  }
}
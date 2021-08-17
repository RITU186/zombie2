const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge;
var stones=[];
var base;
var jointLink;

function preload(){
  zombie1 = loadImage('zombie1.png')
  zombie2=loadImage('zombie2.png')
  zombie3=loadImage('zombie3.png')
  zombie4=loadImage('zombie4.png')
backgroundImage=loadImage('background.png')
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  zombie=createSprite(width/2,height-110)
  zombie.addAnimation("lefttoright",zombie1,zombie2,zombie1)
  zombie.addAnimation('righttoleft',zombie3,zombie4,zombie3)
  zombie.scale=0.1
zombie.velocityX=10

breakButton=createButton("")
breakButton.position(width-200,height/2 -50)
breakButton.class('breakButton')
breakButton.mousePressed(handleButtonPressed);

  
  Matter.Composite.add(bridge.Bodies,jointPoint);
  jointLink=new Link(bridge,jointPoint)

  bridge=new bridge(6,{x:245,y:30});
base=new Base(200,200)
}

function draw() {
  background(51);
  drawSprites();
  Engine.update(engine);
  for(var i=0; i<=8; i++){
    var x=random(width/2-200,width/2+300);
    var y=random(-10,140);
    var stones=new Stones(x,y,80,80)
    stones.push(stones)
  }

}

function handleButtonPressed(){
  jointLink.detach();
  setTimeout(()=>{
    bridge.break();
  },1500)
}




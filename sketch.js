const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function preload(){
  
}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background("grey");
  Engine.update(engine);

  
  
  
}



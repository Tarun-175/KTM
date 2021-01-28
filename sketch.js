const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(900, 400);
  
engine=Engine.create();
World=engine.world();

ground=new Ground(200,400,600,5);
superhero=new Superhero(400,3,100,100);
attach=new Throw(superhero.body,{x:100,y:465});
block1=new Block();
block2=new Block();
block3=new Block();
block4=new Block();
block5=new Block();
block6=new Block();
block7=new Block();
block8=new Block();
block9=new Block();
block10=new Block();
block11=new Block();
block12=new Block();
block13=new Block();
block14=new Block();
monster=new Monstter();

Engine=run(engine);

}

function draw() {
  background(0);
  rectMode(CENTER);

  superhero.display();
  ground.display();
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  monster.display();



}
function mouseDragged(){
  Matter.Body.setPosition(superhero.body  ,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  attach.fly();
}


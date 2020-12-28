const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box17,box18,box19,box20,box21;
var SlingShot;
var Poly;
var Ground1,Ground2,Ground3;
var score = 0;


function preload(){

}

function setup(){
var canvas = createCanvas(1365,829);

engine = Engine.create();
world = engine.world;

Ground1 = new Ground(750, 800, 1500, 20);
Ground2 = new Ground(1100,300,250,20);
Ground3 = new Ground(750,550,300,20);

box1 = new Box(640,510,50,50);
box2 = new Box(695,510,50,50);
box3 = new Box(750,510,50,50);
box4 = new Box(805,510,50,50);
box5 = new Box(860,510,50,50);
box6 = new Box(830,460,50,50);
box7 = new Box(775,460,50,50);
box8 = new Box(720,460,50,50);
box9 = new Box(665,460,50,50);
box10 = new Box(695,405,50,50);
box11 = new Box(750,405,50,50);
box12 = new Box(805,405,50,50)
box13 = new Box(775,350,50,50);
box14 = new Box(720,350,50,50);
box15 = new Box(750,295,50,50);

box16 = new Box(1035,250,50,50);
box17 = new Box(1090,250,50,50);
box18 = new Box(1145,250,50,50);
box19 = new Box(1065,200,50,50);
box20 = new Box(1120,200,50,50);
box21 = new Box(1090,150,50,50);

Poly = new Polygon(500,400,90);

SlingShot = new Sling(Poly.body, { x: 200, y: 250 })

}

function draw(){
  background("azure")



Engine.update(engine);

textSize(30);
fill("lightyellow");
text("Score : " + score,750,200);

box1.display();
box1.score();
box2.display();
box2.score();
box3.display();
box3.score();
box4.display();
box4.score();
box5.display();
box5.score();
box6.display();
box6.score();
box7.display();
box7.score();
box8.display();
box8.score();
box9.display();
box9.score();
box10.display();
box10.score();
box11.display();
box11.score();
box12.display();
box12.score();
box13.display();
box13.score();
box14.display();
box14.score();
box15.display();
box15.score();
box16.display();
box16.score();
box17.display();
box17.score();
box18.display();
box18.score();
box19.display();
box19.score();
box20.display();
box20.score();
box21.display();
box2.score();
SlingShot.display();
Poly.display();
Ground1.display();
Ground2.display();
Ground3.display();
}

function mouseDragged() {
    Matter.Body.setPosition(Poly.body, { x: mouseX, y: mouseY })
  }
  
  
  function mouseReleased() {
    SlingShot.fly();
  }

  function keyPressed(){
    if(keyCode===32){
    Matter.Body.setPosition(poly.body,{x:500,y:40});
    sling.Launch(poly.body);
    }
    }

   

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
//row1
    box1 = new Box(700,380,70,70);
    box2 = new Box(900,380,70,70);
    pig1 = new Pig(800,380)
    log1 = new Log(800,320,300,PI)
//row2
   box3 = new Box(700,280,70,70);
   box4 = new Box(900,280,70,70);
   pig2 = new Pig(800,280)
   log2 = new Log(800,220,300,PI);
//row3
   box5 = new Box(750,175,70,70);
    ground = new Ground(600,height,1200,20)
    log3 = new Log(730,180,160,-PI/4);
    log4 = new Log(850,180,150,PI/4);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    ground.display();
}
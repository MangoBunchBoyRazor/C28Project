const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, gameState = "start";
var paper, dustbin, chain, ground;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    paper = new Paper(100,100);
    chain = new Chain(paper.body,{x:250,y:150});
    dustbin = new Dustbin(800,height-125,200);
}
function draw(){
    textAlign(CENTER);
    textSize(20);
    background(100);
    Engine.update(engine);
    strokeWeight(4);
 
    paper.display();
    chain.display();
    ground.display();   
    dustbin.display();

    if(paper.toDrag)
        Body.setPosition(paper.body, {x: mouseX, y: mouseY});

    if(gameState === "start"){
        push();
        fill(255,0,0);
        text("Drag the paper ball and throw in into the dustbin",width/2,100);
        pop();
    }
    if(gameState === "end"){
        push();
        if(paper.body.position.x < dustbin.body.position.x){
            fill(255,0,0);
            text("Didn't reach the dustbin.",width/2,100);
            fill(0,0,0);
            textSize(15);
            text("Try pulling it further or try changing the angle",width/2,125);
        }
        else if(paper.body.position.x > dustbin.body2.position.x){
            fill(255,0,0);
            text("Went too far",width/2,100);
            fill(0,0,0);
            textSize(15);
            text("Try pulling it lesser or try changing the angle",width/2,125);
        }
        else{
            fill(0,255,0);
            textSize(20);
            text("You did it. You can try again",width/2,100);
        }
        fill(0,0,0);
        text("Press r to restart",250,100);
        pop();
    }
    if(gameState != "start" && paper.body.position.y > 300)
        gameState = "end";
}
function mouseDragged(){
    paper.toDrag = true;
    gameState = 'drag';
}
function mouseReleased(){
    paper.toDrag = false;
    chain.release();
}
function keyPressed(){
    if(key === "r")
        gameState = "start";
        Body.setPosition(paper.body, {x: 100, y: 100});
        chain.chain.bodyA = paper.body;
}
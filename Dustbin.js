class Dustbin{
    constructor(x,y,size){
        let options = {
            restitution:0,
            isStatic:true
        };
        this.body = Bodies.rectangle(x-size/2,y,10,size,options);
        this.body2 = Bodies.rectangle(x+size/2,y,10,size,options);
        this.body3 = Bodies.rectangle(x,y+size/2,size,10,options);
        World.add(world,[this.body,this.body2,this.body3]);
        this.image = loadImage("sprites/dustbingreen.png");
        this.xPos = x;
        this.yPos = y;
        this.size = size;
    }
    display(){
        let pos = this.body.position;
        push();
        translate(this.xPos,this.yPos);
        imageMode(CENTER);
        image(this.image,0,0,this.size + this.size/4,this.size + this.size/4 - 20);
        pop();
    }
}
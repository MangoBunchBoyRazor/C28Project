class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            bodyB: null,
            pointB: pointB,
            stiffness: 0.02,
            length: 20
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    release(){
        this.chain.bodyA = null;
    }
}
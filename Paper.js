class Paper extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.xPos = x;
    this.yPos = y;
    this.toDrag = false;
    this.image = loadImage("sprites/paper.png");
  }

  display() {
    super.display();
  }
}
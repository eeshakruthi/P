class bin {
    constructor(x,y,width,height)   {
        this.x=x;
        this.y=y;
        this.binWidth=200;
        this.binHeight=100;
        this.wallThickness=20;
        this.angle=0;
    this.bottomBinbody = Bodies.rectangle(this.x,this.y,this.binWidth,this.binHeight,{isStatic: true});
    this.leftBinbody = Bodies.rectangle(x,y,width,height);
    this.rightBinbody = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}
display()   {
       rectMode(CENTER);
      fill(255);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
};
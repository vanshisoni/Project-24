class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.6,
            friction:0.2,
            density:0.3
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius);
        
    }
}
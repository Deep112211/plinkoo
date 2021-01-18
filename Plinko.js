class Plinko{
    constructor(x, y, radius){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            dencity:1.2
        }

        this.body = Bodies.circle(x, y, radius, options);

        this.radius = radius;

        this.x = x;
        this.y = y;
        
        World.add(world, this.body);

        
    }

    display() {
        push();
        fill("black");
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}
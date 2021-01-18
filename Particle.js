class Particle{
    constructor(x, y, radius){
        var options={
            restitution:0.3
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.color = color(random(0, 225), random(0, 225), random(0, 225));

        this.radius = radius;

        this.x = x;
        this.y = y;
        
        World.add(world, this.body);

        
    }

    display() {
        var angle = this.body.angle;
        push();
        fill(this.color);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}
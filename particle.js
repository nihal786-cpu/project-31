class particle {
    constructor(x, y) {
        this.color=color(random(0,255),random(0,255),random(0,255))
        var options = {
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
}
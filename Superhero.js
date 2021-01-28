class Superhero{
    constructor(x,y,width,height){
        var options = {
            restitution: 0,
            density : 1.2,
            friction: 1.0,
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
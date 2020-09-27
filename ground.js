class Ground{
    constructor(x,y,width,height){
        var option= {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var p = this.body.position;
        push();
        rectMode(CENTER);
        fill("blue");
        rect(p.x,p.y,this.width,this.height);
        pop();
    }
}
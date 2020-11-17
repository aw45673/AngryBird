class BaseClass{
    constructor(x,y,width,height,angle){
        var box_options={
             restitution:0.5,
             friction:1,
             density:1
          }
          this.body=Bodies.rectangle(x,y,width,height,box_options);
          this.width=width;
          this.height=height;
          this.image=loadImage("base.png")
          World.add(world,this.body);
    }
    display(){

        var angle=this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}
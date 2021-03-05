class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
      }
      display(){

        if(this.body.speed<3)
        {
          if(this.Visiblity===255)
          {
            push();
            fill("cyan");
            translate(this.body.position.x, this.body.position.y);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
           }
          else
          {
            push();
            fill("cyan");
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
          }
        }
        else
        {
          World.remove(world, this.body);
          push();
          fill("cyan");
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          rect(this.body.position.x, this.body.position.y, this.width, this.height);
          pop();
         }
       }
 }
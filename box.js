class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.2,
          'isStatic': false
      }
      this.body1 = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     // this.Visibility = 255;
      
      World.add(world, this.body1);
    }
    display(){
      var pos =this.body1.position;
      var angle = this.body1.angle;
     
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        fill("violet");
        rect(0, 0, this.width, this.height);
        pop();
      
        
      
    }

}
class Log {
    constructor(x, y, width, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          'angle'  : angle
      }
      this.body = Bodies.rectangle(x, y, width, 10, options);
      this.width = width;
      this.height = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  
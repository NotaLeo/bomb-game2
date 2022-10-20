class Boat {
  constructor(x, y, width, height, boatPos, boatAnimation) {
    var options = {
      restitution : 8.0,
      friction : 1.0,
      density : 1.0
    }

    this.animation = boatAnimation;
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width;
    this.height = height;
    this.boatPosition = boatPos;
    this.image = loadImage("./assets/boat.png");
    
    World.add(world, this.body);
  }

  animate () {
    this.speed +=0.05;

  }
 remove (index){
  this.animation=brokenBoatAnimation;
  this.speed=0.05;
  this.width=300;
  this.height=300;
  this.isBroken = true;
 
 
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 2000);
 }
 

  display() {
    var pos = this.body.position;
    var index = floor (this.speed%this.animation.length);
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.animation [index], 0, this.boatPosition, this.width, this.height);
    pop();
  }
}

class Dustbin1 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      imageMode(CENTER)
      image(this.image,685, 625, 120, 120);
      rect(pos.x, pos.y, this.width, this.height);
      //685,675,175,10
    }
  }
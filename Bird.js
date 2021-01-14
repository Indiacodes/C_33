class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");

    this.birdPath = [];
  }

  display() {
    
    if(this.body.position.x > 200 && this.body.speed >= 6){
      var pos = [this.body.position.x, this.body.position.y];
      this.birdPath.push(pos);   
    }
    //console.log(this.birdPath);

    for(var i = 0; i < this.birdPath.length; i++){
      image(this.smokeImage, this.birdPath[i][0], this.birdPath[i][1]);
    }

    super.display();
  }
}

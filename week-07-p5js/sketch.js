
var drop = []


function setup() {
  createCanvas(400, 400);
  for(var i = 0; i < 200; i++) {
    drop[i] = new Drop();
  }
}


function draw() {
  background(240);
  //head
  let c = color(255);
  strokeWeight(1)
  fill(c);
  circle(200,215,50);


  //body
  line(200,240,200,325);
  line(200,325,160,400);
  line(200,325,240,400);
  //arms
  line(200,240,165,240);
  line(200,240,240,280)
  //face
  point(191,210);
  point(209,210);
  ellipse(200,220,6.5,1.5)

  c = color('magenta');
  fill(c);
  arc(165, 175, 120, 75, PI, TWO_PI, CHORD);
  line(165,175,165,240)

  c = color(171,156,206)
  fill(c)
  strokeWeight(0)
  ellipse(100,20,150,50);
	ellipse(50,45,150,50);
	ellipse(150,45,150,50);
	ellipse(120,55,150,50);

  c = color(171,156,206)
  fill(c)
  strokeWeight(0)
  ellipse(300,20,150,50);
	ellipse(250,45,150,50);
	ellipse(350,45,150,50);
	ellipse(320,55,150,50);


    for(var i = 0; i < 200; i++) {
    drop[i].show();
    drop[i].update();

  }
  }

  function Drop() {
    this.x = random(0, width);
    this.y = random(50, -height);

    this.show = function() {
      c = color(255);
      strokeWeight(1)
      fill(c);
      ellipse(this.x, this.y, random(1, 5), random(1, 5));
    }
    this.update = function() {
      this.speed = random(1, 5);
      this.gravity = 1.05;
      this.y = this.y + this.speed*this.gravity;

      if (this.y > height) {
        this.y = random(50);
        this.gravity = 0;

  }
  }
  }

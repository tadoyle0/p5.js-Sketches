let angle = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  rotate(angle);
  for(var x = 50; x <= width; x +=50) {
    for(var y = 50; y <= height; y +=50) {
    rect(x,y,2.5,25);
    }
  }
}
function mouseMoved() {
    angle = angle + 5;
}

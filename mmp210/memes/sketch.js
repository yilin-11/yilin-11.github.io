function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rectMode(CENTER);
  strokeWeight(8);
  square(200, 200, 200, 20);
  rect(200, 255, 100, 30, 5);
  ellipseMode(CENTER);
  strokeWeight(3);
  ellipse(150, 166, 36, 36);
  ellipse(250, 166, 36, 36);
  arc(200, 96, 30, 15, PI, 2 * PI);
  line(200, 86, 120 + mouseX / 4, 30 + mouseY / 10);
  circle(120 + mouseX / 4, 30 + mouseY / 10, 15);
  triangle(185, 220, 215, 220, 200, 170);
  line(200, 240, 200, 270);
  line(175, 240, 175, 270);
  line(225, 240, 225, 270);
  quad(78, 170, 98, 160, 98, 220, 78, 210);
  quad(322, 170, 302, 160, 302, 220, 322, 210);
  strokeWeight(10);
  circle(144 + mouseX / 50, 160 + mouseY / 50, 10);
  circle(244 + mouseX / 50, 160 + mouseY / 50, 10);
}

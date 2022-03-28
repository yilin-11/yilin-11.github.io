let img;
let sound;

function preload() {
  sound = loadSound("im_your_father.mp3");
  lordvader = loadImage("lordvader.jpeg");
  father = loadImage("im_your_father.jpeg");
  // power = loadImage("power.png");
}
function setup() {
  createCanvas(565, 289);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    // if(mouseButton == RIGHT)
    image(father, 0, 0, 565, 289);
    if (mouseButton == LEFT) image(lordvader, 0, 0);
  }
  if (mouseButton == CENTER) image(father, 0, 0, 565, 289);
}

function mousePressed() {
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}

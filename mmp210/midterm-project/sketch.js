let img;
let sound;
let angle = 0;
let pageNum = 1; 
//declare a variable to hold current page number (current state)
let numPages = 4; 
//declare a variable to hold total number of pages (states)

function preload() {
  sound =loadSound('im_your_father.mp3');
  lordvader = loadImage("lordvader.jpeg");
  father = loadImage('im_your_father.jpeg');
  lightsaber = loadImage('lightsaber.jpeg');
  
  weather = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
}
function setup() {
  createCanvas(565, 289);
}

function draw() {
  textAlign(CENTER, CENTER);
  if (pageNum == 1){
    background(0);
    image(lordvader,0, 0);
  }
  else if (pageNum == 2){
    background(0);
    textSize(width/15);
    ellipse(150, 150, weather.main.temp, weather.main.temp);
    ellipse(400, 150, weather.main.humidity, weather.main.humidity);
    fill(255);
    text(weather.main.temp + " F", 130, 220);
    text(weather.main.humidity + "% humidity", 365, 220);
    text('NYC',565 /2 ,50 );
    
  }
  else if (pageNum == 3){
    background(0);
    clock();
  }
  else if (pageNum == 4){
    background(0);
    image(father,0, 0);
    
  }
  else if (pageNum == 5){
  // background(0);
  // fill(255,mouseY)
  // // translate(100, 200);
  // // rotate(-angle);
  // rotate(angle);
  // // ellipseMode(CORNER);
  // ellipse(10, mouseY, 50);
  // angle++;
  // ellipse(10, 2, 100); 
  }  
}

function mousePressed(){
  if (pageNum < numPages || sound.isPlaying()
     ){
    pageNum++;
    sound.stop();
  }
  
  //otherwise, reset to first page
  else{
    pageNum = 1;
    sound.play(2);
  }
}

function clock(){
  fill("orange");
  textSize(width/6);
  let Hour = hour();
  let min = minute();
  let secs = second().toLocaleString('en-US',{ minimumIntegerDigits: 2 })
  let noon = Hour >= 12? " PM" : " AM"
  if(min < 10)
    min = "0"+min
  Hour%=12
  text(Hour+":"+min+":"+secs+noon, width/2, height/2); 
}


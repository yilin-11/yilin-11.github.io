let img;
let sound;
let pageNum = 1; 
//declare a variable to hold current page number (current state)
let numPages = 3; 
//declare a variable to hold total number of pages (states)

function preload() {
  sound =loadSound('im_your_father.mp3');
  lordvader = loadImage("lordvader.jpeg");
  // father = loadImage('im_your_father.jpeg');
  weather = loadJSON("https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141");
}
function setup() {
  createCanvas(565, 289);
}

function draw() {
  textAlign(CENTER, CENTER);
  // if (mouseIsPressed) {
  //   // if(mouseButton == RIGHT)
  //   image(father,0, 0, 565, 289);
  // if(mouseButton == LEFT)
  //   image(lordvader,0, 0);
  // }
  // if(mouseButton == CENTER)
  //   image(father,0, 0, 565, 289);
  if (pageNum == 1){
    background(0);
    image(lordvader,0, 0);
  }
  else if (pageNum == 2){
    background(0);
    textSize(width/15);
    ellipse(150, 100, weather.main.temp, weather.main.temp);
    ellipse(400, 100, weather.main.humidity, weather.main.humidity);
    fill(255);
    text(weather.main.temp + " F", 130, 180);
    text(weather.main.humidity + "% humidity", 365, 180);
  }
  else if (pageNum == 3){
    background(0);
    clock();
  }
  else if (pageNum == 4){
    
  }
//   else if (pageNum == 5){

//   }  
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
  let secs = second()
  let noon = Hour >= 12? " PM" : " AM"
  if(min < 10)
    min = "0"+min
  Hour%=12
  text(Hour+":"+min+":"+secs+noon, width/2, height/2); 
}


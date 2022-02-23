function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(110); 
  fill(255,228,181); 
  ellipse(200,200,180,200); 
  fill(0); 
  arc(200,190,180,180,-PI*0.9,-0.2,CHORD);
  rect(210,180,40,40,5);    
  rect(150,180,40,40,5);    
  line(110,200,153,200);    
  line(247,200,290,200);    
  line(207,200,193,200);    
  fill(255,65,65);    
  triangle(215, 245, 190, 250,210,260);  
}

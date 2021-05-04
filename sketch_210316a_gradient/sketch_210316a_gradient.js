var redValue, greenValue, blueValue;
var fillColor;
function setup() {
  //how to make something that is more reactive
createCanvas(windowWidth, windowHeight);
background(120);
fill(255, 0, 0);
fillCol=0;
}


function draw() {
  //background(120);
  //fill(fillCol);
  redValue= map(mouseX, 0, width, 0, 255);
  greenValue= map(second(), 0, 59, 0, 255);
  blueValue= map(mouseY, 0, height, 0, 255);
  noStroke(0);
  fill(redValue, greenValue, blueValue);//to make the graident of colour
  circle(mouseX, mouseY, 80);
}

function mousePressed() {
  if (fillCol==120){
   stroke(0);
   fillCol=[0];
   circle(mouseX, mouseY, 80);
  }
else if (fillCol==0){ //if the fill color is black
  stroke(0);
  fillCol=[255, 0, 0]; //make it white
  circle(mouseX, mouseY, 80);
}
else {//otherwise
  fillCol=120;//make it black
  noStroke();
  circle(mouseX, mouseY, 80);
}
}
function keyPressed() {
  background(120);

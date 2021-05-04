var font1, font2, font3, spin;

function preload() {
  font1 = loadFont('data/Myfrideregular.otf');
  font2 = loadFont('data/AdobeArabic-Regular.otf');
  font3 = loadFont('data/CourierStd-Bold.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  textSize(32);
  textFont(font1); //textFont(font,32);
  textAlign(CENTER);
  angleMode(DEGREES);
  spin= 0;
}


function draw() {
  background(0, 17); //add alpha value for 'motion'
  //push(); 
  //fill(255,0,255);
  //textSize(32);
  //textFont(font1);
  //text ('Myfrideregular', width/2, height/2);
  //pop();
  
  //push();
  //textSize(mouseX/5);
  //textFont(font2);
  //text ('AdobeArabic', width/2, 100);
  //pop();
  
  push();
  translate(width/2, height/2); //place the font at the center of the page
  spin= map(mouseX, 0, width, -10, 730); //360 buat spin the whole circle
  rotate(spin);
  textSize(mouseY/4);
  textFont(font3);
  text ('CourierStd-Bold', 0, 0);
  pop();
}

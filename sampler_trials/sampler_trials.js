var font, song, mic, cnv, volume, i;
var bounds, size;
var myTextList=['ARE YOU READY?', 'KILL YOU', 'HORROR'];
var myText = 'SCARY';

function preload(){
song = loadSound('data/Lure_Of_The_Maw.mp3');
}

function setup() {
cnv= createCanvas(windowWidth,windowHeight);
song.loop();
i=0;
background(0);
mic= new p5.AudioIn();
mic.start();
cnv.mousePressed(userStartAudio);
fill(255);
textSize(80);
textFont('scary',map(volume,0,1,80,200));
textAlign(CENTER, CENTER);
points = font.textToPoints(
    myTextList[i], 0, 0, size, {
      sampleFactor: 0.75,
      simplifyThreshold: 0
    });
     cursor(CROSS);
  fill(255,127);
  noStroke();
}


function draw() {
background(0);
fill(255,255,255);
volume = mic.getLevel();
if (volume>0.7){
  if (i<myTextList.length){
    i+=1;
}
else {i=0;}
  myText=myTextList[i];
}
push();
translate(width/2,height/2);
textSize(map(volume,0,1,80,200));
//textSize(100);
textFont('scary', map(volume,0,1,80,200));
text(myText, 0, 0);
pop();

line(width/2, 0, width/2, height);

 let centerDist = dist(mouseX, mouseY, width / 2, height / 2);
  let transparency = map(centerDist, 0, width / 2, 200, 50);
  transparency = constrain(transparency, 50, 200);
  fill(255, transparency); 
  let jiggle = map(centerDist, 0, width, 1, 300);
  push();
  translate((width - abs(bounds.w)) / 2, (height + abs(bounds.h)) / 2);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    stroke(255, transparency);  
    line(p.x + jiggle * randomGaussian(), p.y + jiggle * randomGaussian(), p.x, p.y );
  }
  pop();
}

function windowResized(){
resizedCanvas(windowWidth, windowHeight);
size = 80;
textAlign(CENTER,CENTER);
 points = font.textToPoints(
    myTextList[i], 0, 0, size, {
      sampleFactor: 0.75,
      simplifyThreshold: 0
    });
}

var font, song, mic, cnv, volume, i;
var point, rand, newArtist;
var bounds, word, size;
var myTextList=['SCARY', 'FUNNY', 'COLD'];
var myText = 'SCARY';

function preload(){
font= loadFont('data/Betelgeuse.otf');
song = loadSound('data/Lure_Of_The_Maw.mp3');
}

function setup() {
cnv= createCanvas(windowWidth,windowHeight);
song.loop();
background(0);
mic= new p5.AudioIn();
mic.start();
cnv.mousePressed(userStartAudio);
size = 80;
textAlign(CENTER, CENTER);
points = font.textToPoints(
    word, 0, 0, size, {
      sampleFactor: 0.75,
      simplifyThreshold: 0
    });
     cursor(CROSS);
  fill(255,127);
  noStroke();
}


function draw() {
background(0);
fill(255);
volume = mic.getLevel();
if (volume>0.6){
  if (i<myTextList.length){
    i+=1;
}
else {i=0;}
  myText=myTextList[i];
}
push();
translate(width/2,height/2);
textSize(map(volume,0,1,80,200));
textFont(font);
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
    word, 0, 0, size, {
      sampleFactor: 0.75,
      simplifyThreshold: 0
    });
 names=[];
  bounds = font.textBounds(word, 0, 0, size);
}

class Artist{
   update() {
    rand=random(-3,3);
    if (width-50 > this.x+rand > 0){this.x +=rand;}
    rand=random(-3,3);
    if (height-14 > this.y+rand > 20){this.y +=rand;}
  }
}

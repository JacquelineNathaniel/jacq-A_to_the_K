var font, mic, cnv, micVolume, volume, i;
var points, rand, size;
var myTextList=['IN THIS WORLD...', 'YOU ARE NOT ALONE', 'BE AFRAID', 'I SEE DEAD PEOPLE'];
var myText = 'IN THIS WORLD...';

function preload(){
font= loadFont('data/Betelgeuse.otf');
song= loadSound('data/Lure_Of_The_Maw.mp3');
}

function setup() {
cnv= createCanvas(windowWidth,windowHeight);
song.loop();
song.setVolume(0.05); 
i=0;
background(0);
mic= new p5.AudioIn();
mic.start();
cnv.mousePressed(userStartAudio);
fill(255);
textSize(80);
textFont(font);
textAlign(CENTER, CENTER);
}


function draw() {
background(0);
song.setVolume(0.05);
fill(255,255,255);
micVolume = mic.getLevel();
if (volume>0.6){
  if (i<myTextList.length){
    i+=1;
}
else {i=0;}
  myText=myTextList[i];
}
points = font.textToPoints(
    myTextList[i], 0, 0, map(micVolume,0,1,70,200), {
      sampleFactor: 0.75,
      simplifyThreshold: 0
});

push();
translate(width/2,height/2);
textSize(map(micVolume,0,1,70,200));
//textSize(100);
textFont(font);
text(myText, 0, 0);
pop();

let centerDist = dist(micVolume, width / 2, height / 2);
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
  fill(255);
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  size = width/7;
  textAlign(CENTER,CENTER);
  points = font.textToPoints(
    myTextList[i], 0, 0, map(micVolume,0,1,70,200), {
      sampleFactor: 0.75,
      simplifyThreshold: 0
    });
}

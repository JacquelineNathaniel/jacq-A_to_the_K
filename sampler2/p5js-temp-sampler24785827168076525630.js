let font, mic, cnv, micVolume, i;
let points, rand;
let bounds, word, size;
let myTextList=['IN THIS WORLD...', 'YOU ARE NOT ALONE', 'BE AFRAID', 'I SEE DEAD PEOPLE'];
let myText = 'IN THIS WORLD...';

function preload(){
  font = loadFont('data/Betelgeuse.otf');
  song = loadSound('data/Lure_Of_The_Maw.mp3');
}
function setup() {
  song.loop();
  song.setVolume(0.05);
 cnv= createCanvas(windowWidth, windowHeight);
 i=0;
 mic= new p5.AudioIn();
mic.start();
cnv.mousePressed(userStartAudio);
 word = myTextList[i];
  textAlign(CENTER,CENTER);
  points = font.textToPoints(
    word, 0, 0, map(micVolume,0,1,80,1000), {
      sampleFactor: 0.75,
      simplifyThreshold: 0
    });
    
    bounds = font.textBounds(word, 0, 0, map(micVolume,0,1,80,1000));
  cursor(CROSS);
  fill(255, 127);
  noStroke();
}


function draw() {
   background(0);
  stroke(51);
    push();
  textSize(width/20);
  textFont(font);
  textAlign(CENTER,CENTER);
  fill(255);
  noStroke();
  
  micVolume = mic.getLevel();
if (micVolume>0.6){
  if (i<myTextList.length){
    i+=1;
}
else {i=0;}
  myText=myTextList[i];
}
push();
translate(width/2,height/2);
textSize(map(micVolume,0,1,80,1000));
textFont(font);
text(myText, 0, 0);
pop();
}

   pop();
  let centerDist = dist(map(micVolume,0,1,80,1000), width / 2, height / 2);
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
  
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  textAlign(CENTER,CENTER);
  points = font.textToPoints(
    word, 0, 0, map(micVolume,0,1,80,1000), {
      sampleFactor: 0.75,
      simplifyThreshold: 0
    });
names=[];
  bounds = font.textBounds(word, 0, 0, map(micVolume,0,1,80,1000)); 
}

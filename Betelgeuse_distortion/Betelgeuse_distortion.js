var font, song, mic, cnv, volume,i;
var distort, logo, starOffset;
var myTextList=['SCARY', 'FUNNY', 'COLD'];
var myText = 'SCARY';

function preload(){
font= loadFont('data/Betelgeuse.otf');
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
textFont(font);
textAlign(CENTER, CENTER);
frameRate(60);
distort = new Distort(10, 1200);
  font=random(fonts);
  size = width * 3 / 16;
  
  logo = new DistortString(distort, createVector(width / 2, height / 2), font, "SCARY", size);
  logo.setTransformPoint(PERLIN_NOISE);
  logo.setDrawingTraits(() => {
    strokeWeight(0);
    noStroke();
    fill(0);
    });
}


function draw() {
background(0);
distort.update();
  distort.render();
fill(255,255,255);
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
//textSize(100);
textFont(font);
text(myText, 0, 0);
pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  logo.setPosition(createVector(width / 2, height / 2));
}
function mousePressed(){
   starOffset = createVector(mouseX, mouseY);
  logo.setPosition(createVector(mouseX, mouseY));
}

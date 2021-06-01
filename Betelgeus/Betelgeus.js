var font, song, mic, cnv, volume, i;
var myTextList=['IN THIS WORLD...', 'YOU ARE NOT ALONE', 'ARE YOU SCARED?'];
var myText = 'IN THIS WORLD...';

function preload(){
song = loadSound('data/Lure_Of_The_Maw.mp3');
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
textFont('scary',map(volume,0,1,80,200));
textAlign(CENTER, CENTER);
}


function draw() {
background(0);
fill(150,0,0);
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
textFont('scary', map(volume,0,1,80,200));
text(myText, 0, 0);
pop();
}

  function keyPressed(){
  if (key==='s'){
    background (128, 0, 0);
    push();
    fill(0);
    textFont ('scary', 80);
    textSize (100);
    noStroke();
    textAlign(CENTER);
     text('BETELGEUS', width/2, 220);
     pop();
    push ();
    textFont ('SCARY', 80);
    textAlign (CENTER);
    textSize (70);
    fill (0);
    text ('ABCDEFGHIJKLM', width/2, 350);
    text ('NOPQRSTUVXYZ', width/2, 420);
    text ('0123456789', width/2, 490);
    text ('?!*&@:;,.', width/2, 560);
    frameRate (0);
    pop();
    
    push();
  textFont ('scary');
  textSize (30);
  fill (50);
  text('press b to go back', width/2, 700);
  pop();
}


  else if (key==='b'){
  background(0);
fill(150,0,0);
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
textFont('scary', map(volume,0,1,80,200));
text(myText, 0, 0);
pop();
}
  
  
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}
  }

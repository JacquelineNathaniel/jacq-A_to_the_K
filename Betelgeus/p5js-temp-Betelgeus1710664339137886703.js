var font, song, mic, cnv, volume, i;
var state='true';
var myTextList=['IN THIS WORLD...', 'YOU ARE NOT ALONE', 'ARE YOU SCARED?'];
var myText = 'IN THIS WORLD...';

function preload(){
  font = loadFont('data/ClearSans-Regular.ttf');
song = loadSound('data/Lure_Of_The_Maw.mp3');
}

function setup() {
cnv= createCanvas(windowWidth,windowHeight);
song.loop();
song.setVolume(0.03);
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
if (volume>0.5){
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

push();
textFont(font);
textSize(20);
text("CLICK ANYWHERE TO START AND SHOUT", width/2-20, height/12);
text("press s to see the sampler", width/2-20, height/8);
pop();
}

  function keyPressed(){
    if (key==='s'){
    background (128, 0, 0);
    push();
    fill(0);
    textFont ('scary', 80);
    noStroke();
    textAlign(CENTER);
     text('BETELGEUSE', width/2, height/4);
     pop();
    push ();
    textFont ('SCARY', 80);
    textAlign (CENTER);
    fill (0);
    text ('ABCDEFGHIJKLM', width/2, height/2+5);
    text ('NOPQRSTUVXYZ', width/2, height/2+80);
    text ('0123456789', width/2, height/2+155);
    text ('?!*&@(){}:;,.', width/2, height/2+230);
    frameRate (0);
    pop();
    
    push();
  textFont (font);
  textSize (20);
  fill (50);
  text('press b to go back', width/2, height/10);
  text('press p to see pangram', width/2, height/15);
  pop();
}


  else if (key==='b'){
  background(0);
fill(150,0,0);
volume = mic.getLevel();
if (volume>0.5){
  if (i<myTextList.length){
    i+=1;
}
else {i=0;}
  myText=myTextList[i];
  //if (state){
  //  state= false;
  //}else{
  //  state= true;
  //}
}
push();
translate(width/2,height/2);
textSize(map(volume,0,1,80,200));
textFont('scary', map(volume,0,1,80,200));
text(myText, 0, 0);
pop();

push();
textFont(font);
textSize(20);
text("REFRESH THE PAGE, CLICK ANYWHERE TO START AND SHOUT", width/2-20, height/12);
text("press s to see the sampler", width/2-20, height/8);
pop();
}
  
  if (key==='p'){
    background (128, 0, 0);
    push();
    fill(0);
    textFont ('scary', 80);
    noStroke();
    textAlign(CENTER);
    text ('GRUMPY WIZARDS', width/2, height/2-80);
    text ('MAKE A TOXIC BREW', width/2, height/2-5);
    text ('FOR THE JOVIAL QUEEN', width/2, height/2+65);
     pop();
     
     push();
  textFont (font);
  textSize (20);
  fill (50);
  text('press b to go back', width/2, height/10);
  pop();
  }
  
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}
  }

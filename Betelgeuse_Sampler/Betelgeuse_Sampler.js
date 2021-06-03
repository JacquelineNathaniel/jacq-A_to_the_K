var font, song, mic, cnv, volume, i;
var state='true';
var myTextList=['IN THIS WORLD...', 'YOU ARE NOT ALONE...', 'THERE MUST BE SOMEONE...', 'WATCHING FOR YOU...', 'LOOKING FOR YOU...', 'MONITORING YOUR ACTION...', 'YOU MUST BECAREFULL...', 'YOU MUST BE AWARE...', 'OR ELSE...', 'BETELGEUSE IS COMING'];
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
fill(255);
textSize(70);
textFont('scary',map(volume,0,1,70,200));
textAlign(CENTER, CENTER);
}

function draw() {
background(0);
fill(150,0,0);
  if (state==='scary'){
    mic= new p5.AudioIn();
    mic.start();
    cnv.mousePressed(userStartAudio);
  volume = mic.getLevel();
 if (volume>0.5){
  if (i<myTextList.length){
    i+=1;
}
else {i=0;}
  myText=myTextList[i];
}
  }
  else if (state==='pangram'){
    mic.stop();
  }
  else if (state==='sampler'){
    mic.stop();
  }
  
push();
translate(width/2,height/2);
textSize(map(volume,0,1,70,200));
textFont('scary', map(volume,0,1,70,200));
text(myText, 0, 0);
pop();

push();
fill( 128, 128, 128);
textFont(font);
textSize(15);
text("CLICK ANYWHERE TO START AND SHOUT", width/2-20, height/12);
text("press s to see the sampler", width/2-20, height/8);
pop();
}

  function keyPressed(){
    if (key==='s'){
      state='sampler';
    background (128, 0, 0);
    push();
    fill(0);
    textFont ('scary', 70);
    noStroke();
    textAlign(CENTER);
     text('BETELGEUSE', width/2, height/4);
     pop();
    push ();
    textFont ('SCARY', 70);
    textAlign (CENTER);
    fill (0);
    text ('ABCDEFGHIJKLM', width/2, height/2-20);
    text ('NOPQRSTUVXYZ', width/2, height/2+50);
    text ('0123456789', width/2, height/2+120);
    text ('?!*&@%$(){}:;,.', width/2, height/2+190);
    frameRate (0);
    pop();
    
    push();
    fill(128, 128, 128);
  textFont (font);
  textSize (15);
  fill (50);
  text('press b to go back', width/2, height/2+270);
  text('press p to see pangram', width/2, height/2+290);
  pop();
}
   
  else if (key==='b'){
    state='scary';

push();
translate(width/2,height/2);
textSize(map(volume,0,1,70,200));
textFont('scary', map(volume,0,1,70,200));
text(myText, 0, 0);
pop();

push();
textFont(font);
fill(128, 128, 128);
textSize(15);
text("REFRESH THE PAGE, CLICK ANYWHERE TO START AND SHOUT", width/2-20, height/12);
text("press s to see the sampler", width/2-20, height/8);
pop();
}
  
 if (key==='p'){
    state='pangram';
    background (128, 0, 0);
    push();
    fill(0);
    textFont ('scary', 70);
    noStroke();
    textAlign(CENTER);
    text ('GRUMPY WIZARDS', width/2, height/2-80);
    text ('MAKE A TOXIC BREW', width/2, height/2-5);
    text ('FOR THE JOVIAL QUEEN', width/2, height/2+65);
 pop();
     
push();
fill(128, 128, 128);
textFont (font);
textSize (20);
text('press b to go back', width/2, height/10);
pop();
  }
  
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}
  }

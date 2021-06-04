///BEST TO RUN IN CHROME/// 
///Interactive website works with microphone 
///Requires sound library

var font, song, mic, cnv, volume, i, start;
var state='scary'; //mic get detect
var myTextList=['IN THIS WORLD...', 'YOU ARE NOT ALONE...', 'THERE MUST BE SOMEONE...', 'WATCHING YOU...', 'LOOKING YOU...', 'MONITORING YOUR ACTION...', 'YOU MUST BECAREFULL...', 'YOU MUST BE AWARE...', 'OR ELSE...', 'BETELGEUSE IS COMING'];
var myText = 'IN THIS WORLD...';

function preload(){
font = loadFont('data/ClearSans-Regular.ttf');
song = loadSound('data/Lure_Of_The_Maw.mp3');
}

function setup() {
cnv= createCanvas(windowWidth,windowHeight);
song.setVolume(0.03);
mic= new p5.AudioIn();
    mic.start();
    cnv.mousePressed(userStartAudio);
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
//below is state when the mic get detect or not
if (state==='scary'){
    volume = mic.getLevel();
 if (volume>0.5){ //if the volume get over 0.5, the text get change
  if (i<myTextList.length){
    i+=1;
}
else {i=0;}
  myText=myTextList[i];
}
push();
translate(width/2,height/2);
textSize(map(volume,0,1,70,200));
textFont('scary', map(volume,0,1,70,200));
text(myText, 0, 0);
pop();

push();
fill( 100, 100, 100);
textFont(font);
textSize(15);
text('press p to see pangram', width/2, height/2+290);
pop();
  }
  
  else if (state==='pangram'){ //mic not get detect
background (128, 0, 0);
push();
fill(0);
textFont ('scary', 70); //load font via @fontface in CSS
noStroke();
textAlign(CENTER);
text ('GRUMPY WIZARDS', width/2, height/2-80);
text ('MAKE A TOXIC BREW', width/2, height/2-5);
text ('FOR THE JOVIAL QUEEN', width/2, height/2+65);
pop();
     
push();
fill(100, 100, 100);
textFont (font);
textSize (15);
text('press b to go back', width/2, height/2+270);
text("press s to see the sampler", width/2, height/2+290);
pop();
}

  else if (state==='sampler'){ //mic not get detect
background (128, 0, 0);
push();
fill(0);
textFont ('scary', 70);
noStroke();
textAlign(CENTER);
text('BETELGEUSE', width/2, height/5);
pop();
    
push ();
textFont ('SCARY', 70);
textAlign (CENTER);
fill (0);
text ('ABCDEFGHIJKLM', width/2, height/2-60);
text ('NOPQRSTUVXYZ', width/2, height/2+10);
text ('0123456789', width/2, height/2+80);
text ('?!*&@%$(){}:;,.', width/2, height/2+150);
pop();
    
push();
fill(100, 100, 100);
textFont (font);
textSize (15);
text('press b to go back', width/2, height/2+270);
text('press p to see pangram', width/2, height/2+290);
pop();
}

  if (!start){ //this is where I set when I click the page, the instruction will go off
push();
fill(110, 110, 110);
textFont (font);
textSize (15);
text("CLICK ANYWHERE TO START AND SHOUT", width/2-20, height/12);
pop();
  }
}

function keyPressed(){ // This works with my function draw to draw the loop of each page separately
  if (key==='b'){
    state='scary';
}
   
  else if (key==='p'){
    state='pangram';
}
  
  else if (key==='s'){
    state='sampler';
}
}
  
function mousePressed(){ // to start the song 
  song.loop();
  start='true';
}
  
function windowResized(){ 
resizeCanvas(windowWidth, windowHeight);
}

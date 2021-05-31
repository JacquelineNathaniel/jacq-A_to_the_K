var font, mic, cnv, volume,i;
var myTextList=['SCARY', 'FUNNY', 'COLD'];
var myText = 'SCARY';

function setup() {
cnv= createCanvas(windowWidth,windowHeight);
i=0;
background(0);
mic= new p5.AudioIn();
mic.start();
cnv.mousePressed(userStartAudio);
fill(255);
textSize(80);
textFont('scary', 80);
textAlign(CENTER, CENTER);
}


function draw() {
background(0);
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
textSize(map(volume,0,1,20,1000));
//textSize(100);
textFont('scary', 80);
text(myText, 0, 0);
pop();
}

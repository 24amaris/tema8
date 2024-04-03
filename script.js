let smAmarisX = 15;
let smAmarisY =50;

Caseta(smAmarisX,smAmarisY);

function setup() {
    createCanvas(800, 500);
    }
function draw() {
  
    background("rgb(221,210,210)");
    Caseta(smAmarisX, smAmarisY );
}

function Caseta(x,y) {
    fill("#F44336");
    rect(x, y, 100, 60 );
    fill("#000000");
    textSize(32); 
    text("1", x+40, y+40); 

    fill(" #E91E63");
    rect(x+110, y, 100, 60 );
    fill("#000000");
    textSize(32); 
    text("2", x+150, y+40);

    fill(" #9C27B0");
    rect(x+220, y, 100, 60 );
    fill("#000000");
    textSize(32); 
    text("3", x+260, y+40); 

    fill(" #673AB7");
    rect(x+330, y, 100, 60 );
    fill("#000000");
    textSize(32); 
    text("4", x+370, y+40);

    fill(" #3F51B5");
    rect(x+440, y, 100, 60 );
    fill("#000000");
    textSize(32); 
    text("5", x+480, y+40);

    fill(" #2196F3");
    rect(x+550, y, 100, 60 );
    fill("#000000");
    textSize(32); 
    text("6", x+590, y+40);

    fill(" #03A9F4");
    rect(x+660, y, 100, 60 );
    fill("#000000");
    textSize(32); 
    text("7", x+700, y+40);

//a doua linie
fill("#00BCD4");
rect(x, y+100, 100, 60 );
fill("#000000");
textSize(32); 
text("8", x+40, y+140); 

fill(" #009688");
rect(x+110, y+100, 100, 60 );
fill("#000000");
textSize(32); 
text("9", x+150, y+140); 

fill(" #4CAF50");
rect(x+220, y+100, 100, 60 );
fill("#000000");
textSize(32); 
text("10", x+255, y+140); 

fill(" #8BC34A");
rect(x+330, y+100, 100, 60 );
fill("#000000");
textSize(32); 
text("11", x+360, y+140); 

fill(" #CDDC39");
rect(x+440, y+100, 100, 60 );
fill("#000000");
textSize(32); 
text("12", x+470, y+140); 

fill(" #FFEB3B");
rect(x+550, y+100, 100, 60 );
fill("#000000");
textSize(32); 
text("13", x+580, y+140); 

fill(" #FFC107");
rect(x+660, y+100, 100, 60 );
fill("#000000");
textSize(32); 
text("14", x+690, y+140);









}
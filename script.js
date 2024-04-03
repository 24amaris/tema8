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


}
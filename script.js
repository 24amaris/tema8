
let smAmarisX =300;
let smAmarisY =300;

function setup() {
    createCanvas(tableWidth, tableHight);
}

function draw() {
    background("gray");
    checkLimitsSMAmaris();

    smilyFaceAmaris(smAmarisX , smAmarisY);


}

function smilyFaceAmaris(x,y){
  //body
  fill("white");
  stroke("black");
  circle(x, y, 50);

  //eyes
 // circle( 390, 295, 5);
  //circle( 410, 295, 5);
    stroke("green");
    ellipse(x-10, y-5, 10, 5);
    ellipse(x+10, y-5, 10, 5);
//eye pupils
    stroke("black");
    fill("black");
    circle( x+10, y-5, 3);
    circle( x-10, y-5, 3);
//mounth
    stroke("red");
    fill("black");
    arc(x, y+10, 20, 5, 0, Math.PI);
}



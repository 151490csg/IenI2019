var diameter= 70;

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();
 for (var n = 0;n < 5;n++) {
 tekenCirkel();
translate(70,0);

 }
 }

  function tekenCirkel() {
    fill('deepskyblue')
    ellipse(90,200,diameter)

  }

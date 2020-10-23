var randoms;
var numberOfBoxes = 5;

function setup() {
  createCanvas(400, 400);
  randoms = generateOffset();
}


function draw() {
  background(220);
  var c1 = color(155, 52, 146, 200);
  var c2 = color(193, 40, 101, 200);
  for (var x = 0; x < numberOfBoxes; x++) {
    for (var y = 0; y < numberOfBoxes; y++) {
      if (randoms.randomColor[x][y] > 0.8) {
        fill(c1);
      } else {
        fill(c2);
      }      
     	 	rect(10 + x * 75 + randoms.offSet[x][y], 10 + y * 75 + randoms.offSet[x][y], 70, 70);
    }
  }
  rect(mouseX-35, mouseY-35, 70, 70);
  
}

function generateOffset() {
  var randomNumbers = {
    offSet: [],
    randomColor: []
  }

  var offSet = [];
  for (var x = 0; x < numberOfBoxes; x++) {
    var tempOffset = [];
    var tempColor = [];
    for (var y = 0; y < numberOfBoxes; y++) {
      append(tempOffset, random(-8, 8));
      append(tempColor, random());
    }
    append(randomNumbers.offSet, tempOffset);
    append(randomNumbers.randomColor, tempColor);
  }
  return randomNumbers;
}
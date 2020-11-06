function setup() { 
	createCanvas(600, 200);
   noStroke();
   
} 
let seed = 0;
function draw() { 
   background(131, 175, 155);

      randomSeed(seed);

   for (var x=35; x < innerWidth; x+= 110){
      let scalar = random(0.25, 1.5);
      drawHappyFace(x, 100, scalar);
   }
   

}

function drawHappyFace(x, y, s){
   push();
   translate(x, y);
   scale(s);
   //Face
   fill(249,205,173);//rosy beige
   ellipse(0, 0, 100, 100);

   //Eye 1
   fill(30);//dark gray
   ellipse(0, 10, 10, 10);

   //Eye 2
   ellipse(20, 10, 10, 10);

   //Mouth
   fill(252,157,154);//light pink
   arc(0, 25, 30, 30, 0, radians(180), PIE); 
   pop();
}

function mouseClicked(){
   seed = random(1, 6); 
}


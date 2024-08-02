function setup() {
  createCanvas(1000,800);
  background("green");
}

function draw() {
 
  fill("black");
  stroke("red");
  if(mouseIsPressed)
   rect(mouseX,mouseY,50,70);
  
}

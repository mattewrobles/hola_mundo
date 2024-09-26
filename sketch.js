function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  background(80);
  rectMode(CENTER);
}

  function draw(){
    background(30, random(0, 100), 155, 10);
    strokeWeight(5);
    noFill();
    stroke(0, 120, 70)
    circle(mouseX+90, mouseY-90, mouseX);

    strokeWeight(1);
    stroke(0, 120, 70)
    fill(mouseY, 50, 80);
    rect(mouseX,mouseY,100,100);
  }

  //Tarea hacer un cursor diferente
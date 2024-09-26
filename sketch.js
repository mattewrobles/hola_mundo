function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  background(80);
  rectMode(CENTER);
}

  function draw(){
    background(random(120,100), random(0,80), 180);
    circle(mouseX+90, mouseY-90, mouseX);
    fill(0, 20, 50);
    rect(mouseX,mouseY,100,100);
    fill(mouseY, 50, 80);
  }

  //Tarea
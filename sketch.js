// function setup(){
//   createCanvas(windowWidth, windowHeight);
//   frameRate(24);
//   background(80);
//   rectMode(CENTER);
// }

//   function draw(){
//     background(30, random(0, 100), 155, 10);
//     strokeWeight(5);
//     noFill();
//     stroke(0, 120, 70)
//     circle(mouseX+90, mouseY-90, mouseX);

//     strokeWeight(1);
//     stroke(0, 120, 70)
//     fill(mouseY, 50, 80);
//     rect(mouseX,mouseY,100,100);
//   }

//Tarea hacer un cursor diferente
  function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(64, 103, 158, 100);
    noCursor();
    // Posición del cerdo siguiendo el mouse
    let x = mouseX;
    let y = mouseY;

    Text = "Porky";
    TextSize = 25;
    fill(random(255));
    textSize(TextSize);
    text(Text, x-30, y-150);
    noStroke();
    
    // Patas
    fill(255, 192, 203);
    rect(x - 40, y + 40, 10, 40); // pata izquierda delantera
    rect(x + 30, y + 40, 10, 40); // pata derecha delantera
    fill(102, 63, 63)
    rect(x - 40, y + 60, 10, 30); // pata izquierda abajo
    rect(x + 30, y + 60, 10, 30); // pata derecha abajo

    // Orejas
    fill(255, 192, 203);
    triangle(x - 40, y - 130, x - 20, y - 90, x - 40, y - 80); // oreja izquierda
    triangle(x + 40, y - 130, x + 20, y - 90, x + 40, y - 80); // oreja derecha

    // Cuerpo del cerdo
    fill(255, 192, 203);
    ellipse(x, y, 150, 100); // cuerpo
    ellipse(x, y - 80, 80, 80); // cabeza

    // Ojos
    fill(0);
    ellipse(x - 20, y - 90, 12, 12); // ojo izquierdo
    ellipse(x + 20, y - 90, 12, 12); // ojo derecho

    // Nariz
    fill(255, 105, 180);
    ellipse(x, y - 70, 20, 15); // nariz
    fill(0);
    ellipse(x - 5, y - 70, 5, 5); // agujero izquierdo
    ellipse(x + 5, y - 70, 5, 5); // agujero derecho
}
import processing.opengl.*;

float inc = 0;
int rotX = 0;
int rotY = 0;

void setup() {
  noStroke();
  smooth();
  size(600,600,OPENGL);


}

void draw() {
  background(0);  
  lights();
  inc=0.01;
  pushMatrix();
  translate(mouseX,mouseY);
  if (mousePressed) {
    rotateX(mouseX*inc);
    rotateY(mouseY*inc);
  }
  fill(200,100,100);

  box(150);
  popMatrix();

}



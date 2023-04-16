function setup() {
    createCanvas(640, 480);
  }
  
  function draw() {
    background(220, 0, 135);
    
    beginShape();
    vertex(150,50);
    vertex(200,150);
    vertex(200,100);
    vertex(75,50);
    vertex(50,25);
    vertex(150, 30)
    endShape();
  }
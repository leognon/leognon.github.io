let offset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225);
  beginShape();
  noFill();
  stroke(0);
  strokeWeight(2);
  translate(0, height * 0.75);
  const spacing = 50;
  for (let i = 0; i < width + spacing; i += spacing) {
    let yPos = sin((i + offset) / 100);
    vertex(i, yPos * 100);
  }
  endShape();

  offset += 3;
}


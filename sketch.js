let offset = 0;

function setup() {
  let height = max(windowHeight, document.body.scrollHeight);
  createCanvas(windowWidth, height).position(0, 0);
}

function windowResized() {
  let height = max(windowHeight, document.body.scrollHeight);
  resizeCanvas(windowWidth, height);
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


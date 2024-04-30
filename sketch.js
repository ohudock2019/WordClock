



/* var canvas;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    background(255);
    noStroke();
    fill(255,0,0);
    rect(200,200, width - 400, height -400)

}

function draw() {

}
*/

//https://www.openprocessing.org/sketch/157576

let particles = [];
const num = 10000;

const noiseScale = .01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height)));
  }
  /* r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200,255); // a is a random number between 200 - 255
  stroke(r, g, b, a); */
  stroke(210, 85, 17, 80);
  strokeWeight(2.5);
  // For a cool effect try uncommenting this line
  // And comment out the background() line in draw
  blur(20);
  clear();
}

function draw() {
background(0, 10);
  for(let i = 0; i < num; i ++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseReleased() {
  noiseSeed(millis());
  /* r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200,255); // a is a random number between 200 - 255
  stroke(r, g, b, a) */
  stroke();
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
let noiseMax = 2;
let slider;
let phase = 0; //random starting location in circle
function setup(){
var cnv = createCanvas(600,400);
var x = (windowWidth - width) / 2;
var y = (windowHeight - height) / 2;
cnv.position(x, y);
var s = slider = createSlider(0.1, 10, 0);
var x = (windowWidth - width) / 2;
s.position(x, y);

}

function draw(){
background('#112F41');
translate(width/2, height/2);
let items = Array('#ED553B', '#F2B134','#47AB6C','#0894A1');
var item = items[Math.floor(Math.random()*items.length)];

stroke(item);
strokeWeight(4);

noFill();
// let t = 0;
beginShape();
noiseMax = slider.value();
//a = delta angle
for (let a = 0; a < (TWO_PI); a+=0.2) {
  // let r =  random(50,100); //random radius
  // let r = noise(t) * 100; //add perlin noises
  // let r = noise(t) * 100;
  let x_offset = map(cos(a + phase), -1, 1, 0, noiseMax);
  let y_offset = map(sin(a), -1, 1, 0, noiseMax);
  let r = map(noise(x_offset, y_offset), 0, 1, 100, 200); //end doesnt match with start loop
  let x = r * cos(a);
  let y = r * sin(a);
  vertex(x,y);
  // t += 0.01;
  // t += 0.1;
}
endShape(CLOSE);
// noLoop(); // no loop so the start and end connect
phase += 0.2; //speed
}
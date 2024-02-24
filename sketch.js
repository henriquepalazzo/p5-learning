function setup() {
  createCanvas(1100, 800);
  background(0);
  let palette = [
    color(0),
    color(255),
    color(7, 33, 95),
    color(61, 109, 147),
    color(81, 53, 26),
    color(115, 192, 171),
    color(143, 120, 89),
    color(163, 219, 255),
    color(175, 17, 34),
    color(197, 133, 187),
    color(228, 188, 101),
    color(236, 76, 91),
    color(243, 241, 194),
  ];
  let w = 100;
  for (let x = 0; x < width; x += w) {
    for (let y = 0; y < height; y += w) {
      noStroke();
      fill(random(palette));
      square(x, y, w);
    }
  }
  for (let x = 0; x < width; x += w) {
    for (let y = 0; y < height; y += w) {
      noStroke();
      // stroke(random(palette));
      // strokeWeight(w / 2);
      // strokeCap(SQUARE);
      fill(random(palette));
      push();
      translate(x + w / 2, y + w / 2);
      let offset = int(random(4));
      rotate((offset * PI) / 2);
      arc(-w / 2, -w / 2, w * 2, w * 2, 0, PI / 2);
      pop();
    }
  }
}

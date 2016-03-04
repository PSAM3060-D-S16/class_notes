function setup() {
	createCanvas(640, 640);
}

function draw() {
	background(0);
	fill(255);
	noStroke();

	for (var x = 0; x < width; x++) {

		var y = x % 100;

		y = height * 0.5 - y;
		rect(x, y, 1, 1);
	}
	
	fill(frameCount % 128 * 2);
	rect(10, 10, 100, 100);
}

function setup() {
	createCanvas(640, 640);
}

function draw() {
	background(0);
	fill(255);
	noStroke();

	for (var x = 0; x < width; x++) {
		var amplitude = 100;
		var period = 640;
		var phase = PI;
		
		var y = sin((x / period * 2 * PI) + phase) * amplitude;

		y += height * 0.5;
		rect(x, y, 1, 1);
	}

	fill(sin(frameCount / 30) * 128 + 128);
	rect(10, 10, 100, 100);
}

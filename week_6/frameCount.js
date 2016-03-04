// uses frameCount to demonstrate prerendered timekeeping

var c;
var oldTime = 0;

function setup() {
	createCanvas(640, 640);
	c = color(random(255), random(255), random(255));
	frameRate(10);
}

function draw() {
	background(c);
	var newTime = floor(frameCount / 10);
	if (newTime !== oldTime) {
		oldTime = newTime;
		c = color(random(255), random(255), random(255));
	}
}

// a simple p5 sketch that draws an image

var img;

// images must be loaded before they can be used
// use the preload() function to load your images and p5 will make sure they
// are loaded before setup() and draw() are called
// note that in your sketches, your load image probably won't require a path.
// you will use something like loadImage("shell.jpg")

function preload() {
 	img = loadImage("week_3/muybridge.jpg");
}

function setup() {
	createCanvas(480, 480);
	imageMode(CENTER);
}

function draw() {
	background(125, 125, 125);
	image(img, mouseX, mouseY);
}

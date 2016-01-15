function setup() {
	createCanvas(windowWidth, windowHeight);
	fill(222);
	noStroke();
}

function draw() {
	background(255, 255, 255, 255);

	translate(mouseX, mouseY);
	dX = windowWidth * 0.5 - mouseX;
	dY = windowHeight * 0.5 - mouseY;	
	rotate(atan2(dY, dX) + PI * 0.5);
	rect(-2000, 0, 4000, 4000);
}



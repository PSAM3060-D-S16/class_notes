function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
    
    // draw a ball
    // commenting out the next line stops drawing of the ball
    // but also changes how the rectangle is drawn
    drawBall(100, 100);
    
    // draw a rectangle
    fill(128, 128, 128);
    stroke(0, 0, 0);
    rect(80, 140, 40, 40);
}

function drawBall(x, y){
    //push();
    fill(255, 0, 0);
    stroke(0, 0, 255);
    strokeWeight(5);
    ellipse(x, y, 40, 40);
    //pop();
}


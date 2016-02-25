function setup() {
	createCanvas(windowWidth, windowHeight);
	fill(222);
	noStroke();
	noLoop();

	background(255);
	$(window).scroll(function(event) {
		var s = $(window).scrollTop();
		drawScroll(s);
	});
	drawScroll(0);
}

function draw() {

	//background(255, 255, 255, 255);



	// translate(mouseX, mouseY);
	// dX = windowWidth * 0.5 - mouseX;
	// dY = windowHeight * 0.5 - mouseY;	
	// rotate(atan2(dY, dX) + PI * 0.5);
	// rect(-2000, 0, 4000, 4000);
}

var colors = {
	green: "#00C94F",
	blue: "#0079FF",
	pink: "#C30053",
	green: "#4ECA00",
	drab: "#556655"

};

function drawScroll(s) {
	console.log("scroll", s);
	background(100);
	


	itemSize = 100;


	if (s < 800) {
		//intro
		background(colors.green);
		fill(colors.pink);
		itemSize = map(s, 0, 800, 0, 1);
		drawPattern(itemSize);
	}


	else if (s < 6224) {
		//intro
		background(colors.pink);
		fill(colors.blue);
		itemSize = map(s, 6224 - 1000, 6224, 0, 1);
		drawPattern(itemSize);
	}

	else if (s < 28217) {
		// interaction designer
		background(colors.blue);
		fill(colors.pink);

		itemSize = map(s, 28217 - 1000, 28217, 0, 1);
		drawPattern(itemSize);
	}

	else if (s < 39538) {
		//creative coder

		background(colors.pink);
		fill(colors.green);

		itemSize = map(s, 39538 - 1000, 39538, 0, 1);
		drawPattern(itemSize);
	}

	else if (s < 51851) {
		//teacher

		background(colors.green);
		fill(colors.drab);

		itemSize = map(s, 51851 - 1000, 51851, 0, 1);
		drawPattern(itemSize);
	}
	else {
		background(colors.drab);
		
	}



}


function drawPattern(itemSize) {
	var gridSize = 100;
	itemSize = constrain(itemSize, 0, 1);
	itemSize *= 115;

	var row = 0;
	for (var y = 0; y < height + gridSize; y += gridSize * 0.85) {
		row ++;
		for (var x = 0; x < width + gridSize; x += gridSize) {
			var offset = 0;
			if (row % 2 === 0) {
				offset = gridSize * 0.5;
			}
			ellipse(x + offset, y, itemSize, itemSize);
		}
	}
}

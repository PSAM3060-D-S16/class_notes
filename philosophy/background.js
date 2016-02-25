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
	
	var intro = $("#intro").offset().top;
	var interaction_designer = $("#interaction-designer").offset().top;
	var creative_coder = $("#creative-coder").offset().top;
	var teacher = $("#teacher").offset().top;
	var teaching_philosophy = $("#teaching-philosophy").offset().top;


	itemSize = 100;


	if (s < intro) {
		background(colors.green);
		fill(colors.pink);
		itemSize = map(s, 0, intro, 0, 1);
		drawPattern(itemSize);
	}


	else if (s < interaction_designer) {
		background(colors.pink);
		fill(colors.blue);
		itemSize = map(s, interaction_designer - 1000, interaction_designer, 0, 1);
		drawPattern(itemSize);
	}

	else if (s < creative_coder) {
		background(colors.blue);
		fill(colors.pink);
		itemSize = map(s, creative_coder - 1000, creative_coder, 0, 1);
		drawPattern(itemSize);
	}

	else if (s < teacher) {
		background(colors.pink);
		fill(colors.green);
		itemSize = map(s, teacher - 1000, teacher, 0, 1);
		drawPattern(itemSize);
	}

	else if (s < teaching_philosophy) {
		background(colors.green);
		fill(colors.drab);
		itemSize = map(s, teaching_philosophy - 1000, teaching_philosophy, 0, 1);
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

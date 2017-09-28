// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 550;
canvas.height = 550;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};

bgImage.src = "img/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "img/linux.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "img/bad-bug.png";

// Game objects
var hero = {
	speed: 5 // movement in pixels per second
};
var monster = {};
var bugsCaught = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
var update = function (modifier) {
	modifier = 1;
		if (75 in keysDown) { // Player holding up
			hero.y -= hero.speed;
			if (hero.y < 0) {
			  hero.y = 0;
			}
		}
		if (74 in keysDown) { // Player holding down
			hero.y += hero.speed;
			if (hero.y > 520) {
				hero.y = 520;
			}
		}
		if (72 in keysDown) { // Player holding left
			hero.x -= hero.speed;
			if (hero.x < 0) {
				hero.x = 0;
			}
		}
		if (76 in keysDown) { // Player holding right
			hero.x += hero.speed;
			if (hero.x > 520) {
				hero.x = 520;
			}
		}
	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++bugsCaught;
		reset();
	}
};

// Draw everything
var render = function () {
	if (bgReady) {
		// ctx.drawImage(bgImage, 0, 0);

		const tileGraphics = [];
		const tileGraphicsToLoad = ["img/grass.jpg", "img/water.jpg"];
		tileGraphicsToLoad.forEach((img, index) => {
			tileGraphics[index] = new Image();
			tileGraphics[index].src = img;
		});
		drawMap(tileGraphics);
	}

	if (heroReady) {
		const heroHeight = 25;
		const heroWidth = 25;
		ctx.drawImage(heroImage, hero.x, hero.y, heroHeight, heroWidth);
	}

	if (monsterReady) {
		const bugHeight = 35;
		const bugWidth = 35;
		ctx.drawImage(monsterImage, monster.x, monster.y, bugHeight, bugWidth);
	}

	// Score
	// ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Bugs caught: " + bugsCaught, 32, 32);
};
var drawMap = function(tileGraphics) {

  const map = [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ];
	// Set as your tile pixel sizes, alter if you are using larger tiles.
	const tileH = 25;
	const tileW = 52;

	// mapX and mapY are offsets to make sure we can position the map as we want.
	const mapX = 0;
	const mapY = 0;
	let drawTile;

	// loop through our map and draw out the image represented by the number.
	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[i].length; j++) {
			drawTile = map[i][j];
			const img = tileGraphics[drawTile];
			const sx = 0;
			const sy = 0;
			const swidth = 25;
			const sheight = 25;
			const x = (i) * tileH;
			const y = (j) * tileH;
			const width = 25;
			const height = 25;

			// Draw the represented image number, at the desired X & Y coordinates followed by the graphic width and height.
			ctx.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
		}
	}
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 10);
	render();

	then = now;
	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();

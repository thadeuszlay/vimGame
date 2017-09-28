// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 550;
canvas.height = 550;
document.body.appendChild(canvas);

const map = [
	['a', 'b', 'c', 'd'],
	['e', 'f', 'g', 'h'],
	['i', 'j', 'k', 'l'],
	['m', 'n', 'o', 'p']
];
for (let i = 0; i < map.length; i++){
	for (let j = 0; j < map[0].length; j++) {
		var heroReady = false;
		var heroImage = new Image();
		heroImage.onload = function () {
			heroReady = true;
		};

		  var canvasImage = document.createElement('canvas');
		  var contextImage = canvasImage.getContext("2d");
		  var size = size || 60;
		  // Generate a random color every time function is called
		  // var color =  "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
			const color = '#aaa';
		  // Set canvas with & height
		  canvasImage.width = size;
		  canvasImage.height = size;
		  // Select a font family to support different language characters
		  // like Arial
		  contextImage.font = Math.round(canvasImage.width / 2) + "px Arial";
		  contextImage.textAlign = "center";

		  // Setup background and front color
		  contextImage.fillStyle = color;
		  contextImage.fillRect(0, 0, canvasImage.width, canvasImage.height);
		  contextImage.fillStyle = "#F00";
		  contextImage.fillText(map[j][i], size / 2, size / 1.5);

		  // Set image representation in default format (png)
		  const dataURI = canvasImage.toDataURL();
		// heroImage.src = "img/linux.png";
		heroImage.src = dataURI;
		var hero = {
		};

		// reset the game when the player catches a monster
		var reset = function () {
			hero.x = canvas.width / 2;
			hero.y = canvas.height / 2;
		};
		ctx.drawImage(heroImage, i * 35, j * 35, 34, 34);
	}
}
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};

  var canvasImage = document.createElement('canvas');
  var contextImage = canvasImage.getContext("2d");
  var size = size || 60;
  // Generate a random color every time function is called
  // var color =  "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
	const color = '#aaa';
  // Set canvas with & height
  canvasImage.width = size;
  canvasImage.height = size;
  // Select a font family to support different language characters
  // like Arial
  contextImage.font = Math.round(canvasImage.width / 2) + "px Arial";
  contextImage.textAlign = "center";

  // Setup background and front color
  contextImage.fillStyle = color;
  contextImage.fillRect(0, 0, canvasImage.width, canvasImage.height);
  contextImage.fillStyle = "#F00";
  contextImage.fillText("T", size / 2, size / 1.5);

  // Set image representation in default format (png)
  const dataURI = canvasImage.toDataURL();
	heroImage.src = dataURI;
	var hero = { };

// reset the game when the player catches a monster
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
};
//
var main = function () {
	ctx.drawImage(heroImage, 200, 200, 25, 25);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

reset();
main();

requestAnimationFrame(main);

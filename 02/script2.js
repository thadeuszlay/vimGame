(function(w, d) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 550;
  canvas.height = 550;
  d.body.appendChild(canvas);

  let image3 = new Image();
  image3.src = "img/background.png";
  ctx.drawImage(image3, 30, 30, 30, 30 );
  console.log(image3);

  let image = new Image();
  //=======
  var canvasImage = d.createElement('canvas');
  var contextImage = canvasImage.getContext("2d");
  var size = size || 60;
  // Generate a random color every time function is called
  var color =  "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
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
  const dataURI = canvas.toDataURL();
  // Dispose canvas element

  //=======
  image.src = AvatarImage("a", 30);
  console.log("image ", image);
  ctx.drawImage(image,0, 0, 30, 30 );
  console.log("drew image");

  function generateAvatars() {

    var images = d.querySelectorAll('img[letters]');

    const map = [
      [1,2,3,4,5,6,7,8,9,0],
      [1,2,3,4,5,6,7,8,9,0],
      [1,2,3,4,5,6,7,8,9,0],
      [1,2,3,4,5,6,7,8,9,0]
    ];
    console.log("rows ", map.length);
    console.log("cols ", map[0].length);
    for (let row = 0, lenRow = map.length; row < lenRow; row++) {
      for(let col = 0, lenCol = map[0].length; col < lenCol; col++) {
        let image = new Image();
        image.src = AvatarImage(map[row][col], 30);
        let image2 = new Image();
        image2.src = "img/grass.jpg";
        console.log("AvatarImage(image, 30); ", image);
        console.log("pic ", image2);
        // d.appendChild(image);
        ctx.drawImage(image, col * 30, row * 30, 30, 30 );
        // ctx.drawImage(heroImage, hero.x, hero.y, heroHeight, heroWidth);
      }
    }
    // ctx.beginPath();
    // ctx.arc(95,50,40,0,2*Math.PI);
    // ctx.stroke();
    // d.appendChild(canvas);
    // for (var i = 0, len = images.length; i < len; i++) {
    //   var img = images[i];
    //   img.src = AvatarImage(img.getAttribute('letters'), img.getAttribute('width'));
    //   // img.removeAttribute('letters');
    // }
  }

  d.addEventListener('DOMContentLoaded', function (event) {
      // generateAvatars();
  });

})(window, document);

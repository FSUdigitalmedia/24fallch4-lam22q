let theFont;
let xPos; // x position of the text
let xSpeed; // speed of movement
let colorValue; // color value to change dynamically

function preload(){
  theFont = loadFont(assets/ProtestGuerrilla-Regular.ttf);
}

function setup() {
  createCanvas(400, 400);
  textFont(theFont);
  textSize(72);
  xPos = 0; // start position
  xSpeed = 2; // speed of movement
  colorValue = 0; // starting color value
}



function draw() {
  background(255);


  // Update x position and wrap around
  xPos += xSpeed;
  if (xPos > width || xPos < 0) 
    xSpeed *= -1; // reverse direction if it goes beyond canvas


  
 // Animate the color (cycling through a range of hues)
 colorValue = (colorValue + 1) % 360; // loop from 0 to 360
 fill(color('hsl(' + colorValue + ', 100%, 50%)')); // HSL color mode for smooth transition

 // Get text bounds and draw rectangle (optional)
 let bbox = theFont.textBounds('Lilly!', xPos, height/2);
 rect(bbox.x, bbox.y, bbox.w, bbox.h);

 // Draw the text centered vertically, and moving horizontally
 text("Lilly", xPos - bbox.w/2, height/2 + bbox.h/2);
}

let theFont;
let xPos; // x position of the text
let xSpeed; // speed of movement
let colorValue; // color value to change dynamically
let displayedText = ("Lilly"); // Default text

function preload(){
  theFont = loadFont("assets/ProtestGuerrilla-Regular.ttf");
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

 // Get text bounds and draw rectangle 
 let bbox = theFont.textBounds('Lilly!', xPos, height/2);
 rect(bbox.x/2, bbox.y/2, bbox.w/2, bbox.h/2);

 // Draw the text centered vertically, and moving horizontally
 text(displayedText, xPos - bbox.w/2, height/2 + bbox.h/2);
}
// Adjust text speed based on mouse X position
xSpeed = map(mouseX, 0, width, -5, 5);


// Change the displayed text when a key is pressed
function keyPressed() {
  if (key === '1') {
    displayedText = "Lilly";
  } else if (key === '2') {
    displayedText = "Art!";
  } else if (key === '3') {
    displayedText = "Hello!";
  }
}
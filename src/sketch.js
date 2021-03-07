let currentPlayer;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //creation of player
    currentPlayer = new Player(width / 2);
    background(0);
    currentPlayer.drawInstance();

 }
  
function draw() {
    background(0);
    currentPlayer.update();
}

let currentPlayer, delay = 0, maxSpeed = 1, rotateInterval = 7;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //creation of player
    currentPlayer = new Player(width / 2);
    background(0);
    currentPlayer.drawInstance();
    angleMode(DEGREES);
 }
  
function draw() {
    delay++;
    currentPlayer.move();
    for (const [key, value] of Object.entries(currentPlayer.Bullet)) {
        value.update();
    }
    if (currentPlayer.Bullet.length == 0) {
        currentPlayer.BulletExists = false;
    }
}

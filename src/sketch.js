let currentPlayer;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //creation of player
    currentPlayer = new Player(width / 2);
    background(0);
    currentPlayer.drawInstance();
    angleMode(DEGREES);
 }
  
function draw() {
    currentPlayer.drawInstance();
    if (currentPlayer.BulletExists){
        for (const i of currentPlayer.Bullet) {
            i.update();
        }
    }
    if (currentPlayer.Bullet.length == 0) {
        currentPlayer.BulletExists = false;
    }
}

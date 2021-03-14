let player = [], delay = 0, maxSpeed = 2, rotateInterval = 7;
let noPlayers = 2;
function setup() {
    createCanvas(windowWidth, windowHeight);
    //creation of player
    for (let i = 0; i < noPlayers; i++) player.push(new Player(width / 2, i));
    background(0);
    angleMode(DEGREES);
 }
  
function draw() {
    delay++;
    background(0);
    for (let i = 0; i < noPlayers; i++) player[i].move();
}


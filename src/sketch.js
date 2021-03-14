let player = [], delay = 0, delay1 = 0;
let maxSpeed = 2, rotateInterval = 7;
let noPlayers = 2;
let hitDelay = 60, playerHit;
function setup() {
    createCanvas(windowWidth, windowHeight);
    //creation of player
    for (let i = 0; i < noPlayers; i++) player.push(new Player(width / 2, i));
    background(0);
    angleMode(DEGREES);
    textAlign(CENTER);
 }
  
function draw() {
    delay++;
    delay1++;
    background(0);
    let score = "";
    for (let i = 0; i < noPlayers; i++){
        player[i].move();
        score += "Player " + (i+1) + ": " +  player[i].points + "\n";
    }
    drawScore();
    text(score, width / 2, 50);
    if (hitDelay < 60) {
        hitDelay++;
        drawHit();
    }
}

function drawScore() {
    push();
    fill("yellow");
    textSize(30);
    text("Score", width / 2, 30)
    pop();
    fill("white");
}

function drawHit() {
    push();
    textSize(100)
    text("Player " + playerHit + " HIT", width / 2, height / 2);
    pop();
}
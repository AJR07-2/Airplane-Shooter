let player = [], booster = [], delay = 0, delay1 = 0;
let rotateInterval = 7;
let noPlayers = 2, noBooster = 0;
let hitDelay = 60, playerHit;
function setup() {
    createCanvas(windowWidth, windowHeight);
    //creation of player
    for (let i = 0; i < noPlayers; i++) player.push(new Player(width / 2, i));
    background(0);
    angleMode(DEGREES);
    textAlign(CENTER);
    newBooster("speed");
 }
  
function draw() {
    clear();
    delay++;
    delay1++;
    background(0);
    //update players location and score
    let score = "";
    for (let i = 0; i < noPlayers; i++){
        player[i].move();
        score += "Player " + (i+1) + ": " +  player[i].points + "\n";
    }
    drawScore();
    text(score, width / 2, 50);
    //checks for hits
    if (hitDelay < 60) {
        hitDelay++;
        drawHit();
    }
    //generate new booster if lucky
    if (int(random(1, 2000)) == 5) newBooster();
    //redraw all boosters
    for (let i = 0; i < noBooster; i++){
        booster[i].drawInstance();
        booster[i].checkPickup();
    } 
}

function newBooster() {
    booster.push(new boost("speed"));
    noBooster++;
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
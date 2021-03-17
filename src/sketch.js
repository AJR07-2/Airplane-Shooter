let player = [], booster = [], delay = 0, delay1 = 0;
let noPlayers = 2, noBooster = 0;
let displayText = "", noLoopNext = false;
function setup() {
    createCanvas(windowWidth, windowHeight);
    //creation of player
    for (let i = 0; i < noPlayers; i++) player.push(new Player(width / 2, i));
    background(0);
    angleMode(DEGREES);
    textAlign(CENTER);
    newBooster();
 }
  
function draw() {
    delay++;
    delay1++;
    background(0, 0, 0, 50);
    //update players location and score
    for (let i = 0; i < noPlayers; i++)player[i].move();
    Title();
    //generate new booster if lucky
    if (int(random(1, 2000)) == 5) newBooster();
    //redraw all boosters
    for (let i = 0; i < noBooster; i++){
        booster[i].drawInstance();
        booster[i].checkPickup();
    }
    //display text
    textSize(40);
    fill("red");
    text(displayText, width / 2, height / 2)
    if (noLoopNext) noLoop();
    if (displayText != "") noLoopNext = true;

}

function newBooster() {
    let random1 = int(random(1, 3)), type = "";
    if (random1 == 1) type = "speed";
    else if(random1 == 2) type = "bomb";
    booster.push(new boost(type, noBooster));
    noBooster++;
}

function Title() {
    push();
    fill("yellow");
    textSize(30);
    text("Astro Party Mini", width / 2, 30)
    pop();
}
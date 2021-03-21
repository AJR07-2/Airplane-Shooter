let player = [], booster = [], delay = 0, delay1 = 0;
let noPlayers = 2, noBooster = 0;
let displayText = "", noLoopNext = false;
let controls = [["w", "a", "s", "d", "MOUSE_LEFT"],["i", "j", "k", "l", "o"]];
function setup() {
    createCanvas(windowWidth, windowHeight);
    //creation of player
    for (let i = 0; i < noPlayers; i++) player.push(new Player(width / 2, i));
    background(0);
    angleMode(DEGREES);
    textAlign(CENTER);
    rectMode(CENTER)
    newBooster();
    HTMLMediaElement.autoplay = true;
 }
  
function draw() {
    delay++;
    delay1++;
    background(0, 0, 0, 40);
    //update players location and score
    if(!noLoopNext) for (let i = 0; i < noPlayers; i++)player[i].move();
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
    if (noLoopNext) {
        push();
        textSize(30)
        noStroke()
        fill(0, 0, 200, 100);
        rect(width / 2, height / 2, width, height/6, 100, 100, 100);
        fill("red");
        strokeWeight(1)
        stroke("yellow");
        text(displayText, width / 2, height / 2)
        noLoop();
        pop();
    } 
    if (displayText != "") noLoopNext = true;
}

function newBooster() {
    let random1 = int(random(1, 4)), type = "";
    if (random1 == 1 || random1 == 2) type = "speed";
    else if (random1 == 3) type = "bomb";
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
class boost{
    constructor(type, boosterId) {
        this.pos = createVector(random(20, width - 20), random(20, height - 20));
        this.size = random(20, 30);
        this.img = loadImage('assets/' + type + '.jpg')
        this.boosterId = boosterId;
        this.type = type;
    }
    drawInstance() {
        image(this.img, this.pos.x, this.pos.y, this.size, this.size);
    }
    checkPickup() {
        for (let i = 0; i < noPlayers; i++) {
            if (dist(this.pos.x, this.pos.y, player[i].pos.x, player[i].pos.y) < this.size * 1.5) this.applyEffect(i);
        } 
    }

    applyEffect(playerNo) {
        if (this.type == "speed") {
            player[playerNo].maxSpeed++;
            player[playerNo].velocity.mult(1.05);
            player[playerNo].accelerationFactor *= 1.1;
        } else if (this.type == "bomb") {
            displayText = "Player " + (playerNo + 1) + " was exploded by a bomb! Player " + (playerNo) + " won!"
            push();
            fill("white");
            noStroke();
            circle(this.pos.x, this.pos.y, this.size * 10)
            pop();
        }
        this.playSound();
        this.self_destruct();
    }

    playSound() {
        let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
        try {
            if (this.type == "bomb") {
                if(isSafari) throw "Safari"
                var audio = new Audio('assets/' + this.type + '.mp3')
                audio.play();
            }
        } catch (error) {
            let localStorage = window.localStorage;
            console.log(localStorage.getItem("Audio Error"))
            if (localStorage.getItem("Audio Error") != "True") {
                localStorage.setItem("Audio Error", "True");
                alert("Audio could not be played. The browser you are using is " + error + ", there is an update which causes audio to only be allowed to play on user click, which has not been resolved/accounted for. Please consider switching a different browser.")
            }
            console.log("Audio could not be played. The browser you are using is " + error + ", there is an update which causes audio to only be allowed to play on user click, which has not been resolved/accounted for. Please consider switching a different browser.")
        }

    }
    self_destruct() {
        booster.splice(this.boosterId, this.boosterId + 1);
        console.log(booster)
        for (let i = this.boosterId; i < noBooster-1; i++)booster[i].boosterId--;
        noBooster--;
    }
}
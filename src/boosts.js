class boost{
    constructor(type, boosterId) {
        this.pos = createVector(random(0, width), random(0, height));
        this.size = random(15, 30);
        this.img = loadImage('src/assets/' + type + '.jpg')
        this.boosterId = boosterId;
    }
    drawInstance() {
        image(this.img, this.pos.x, this.pos.y, this.size, this.size);
    }
    checkPickup() {
        for (let i = 0; i < noPlayers; i++) {
            if (dist(this.pos.x, this.pos.y, player[i].pos.x, player[i].pos.y) < this.size*1.5) {
                this.applyEffect(i);
                
            }
        }
    }

    applyEffect(playerNo) {
        player[playerNo].maxSpeed++;
        player[playerNo].velocity.mult(1.05);
    }
}
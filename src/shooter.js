class Player{
    constructor(X, playerNo) {
        this.pos = createVector(X +  random(-100, 100), height / 2 + random(-100, 100));
        this.velocity = createVector(0, 0);
        this.rotateDeg = 0;
        this.Bullet = null;
        this.playerNo = playerNo;
        this.colour = color(random(100, 255), random(100, 255), random(100, 255))
        this.maxSpeed = 2;
        this.accelerationFactor = 0.2;
        this.rotateInterval = 10;
    }
    addForce(back = false) {
        let pushX = Math.sin(this.rotateDeg * Math.PI / 180) * this.accelerationFactor;
        let pushY = Math.cos(this.rotateDeg * Math.PI / 180) * -1 * this.accelerationFactor;
        let force = createVector(pushX, pushY);
        if (back) force.mult(-1);
        let testX = force.x + this.velocity.x;
        let testY = force.y + this.velocity.y;
        if (testX < this.maxSpeed && testX >= -this.maxSpeed) this.velocity.x += force.x;
        if (testY < this.maxSpeed && testY >= -this.maxSpeed) this.velocity.y += force.y;
    }
    move() {
        let testX = this.pos.x + this.velocity.x, testY = this.pos.y + this.velocity.y;
        if (testX < width && testX > 0 && testY > 0 && testY < height) this.pos.add(this.velocity);
        else this.velocity = createVector(0, 0)
        this.drawInstance();
        this.Bullet?.update();
        this.velocity.mult(0.99);
    }
    rotate(left) {
        //restricting rotation angle
        if (left) this.rotateDeg -= this.rotateInterval;
        else this.rotateDeg += this.rotateInterval;
        if (this.rotateDeg < 0) this.rotateDeg += 360;
        this.rotateDeg = this.rotateDeg % 360;
    }
    drawInstance() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.rotateDeg);
        fill(this.colour);
        triangle(- 10, 0, 10, 0, 0, - 10);
        pop();
    }
    shoot() {
        this.Bullet = new Bullet(this.pos.x, this.pos.y, this.playerNo);
    }
}
 
class Bullet{
    constructor(X, Y, playerNo) {
        this.pos = createVector(X + 0.01, Y + 0.01);
        this.relatedPlayerNo = playerNo;
        this.rotateDeg = player[this.relatedPlayerNo].rotateDeg;
    }
    update() {
        this.prevPos = createVector(this.pos.x, this.pos.y);
        let yForce = (Math.cos(this.rotateDeg * Math.PI / 180) * -10) * 2;
        let xForce = (Math.sin(this.rotateDeg * Math.PI / 180) * 10) * 2;
        this.force = createVector(xForce, yForce);
        this.checkDeletion();
        this.pos.add(this.force);
        this.drawInstance();
        this.checkCollision();
    }
    checkDeletion(confirm = false) {
        if (this.pos.y <= 0 || this.pos.y >= height || this.pos.x <= 0 || this.pos.x >= width || confirm) {
            push();
            translate(this.prevPos.x, this.prevPos.y);
            rotate(this.rotateDeg);
            erase();
            ellipse(0, 0, width / 40, height / 20);
            noErase();
            pop();
            player[this.relatedPlayerNo].Bullet = null;
            return;
        }
    }
    checkCollision() {
        for (let i = 0; i < noPlayers; i++){
            if (i != this.relatedPlayerNo) {
                let prox = dist(player[i].pos.x, player[i].pos.y, this.pos.x, this.pos.y);
                if (prox < 20) {
                    this.checkDeletion(true);
                    displayText = "Player " + (i+1) + " was hit! Player " + (i+2) + " won!"
                }
            }
        }
    }
    drawInstance() {
        fill("red");
        //erase previous element
        push();
        translate(this.prevPos.x, this.prevPos.y);
        rotate(this.rotateDeg);
        erase();
        ellipse(0, 0, width / 40, height / 20);
        noErase();
        pop();
        //create new element
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.rotateDeg);
        ellipse(0, 0, width / 40, height / 20);
        pop();
    }
}

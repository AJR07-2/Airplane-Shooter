class Player{
    constructor(X) {
        this.pos = createVector(X, height / 2);
        this.velocity = createVector(0, 0);
        this.BulletExists = false;
        this.Bullet = {};
        this.rotateDeg = 0;
    }
    addForce(back = false) {
        let pushX = Math.sin(this.rotateDeg * Math.PI / 180) / 10;
        let pushY = Math.cos(this.rotateDeg * Math.PI / 180) * -1 / 10;
        let force = createVector(pushX, pushY);
        if (back) force.mult(-1);
        let testX = force.x + this.velocity.x;
        let testY = force.y + this.velocity.y;
        if (testX < maxSpeed && testX >= -maxSpeed) this.velocity.x += force.x;
        if (testY < maxSpeed && testY >= -maxSpeed) this.velocity.y += force.y;
    }
    move() {
        background(0);
        let testX = this.pos.x + this.velocity.x, testY = this.pos.y + this.velocity.y;
        if (testX < width && testX > 0 && testY > 0 && testY < height)this.pos.add(this.velocity);
        currentPlayer.drawInstance();
    }
    rotate(left) {
        //restricting rotation angle
        if (left) this.rotateDeg -= rotateInterval;
        else this.rotateDeg += rotateInterval;
        if (this.rotateDeg < 0) this.rotateDeg += 360;
        this.rotateDeg = this.rotateDeg % 360;
    }
    drawInstance() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.rotateDeg);
        fill("white");
        triangle(- 10, 0, 10, 0, 0, - 10)
        pop();
    }
    shoot() {
        this.BulletUID = this.uid;
        this.Bullet[this.BulletUID] = (new Bullet(this.pos.x, this.pos.y, this.BulletUID));
        this.BulletExists = true;
    }
    uid() {
        return Math.random().toString(36).substr(2, 9);
    }
}
 
class Bullet{
    constructor(X, Y, uid) {
        this.pos = createVector(X + 0.01, Y + 0.01);
        this.rotateDeg = currentPlayer.rotateDeg;
        this.update();
        this.uid = uid;
    }
    update() {
        this.prevPos = createVector(this.pos.x, this.pos.y);
        let yForce = (Math.cos(this.rotateDeg * Math.PI / 180) * -10) * 2;
        let xForce = (Math.sin(this.rotateDeg * Math.PI / 180) * 10) * 2;
        this.force = createVector(xForce, yForce);
        this.checkDeletion();
        this.pos.add(this.force);
        this.drawInstance();
    }
    checkDeletion() {
        if (this.pos.y <= 0 || this.pos.y >= height || this.pos.x <= 0 || this.pos.x >= width) {
            push();
            translate(this.prevPos.x, this.prevPos.y);
            rotate(this.rotateDeg);
            erase();
            ellipse(0, 0, width / 40, height / 20);
            noErase();
            pop();
            delete currentPlayer.Bullet[this.uid];
            return;
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

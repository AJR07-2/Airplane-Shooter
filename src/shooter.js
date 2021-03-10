class Player{
    constructor(X){
        this.X = X;
        this.Y = height * 4 / 6;
        this.BulletExists = false;
        this.Bullet = {};
        this.rotateDeg = 0;
    }
    move() {
        background(0);
        this.Ymovement = Math.cos(this.rotateDeg * Math.PI / 180) * -10;
        this.Xmovement = Math.sin(this.rotateDeg * Math.PI / 180) * 10;
        this.Y += this.Ymovement;
        this.X += this.Xmovement;
        currentPlayer.drawInstance();
    }
    rotate(left) {
        if (left) this.rotateDeg -= 5;
        else this.rotateDeg += 5;
        if (this.rotateDeg < 0) this.rotateDeg += 360;
        this.rotateDeg = this.rotateDeg % 360;
        console.log(this.rotateDeg)
    }
    drawInstance() {
        push();
        translate(this.X, this.Y);
        rotate(this.rotateDeg);
        fill("white");
        triangle(- 10, 0, 10, 0, 0, - 10)

        pop();
    }
    shoot() {
        this.BulletUID = this.uid;
        this.Bullet[this.BulletUID] = (new Bullet(this.X, this.Y, this.BulletUID));
        this.BulletExists = true;
    }
    uid() {
        return Math.random().toString(36).substr(2, 9);
    }
}
 
class Bullet{
    constructor(X, Y, uid) {
        this.X = X + 0.01;
        this.Y = Y + 0.01;
        this.rotateDeg = currentPlayer.rotateDeg;
        this.update();
        this.uid = uid;
    }
    update() {
        this.previousX = this.X;
        this.previousY = this.Y;
        this.Ymovement = Math.cos(this.rotateDeg * Math.PI / 180) * -10;
        this.Xmovement = Math.sin(this.rotateDeg * Math.PI / 180) * 10;
        this.checkDeletion();
        this.Y += this.Ymovement;
        this.X += this.Xmovement;
        this.drawInstance();
    }
    checkDeletion() {
        if (this.Y <= 0 || this.Y >= height || this.X <= 0 || this.X >= width) {
            push();
            translate(this.previousX, this.previousY);
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
        translate(this.previousX, this.previousY);
        rotate(this.rotateDeg);
        erase();
        ellipse(0, 0, width / 40, height / 20);
        noErase();
        pop();
        //create new element
        push();
        translate(this.X, this.Y);
        rotate(this.rotateDeg);
        ellipse(0, 0, width / 40, height / 20);
        pop();
    }
}
class Player{
    constructor(X){
        this.X = X;
        this.Y = height * 4 / 6;
        this.BulletExists = false;
        this.Bullet = [];
        this.rotateDeg = 0;
    }
    move() {
        background(0);
        if(this.rotateDeg < 90){
            this.Ymovement = Math.cos(this.rotateDeg) * 10;
            this.Xmovement = Math.sin(this.rotateDeg) * 10;
        }
        this.Y += this.Ymovement;
        this.X += this.Xmovement;
        console.log(this.Xmovement, this.Ymovement, this.rotateDeg)
        currentPlayer.drawInstance();
    }
    rotate(left) {
        if (left) this.rotateDeg -= 1;
        else this.rotateDeg += 1;
        this.rotateDeg = abs(this.rotateDeg) % 360;
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
        console.log("boom")
        this.Bullet.push(new Bullet());
        this.BulletExists = true;
    }
}
 
class Bullet{
    constructor() {
        this.X = currentPlayer.X;
        this.Y = currentPlayer.Y;
        this.update();
    }
    update() {
        this.Y -= width / 60;
        if (this.Y <= 0) {
            erase();
            ellipse(this.X, this.Y + width / 60, width / 40, height / 20);
            noErase();
            this.Y = currentPlayer.Y;
            currentPlayer.Bullet.splice(0, 1);
            return;
        }
        fill("red");
        erase();
        ellipse(this.X, this.Y + width / 60, width / 40, height / 20);
        noErase();
        ellipse(this.X, this.Y, width / 40, height / 20);
    }
}
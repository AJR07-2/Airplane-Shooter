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
        if(this.rotateDeg == 0){
            this.Ymovement = 3; 
            this.Xmovement = 0;
        }else if(this.rotateDeg < 90){
            this.Xmovement = this.rotateDeg%90 * 3;
            this.Ymovement = -(this.rotateDeg%90) * 3;
        }else if(this.rotateDeg < 180){
            this.Xmovement = this.rotateDeg%90 * 3;
            this.Ymovement = this.rotateDeg%90 * 3;
        }else if(this. rotateDeg < 270){
            this.Xmovement = -(this.rotateDeg%90) * 3;
            this.Ymovement = this.rotateDeg%90 * 3;
        }else{
            this.Xmovement = -(this.rotateDeg%90) * 3;
            this.Ymovement = -(this.rotateDeg%90) * 3;
        }
        this.Y -= this.Ymovement;
        this.X -= this.Xmovement;
        console.log(this.X, this.Y)
        currentPlayer.drawInstance();
    }
    rotate(left) {
        if (left) this.rotateDeg -= 10;
        else this.rotateDeg += 10;
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
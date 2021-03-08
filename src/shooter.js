class Player{
    constructor(X){
        this.X = X;
        this.Y = width * 4 / 6;
        this.BulletExists = false;
        this.Bullet = [];
    }
    move(front) {
        background(0);
        if (front) this.Y -= 3;
        else this.Y += 3;
        currentPlayer.drawInstance();

        if (this.Bullet.length == 0) {
            this.BulletExists = false;
        }
    }
    rotate(left) {
        
    }
    drawInstance() {
        fill("white");
        triangle(this.X - 10, this.Y, this.X + 10, this.Y, this.X, this.Y - 10)
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
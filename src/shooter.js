class Player{
    constructor(X){
        this.X = X;
        this.Y = 40;
        this.drawInstance();
    }
    shiftPosition(offset) {
        new Player(this.X + offset);
    }
    drawInstance() {
        fill("white");
        triangle(this.X - 10, this.Y, this.X + 10, this.Y, this.X, this.Y + 10)
    }
}


currentPlayer = new Player(200);
function mouseReleased() {
    if(delay > 60){
        currentPlayer.shoot();
        delay = 0;
    }
}
function mouseReleased() {
    if(delay > 30){
        player[0].shoot();
        delay = 0;
    }
}
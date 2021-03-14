function mouseReleased() {
    if(delay > 60){
        player[0].shoot();
        delay = 0;
    }
}
function mouseReleased() {
    if(delay > 60){
        player[0].shoot();
        player[1].shoot();
        delay = 0;
    }
}
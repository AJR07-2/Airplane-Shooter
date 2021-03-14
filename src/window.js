var keys = {};
onkeydown = onkeyup = function(e){
    e = e || event; 
    keys[e.keyCode] = e.type == 'keydown';
    if (keys[87]) player[0].addForce(false); //W
    if (keys[65]) player[0].rotate(true); //A
    if (keys[83]) player[0].addForce(true); //s
    if (keys[68]) player[0].rotate(false); //D
    if (keys[73]) player[1].addForce(false); //I
    if (keys[74]) player[1].rotate(true); //J
    if (keys[75]) player[1].addForce(true); //K
    if (keys[76]) player[1].rotate(false); //L
    if (keys[79] && delay1 > 60) { //O 
        player[1].shoot();
        delay1 = 0;
    }
}
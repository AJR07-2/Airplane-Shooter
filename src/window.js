var map = {};
onkeydown = onkeyup = function(e){
    e = e || event; 
    map[e.keyCode] = e.type == 'keydown';
    if(map[87])currentPlayer.addForce(false); //W
    if (map[65]) currentPlayer.rotate(true); //A
    if(map[83])currentPlayer.addForce(true); //s
    if(map[68])currentPlayer.rotate(false); //D
}
var map = {};
onkeydown = onkeyup = function(e){
    e = e || event; 
    map[e.keyCode] = e.type == 'keydown';
    if(map[87])currentPlayer.move(); //W
    if(map[65])currentPlayer.rotate(true); //A
    if(map[68])currentPlayer.rotate(false); //D
}
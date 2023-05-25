
function ballPosCheck(){
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
        blockUp = false;
        life_count--;
        resetLife(); //(game.js)
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 2;
        dy = -2;
        wa.play();
    }
    if(x+dx < ballRadius || x+dx > canvas.width-ballRadius) dx = -dx;

}

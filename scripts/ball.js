
function ballPosCheck(){
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
  
        dy = -dy;
    }
    if(x+dx < ballRadius || x+dx > canvas.width-ballRadius) dx = -dx;

}

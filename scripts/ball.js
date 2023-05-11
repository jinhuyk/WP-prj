
function ballPosCheck(){
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
  
        document.location.reload();
    }
    if(x+dx < ballRadius || x+dx > canvas.width-ballRadius) dx = -dx;

}

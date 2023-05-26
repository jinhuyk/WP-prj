function collisionBlocks() {
    if(blockUp == true){
        //윗면
        if((x+dx+ballRadius >= blockX && x+dx+ballRadius <= blockX+5) || (x+dx-ballRadius <= blockX+blockWidth && x+dx-ballRadius >=blockX+blockWidth-5 )){
            if(y+dy+ballRadius >= blockY && y+dy -ballRadius <= blockY+blockHeight){
            dx*=-1;
            blockPro();
            blockUp = false;
            }
        }
        if(x+dx+ballRadius > blockX && x+dx-ballRadius < blockX+blockWidth){
            if(y+dy+ballRadius >= blockY && y+dy -ballRadius <= blockY+blockHeight){
                dy*=-1;
                blockPro();
                blockUp = false;
            }
        }
    } 
    

}

function blockPro(){
        var ran = Math.floor(Math.random()*10);
        switch(ran){
            case 0: ballRadius = 10; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; break;
            case 1: ballRadius = 15; break;
            case 2: ballRadius = 5; break;
            case 3: dx *= 1.5; dy *= 1.5; break;
            case 4: dx *= 0.5 ; dy *= 0.5; break;
            case 5: ballRadius = 10; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; break;
            case 6: ballRadius = 10; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; break;
            case 7: ballRadius = 10; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; break;
            case 8: ballRadius = 10; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; break;
            case 9: ballRadius = 10; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; break;
        }

}
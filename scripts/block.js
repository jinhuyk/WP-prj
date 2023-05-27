function collisionBlocks() {
    if(blockUp == true){
        //윗면
        if((x+dx+ballRadius >= blockX && x+dx+ballRadius <= blockX+5) || (x+dx-ballRadius <= blockX+blockWidth && x+dx-ballRadius >=blockX+blockWidth-5 )){
            if(y+dy+ballRadius >= blockY && y+dy -ballRadius <= blockY+blockHeight){
            dx*=-1;
            if(level != 1) blockPro();
            blockUp = false;
            wa.play();
            }
        }
        if(x+dx+ballRadius > blockX && x+dx-ballRadius < blockX+blockWidth){
            if(y+dy+ballRadius >= blockY && y+dy -ballRadius <= blockY+blockHeight){
                dy*=-1;
                if(level != 1) blockPro();
                blockUp = false;
                wa.play();
            }
        }
    } 
    

}

function blockPro(){
        var ran = Math.floor(Math.random()*6);
        if(level ==2){
            switch(ran){
                case 0: ballRadius = 25; break; //공 커지기
                case 1: ballRadius = 15; break;  //공 작아지기
                case 2: ballRadius = 20; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; break;    //(효과 해제)
                case 3: ballRadius = 20; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; break;
                case 4: ballRadius = 20; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; break;
                case 5: ballRadius = 20; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; break;
            }
        }
        if(level == 3){
            switch(ran){
                case 0: ballRadius = 25; break; //공 커지기
                case 1: ballRadius = 15; break;  //공 작아지기
                case 2: dx *= 1.5; dy *= 1.5; if(Math.abs(dx) > 4.5) {dx > 0 ? dx=4.5:dx=-4.5; dy > 0 ? dy=4.5:dy=-4.5;} break;   //빨라지기(중첩)
                case 3: dx > 0 ? dx = 0.5: dx = -0.5 ; dy > 0 ? dy = 0.5: dy = -0.5; break; //느려지기(고정)
                case 4: ballRadius = 20; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; break;    //(효과 해제)
                case 5: ballRadius = 20; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; break;
            }
        }
        

}
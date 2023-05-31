function collisionBlocks() {
    if(blockUp == true){
        //윗면
        if((x+dx+ballRadius >= blockX && x+dx+ballRadius <= blockX+5) || (x+dx-ballRadius <= blockX+blockWidth && x+dx-ballRadius >=blockX+blockWidth-5 )){
            if(y+dy+ballRadius >= blockY && y+dy -ballRadius <= blockY+blockHeight){
            dx*=-1;
            if(level != 1) blockPro();
            blockUp = false;
            ouch.play();
            }
        }
        if(x+dx+ballRadius > blockX && x+dx-ballRadius < blockX+blockWidth){
            if(y+dy+ballRadius >= blockY && y+dy -ballRadius <= blockY+blockHeight){
                dy*=-1;
                if(level != 1) blockPro();
                blockUp = false;
                ouch.play();
            }
        }
    } 
    

}

function blockPro(){
        var ran = Math.floor(Math.random()*6);
        if(level ==2){
            switch(ran){
                case 0: ballRadius = 40; $(".item").css({"background-color":"yellow"});  break; //공 커지기
                case 1: ballRadius = 10; $(".item").css({"background-color":"green"}); break;  //공 작아지기
                default: ballRadius = 20; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; $(".item").css({"background-color":"white"});  break;    //(효과 해제)
            }
        }
        if(level == 3){
            switch(ran){
                case 0: ballRadius = 40; $(".item").css({"background-color":"yellow"});  break; //공 커지기
                case 1: ballRadius = 10; $(".item").css({"background-color":"green"});  break;  //공 작아지기
                case 2: dx *= 2; dy *= 2; if(Math.abs(dx) > 8) {dx > 0 ? dx=8:dx=-8; dy > 0 ? dy=8:dy=-8;} $(".item").css({"background-color":"red"});  break;   //빨라지기(중첩)
                case 3: dx > 0 ? dx = 0.5: dx = -0.5 ; dy > 0 ? dy = 0.5: dy = -0.5;$(".item").css({"background-color":"blue"});  break; //느려지기(고정)
                default: ballRadius = 20; if(dx > 0) dx = 2; else dx =-2; if(dy > 0) dy = 2; else dy = -2; $(".item").css({"background-color":"white"});  break;
            }
        }
        

}
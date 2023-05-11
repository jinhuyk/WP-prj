function collisionBlocks() {
    if(blockUp == true){
        //윗면
        if(y+dy+ballRadius >= blockY && y+dy -ballRadius <= blockY+blockHeight){
            if(x+dx+ballRadius == blockX || x+dx-ballRadius == blockX+blockWidth){
                if(y+dy+ballRadius == blockY && y+dy-ballRadius == blockY+blockHeight){
                    dy*=-1;
                }
                dx*=-1;
                blockUp = false;
            }
            if(x+dx+ballRadius > blockX && x+dx-ballRadius < blockX+blockWidth){
                dy *=-1;
                blockUp = false;
            }
        } 
    }

}
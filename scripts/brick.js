var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 , v : 1};
    }
}


function collisionBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.v == 1) {
                if(y+dy+ballRadius >= b.y && y+dy -ballRadius <= b.y+brickHeight){
                    if(x+dx+ballRadius == b.x || x+dx-ballRadius == b.x+brickWidth){
                        if(y+dy+ballRadius == b.y && y+dy-ballRadius == b.y+brickHeight){
                            dy*=-1;
                        }
                        dx*=-1;
                        b.v = 0;
                    }
                    if(x+dx+ballRadius > b.x && x+dx-ballRadius < b.x+brickWidth){
                        dy *=-1;
                        b.v=0;
                    }
                }
            }
        }
    }
}



function drawBall(){
    ctx.beginPath();
    ctx.drawImage(stone, x, y, ballRadius*2, ballRadius*2);
    ctx.closePath();

}

function drawBricks() {
    
    
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].v == 1){
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;

                ctx.beginPath();
                
                ctx.drawImage(img, brickX, brickY, brickWidth, brickHeight);
                ctx.closePath();
                
            }
            
        }
    }
}

function drawBlock(bX,bY){
    ctx.beginPath();
    ctx.drawImage(brickImg, bX, bY, blockWidth, blockHeight);
    ctx.closePath();
}
function drawSampleBlock(bX,bY){
    ctx.beginPath();
    ctx.drawImage(brickImg, bX, bY, blockWidth, blockHeight);
    ctx.closePath();
}
$(canvas).on("click",function(e){
    if(blockUp === false){
        
        var l = $(this).offset().left;
        var t = $(this).offset().top;
        blockX = e.pageX - l;
        blockY = e.pageY - t;
        if(blockY >= canvas.height/2){
            blockUp = true;
            drawBlock(blockX,blockY);
        }

    }
})
canvas.onmousemove = (function(e){
    if(blockUp==false){
        var l = $(this).offset().left;
        var t = $(this).offset().top;
        blockX = e.pageX - l;
        blockY = e.pageY - t;
        if(blockY >= canvas.height/2)
            drawSampleBlock(blockX,blockY);
    }

})


function draw(){

   
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBall();
    if(blockUp === true){
        drawBlock(blockX,blockY);
    }
    drawBricks();
    ballPosCheck();
    
    collisionBricks();
    collisionBlocks();
    x += dx;
    y += dy;
    gameOver();
}


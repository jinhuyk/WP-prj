function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
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
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
            
        }
    }
}

function drawBlock(bX,bY){
    ctx.beginPath();
    ctx.rect(bX, bY, blockWidth,blockHeight);
    ctx.fillStyle = "#0099DD";
    ctx.fill();
    ctx.closePath();
}

$(canvas).on("click",function(e){
    if(blockUp === false){
        blockUp = true;
        var l = $(this).offset().left;
        var t = $(this).offset().top;
        blockX = e.pageX - l;
        blockY = e.pageY - t;
        drawBlock(blockX,blockY);
    }
})

//var imgArray = ["resources/img/block1.png", ];
//$("#slide-bar").on("click",function(){
//   var img_num = Math.floor(Math.random()*imgArray.length+1);
//    $(this).attr = ("src", imgArray[img_num]);
//})


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
}

setInterval(draw, 10);

function brickInit(){
    for(var c=0; c<brickColumnCount; c++) {
        bricks[c] = [];
        for(var r=0; r<brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0 , v : 1 , e : 0};
        }
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
                        score += update_score;  //공으로 블럭을 맞추면 스코어 획득
                        bricksCheck();
                        ef.play();
                        //playPro(b);
                        //attack(b);
                    }
                    if(x+dx+ballRadius > b.x && x+dx-ballRadius < b.x+brickWidth){
                        dy *=-1;
                        b.v=0;
                        score += update_score;
                        bricksCheck();
                        ef.play();
                        //playPro(b);
                        //attack(b);
                    }
                }
            }
        }
    }
}

//속성 추가
function brickPro(){
    if(level == 1){
        for(var s=0; s < brickPro ; s++){
            var ran_col = Math.floor(Math.random()*brickColumnCount);
            var ran_row = Math.floor(Math.random()*brickRowCount);
            bricks[ran_col][ran_row] = {e : level};
        }
    }
    if(level == 2){
        for(var s=0; s < brickPro ; s++){
            var ran_col = Math.floor(Math.random()*brickColumnCount);
            var ran_row = Math.floor(Math.random()*brickRowCount);
            bricks[ran_col][ran_row] = {e : level};
        }
    }
    if(level == 3){
        for(var s=0; s < brickPro ; s++){
            var ran_col = Math.floor(Math.random()*brickColumnCount);
            var ran_row = Math.floor(Math.random()*brickRowCount);
            bricks[ran_col][ran_row] = {e : level};
        }
    }
}

//속성있는 블럭에 부딪쳤을 때
function playPro(p){
    var ran = Math.floor(Math.random()* 3);
    if(p.e != 0){

        if(ran == 0) { dx *= 2; dy *= 2; }
        else if(ran == 0) blockRate *= 0.5;
        else attack = 1;

        if(p.e == 1){

        }
        else if(p.e == 2){
            if(manzu != 0){
                manzu--;
                life_count--;
                resetLife();
            }
        }
        else if(p.e == 3){
            ku_skill--;
            p.v = 1;
            if(ku_skill == 0) p.v = 0;
        }

        //score += Math.floor(Math.random()*10+10);   //추가 점수 획득
    }
}

// var p = [];
// var p_attack = 0;
// for(var pi=0;pi<brickPro;pi++)
//     p[pi] = { x : 0 , y : 0};

// function attack(b){
//     var p = p[p_attack];
//     if(attack == 0){
//         p.x = b.x; p.y = b.y;
//     }
//     else{
//         ctx.beginPath();
//         ctx.moveTo(p.x,p.y);
//         ctx.arc(p.x,p.y,10,0,Math.PI*2);
//         ctx.fillStyle = "#0095DD";
//         ctx.fill();
//         ctx.closePath();
//         p.y += -1;
//     }
// }






$(function(){

    $(window).resize(function(){
		change_position($(".popup-pre"))
	})
    $("#game-preview").fadeIn();
    change_position($(".popup-pre"));
    showScript();


    $("#keep-btn").click(function(){
        clearInterval(timeScript);
        $("#game-preview").fadeOut();
        $("#game-scn").show();
    });
    $("#lv1").css({"background":"url(./resources/img/lv1.jpeg)"});
    $("#lv2").css({"background":"url(./resources/img/lv2.jpeg)"});
    $("#lv3").css({"background":"url(./resources/img/lv3.jpeg)"});
    $(".game-level-button").css({"background-size": "cover"});
    $(".game-level-button").each(function(){
        $(this).click(function(){

            change_position($(".popup-pre"));
            $("#game-guide").show();
            if($(this).attr("id") == "lv1"){
                $("#game-title-section").attr("src","./resources/img/level1.png");
                $("#profile").attr("src","./resources/img/wantedlv1.jpg");
                $("#lv-guide").append(scriptlv1);
                

                $(".close_img").click(function(){
                    $("#game-guide").hide();
                    level= 1;
                    min= 5; sec= 30;
                    timer = setInterval(setTime, 1000);
                    update_score = 1;
                    life_count = 5;
                    damage_count = 0;
                    //p_attack = 0;
                    brickColumnCount= 12;
                    brickRowCount = 3;
                    setLife();
                    brickInit();
                    startGame();

                });
                
            }
            if($(this).attr("id") == "lv2"){
                
                $("#game-title-section").attr("src","./resources/img/level2.png");
                $("#profile").attr("src","./resources/img/wantedlv2.jpg");
                $("#lv-guide").append(scriptlv2);
                

                $(".close_img").click(function(){
                    $("#game-guide").hide();
                    level= 1;
                    min= 5; sec= 30;
                    timer = setInterval(setTime, 1000);
                    update_score = 1;
                    life_count = 5;
                    damage_count = 0;
                    //p_attack = 0;
                    brickColumnCount= 12;
                    brickRowCount = 3;
                    setLife();
                    brickInit();
                    startGame();

                });
            }
            if($(this).attr("id") == "lv3"){
                
                $("#game-title-section").attr("src","./resources/img/level3.png");
                $("#profile").attr("src","./resources/img/wantedlv3.png");
                $("#lv-guide").append(scriptlv3);
                

                $(".close_img").click(function(){
                    $("#game-guide").hide();
                    level= 1;
                    min= 5; sec= 30;
                    timer = setInterval(setTime, 1000);
                    update_score = 1;
                    life_count = 5;
                    damage_count = 0;
                    //p_attack = 0;
                    brickColumnCount= 12;
                    brickRowCount = 3;
                    setLife();
                    brickInit();
                    startGame();

                });
            }
            $("#game-level").hide();
        })
    })
    /*
    $("#game-home").click(function(){
        $("#game-home-content")
    })
    */
    $("#go-back").click(function(){
        window.location.replace("main.html");
    })

    $(window).resize(function(){
        change_position($(".popup-pre"))
    })
    

    $("#end-btn").click(function(){
        $("#game-overview").fadeOut();
        window.location.replace("main.html");
    });

})

function startGame(){
    setTimeout(function(){
        calc = setInterval(setScore,10);  
        $("#game").show();
        
        shuffleItem();
        gameTimer = setInterval(draw, 10);
    },2000);


    
}


function shuffleItem(){
    function shuffleItemHandler(){

        if(blockUp == false){
            var now = $(".item").find('img');
            var next = $(".next-item").find('img');
            console.log(next.width()*3);
            now.width(next.width()*3);
            blockWidth = now.width();
            blockHeight = now.height();
            next.width(blockSize[Math.floor(Math.random()*4)]/3);
        }
    }
    blockShuffleTimer = setInterval(shuffleItemHandler,2000);
}

function setTime(){
    if(sec == 0 && min == 0){
        clearInterval(timer);
        clear = false;
    }
    sec--;
    if(sec == 0){
       min--;
       sec = 59;
    }
    document.getElementById("time").innerHTML = "제한시간: " +min+":"+(sec<10 ? 0+sec : sec);
}

function setScore(){
    if(life_count == 0 || (min == 0 && sec == 0)) clearInterval(calc);
    //공이 블럭을 맞췄을 때 score 획득
    document.getElementById("score").innerHTML = "SCORE  " + score;
}

function setLife(){
    for(var i=0;i<life_count;i++){
        var create_img = document.createElement('img');
        $(create_img).attr("class","l_img");
        $(create_img).attr("src", "resources/img/life2.png");
        $(create_img).width("50px").height("50px");
        $("#life").prepend(create_img);
    }
}

function resetLife(){   
    damage_count++;
    for(var i=0;i<damage_count;i++){
        var imgs = $("#life img").eq(i); 
        imgs.attr("src", "resources/img/life1.png");
    }
}

function change_position(obj){
	var l=($(window).width()-obj.width())/2;
	var t=($(window).height()-obj.height())/2;
	obj.css({top:t,left:l});
}


function showScript(){
    var page = 0;
    timeScript = setInterval(function(){
        if(page == script.length-1){
            clearInterval(timeScript);
            $("#keep-btn").text("계속하기");
        }
        document.getElementById("game-script").innerHTML += script[page];
        page++;
    },2000);

    
    
}

var itemSize = [150,100,50,25];

function gameOver(){
    bricksCheck();
    if(life_count == 0 || (min == 0 && sec == 0)){
        clear = false;
    }
    clearInterval(gameTimer);
    $("#game").hide();
    $("#game-overview").fadeIn();
    showResult();
    
}

function bricksCheck(){
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].v == 0) clear = true; 
        }
    }
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].v == 1) clear = false; 
        }
    }
}

function showResult(){
    if(clear==true)
    {
        var img = $("#game-result").find("img");
        img.attr("src","/resources/img/win.png");
    }
    else
    {
        var img = $("#game-result").find("img");
        img.attr("src","/resources/img/lose.png");
    }
}
var script = [
    "어느 평화로운 농장에는...<br><br>",
    "젊은 공돌이 농부가 거위 건덕이, 고양이 만쥬, 그리고 황소 쿠(KU)를 데리고 살고 있었다.<br><br>",
    "찜통더위의 어느 여름 날..<br><br>",
    "건덕이와 만쥬, 쿠는 선풍기 하나 없이 허덕이고 있다.<br><br>",
    "그런데 옆 주인집을 보니, 혼자서 에어컨을 틀고 여유롭게 누워있는 농부를 발견한다!!!<br><br>",
    "이에 화가 난 동물들은...!<br><br>",
    "<br><strong>반란을 결심하고 성공한다.</strong><br><br><br>",
    "쫓겨난 농부(플레이어)는 의기양양한 동물들을 보고서 좌절하지만...<br><br>",
    "다시 자신의 농장을 되찾기 위해 힘차게 길을 나선다...<br><br>"
]


var scriptlv1 = 
    "1단계 : 건덕이(거위)<br> <br>* 건덕이의 특별 능력이 부여된 블록과 충돌하면 새똥을 떨어트려 특정 위치에는 슬라이드를 배치할 수 없게 만듭니다. <br>";

var scriptlv2 =
    "2단계 : 만쥬(고양이)<br> <br>* 만쥬의 특별 능력이 부여된 블록과 충돌하면 플레이어의 라이프를 하나 잃게 됩니다. <br>";
    
var scriptlv3 =
    "3단계 : 쿠(황소)<br> <br>* 쿠의 특별 능력이 부여된 블록은 다른 일반 블록들과 다르게 매우 튼튼하여 3회를 충돌시켜야 블록을 제거할 수 있습니다.<br>";
                    
    
    
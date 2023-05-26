
var img;
var brickImg;
$(function(){
    img = new Image();
    brickImg = new Image();
    stone = new Image();
    stone.src = 'resources/img/stone.png';
    img.src = 'resources/img/block1.jpeg';
    brickImg.src = 'resources/img/farmer.png';


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
    $("#lv1").css({"background":"url(resources/img/lv1.jpeg)"});
    $("#lv2").css({"background":"url(resources/img/lv2.jpeg)"});
    $("#lv3").css({"background":"url(resources/img/lv3.jpeg)"});
    $(".game-level-button").css({"background-size": "cover"});


    $(".game-level-button").each(function(){
        $(this).click(function(){
            
            
            if($(this).attr("id") == "lv1"){
                level= 1;
                getLevel()
            }
            if($(this).attr("id") == "lv2"){
                level=2;
                getLevel();
            }
            if($(this).attr("id") == "lv3"){
                level = 3;
                getLevel();
            }
            
        })
    })

    function getLevel(){
        
        change_position($(".popup-pre"));
        
        $("#game-guide").show();
        
        if(level == 1){
            $("#lv-guide").html(scriptlv1);
            $(".close_img").click(function(){
                $("#game-guide").hide();
                $("#myCanvas").css({"background-image":"url(resources/img/lv1background.jpeg)"});
                img.src = 'resources/img/block1.jpeg';
                min= 5; sec= 30;
                timer = setInterval(setTime, 1000);
                update_score = 1;
                life_count = 5;
                damage_count = 0;
                //p_attack = 0;
                brickColumnCount= 1;
                brickRowCount = 1;
                setLife();
                brickInit();
                startGame();

            });
        }
        if(level == 2){
            $("#lv-guide").html(scriptlv2);
            $(".close_img").click(function(){
                $("#game-guide").hide();
                $("#myCanvas").css({"background-image":"url(resources/img/lv2background.jpeg)"});
                img.src = 'resources/img/block2.jpeg';
                min= 5; sec= 30;
                timer = setInterval(setTime, 1000);
                update_score = 1;
                life_count = 5;
                damage_count = 0;
                //p_attack = 0;
                brickColumnCount= 1;
                brickRowCount = 1;
                setLife();
                brickInit();
                startGame();

            });
        }
        if(level == 3){
            $("#lv-guide").html(scriptlv3);
            $(".close_img").click(function(){
                $("#game-guide").hide();
                $("#myCanvas").css({"background-image":"url(resources/img/background2.jpeg)"});
                img.src = 'resources/img/block3.jpeg';
                min= 5; sec= 30;
                update_score = 1;
                life_count = 5;
                damage_count = 0;
                //p_attack = 0;
                brickColumnCount= 1;
                brickRowCount = 1;
                setLife();
                brickInit();
                startGame();

            });
        }
        $("#game-level").hide();
    }
  
    
    $("#go-back").click(function(){
        window.location.replace("main.html");
    })

    $(window).resize(function(){
        change_position($(".popup-pre"))
    })
    
    $("#game-result-lose h2:nth-of-type(1)").click(function(){
        score = 0;
        getLevel();
    })
    $("#game-result-lose h2:nth-of-type(2)").click(function(){
        window.location.replace("main.html");
    })
    
    $("#game-result-12 h2:nth-of-type(1)").click(function(){
        level = (level ==3) ? 3:level+1;
        getLevel();
    })
    $("#game-result-12 h2:nth-of-type(2)").click(function(){
        window.location.replace("main.html");
    })

    $("#game-result-3").click(function(){
        window.location.replace("main.html");
    })
    


})

function startGame(){
    clear = false;
    $("#game-overview").hide();
    $("#game-startview").show();
    
    setTimeout(function(){
        $("#game-startview").fadeOut();
        calc = setInterval(setScore,10);  
        timer = setInterval(setTime, 1000);
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 2;
        dy = -2;
        $("#game").fadeIn();
        shuffleItem();
        gameTimer = setInterval(draw, 10);
    },500);


    
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
    sec--;
    if(sec == 0){min--;sec = 59;}
    document.getElementById("time").innerHTML = "제한시간: " +min+":"+(sec<10 ? "0"+sec : sec);
}

function setScore(){
    document.getElementById("score").innerHTML = "SCORE  " + score;
}

function setLife(){
    $("#life").html("");
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



function gameOver(){
    if(life_count == 0 || (min == 0 && sec == 0)){
        clearInterval(calc);
        clearInterval(timer);
        clearInterval(gameTimer);
        $("#game").hide();
        $("#game-overview").fadeIn();
        setGameResult();
    }
    else if(clear == true){
        clearInterval(gameTimer);
        clearInterval(calc);
        clearInterval(timer);
        $("#game").hide();
        $("#game-overview").fadeIn();
        setGameResult();
    }
    
}

function bricksCheck(){
    var flag = true;
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].v == 1){
                flag = false;
                break;
            }
        }
    }
    if(flag == true) clear = true;
}

function setGameResult(){
    $("#game-result").hide();
    $("#score-result").hide();
    
    document.getElementById("score-result").innerHTML = "SCORE:" + score;
    if(clear==true)
    {
        var img = $("#game-result").find("img");
        img.attr("src","resources/img/win.png");
    }
    else
    {
        var img = $("#game-result").find("img");
        img.attr("src","resources/img/lose.png");
    }
    $("#game-result").show();
    $("#score-result").show();
    
    if(clear == false){
        $("#game-result-3").hide();
        $("#game-result-12").hide();
        $("#game-result-lose").show();
    }
    else{
        if(level == 1 || level == 2){
            $("#game-result-lose").hide();
            $("#game-result-3").hide();
            $("#game-result-12").show();
        }
        else if(level == 3){
            $("#game-result-lose").hide();
            $("#game-result-12").hide();
            $("#game-result-3").show();
        }
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
    "첫번쨰 텃밭에는 건덕이가 있군..<br>후딱 해치우고 내 농장을 되찾겠어!";

var scriptlv2 =
    "아니 건덕이보다 더 짜증나는 만쥬잖아<br>나는 빨리 시원하게 쉬고싶다!";
    
var scriptlv3 =
    "산 넘어 산이군 이번엔 뭐야.. !<br>아니 쿠 잖아 이런 해치우자!";
                    
    
    
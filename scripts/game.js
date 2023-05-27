
var img;
var brickImg;
$(function(){
    audio = new Audio('resources/aud/lv1ma.mp3');
    ouch = new Audio('resources/aud/holy.mp3');
    wa = new Audio('resources/aud/ouch.mp3');
    img = new Image();
    brickImg = new Image();
    stone = new Image();
    stone.src = 'resources/img/stone.png';
    img.src = 'resources/img/bricka.png';
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
        audio.src="resources/aud/flag.mp3";
        audio.volume =0.2;
        audio.play();
        $("#game-guide").show();
        
        if(level == 1){
            showGameScript(level);
            $(".close_img").click(function(){
                $("#game-guide").hide();
                $("#myCanvas").css({"background-image":"url(resources/img/lv1background.png)"});
                audio.src = 'resources/aud/lv1ma.mp3';
                min= 5; sec= 30;
                update_score = Math.floor(Math.random()*10+1);
                life_count = 5;
                damage_count = 0;
                brickColumnCount= 10;
                brickRowCount = 1;
                setLife();
                brickInit();
                startGame();

            });
        }
        if(level == 2){
            showGameScript(level);
            
            $(".close_img").click(function(){
                $("#game-guide").hide();
                $("#myCanvas").css({"background-image":"url(resources/img/lv2background.png)"});
                audio.src = 'resources/aud/lv2ma.mp3';
                min= 5; sec= 30;
                update_score = Math.floor(Math.random()*30+1);
                life_count = 4;
                damage_count = 0;
                brickColumnCount= 10;
                brickRowCount = 2;
                setLife();
                brickInit();
                startGame();

            });
        }
        if(level == 3){
            showGameScript(level);
            
            $(".close_img").click(function(){
                $("#game-guide").hide();
                $("#myCanvas").css({"background-image":"url(resources/img/lv3background.png)"});
                audio.src = 'resources/aud/lv3ma.mp3';
                min= 5; sec= 30;
                update_score = Math.floor(Math.random()*50+1);
                life_count = 3;
                damage_count = 0;
                brickColumnCount= 10;
                brickRowCount = 3;
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
    
   var muted=false;

   $("#vol").click(function(){
    
     audio.muted = (audio.muted)? false: true;
     var img = (audio.muted)? "resources/img/soundoff.png" : "resources/img/sound.png";
     $("#vol").attr("src",img);
     wa.muted = (wa.muted)? false: true;

   })
})

function startGame(){
    if(isRun == false){
        isRun = true;
        clear = false;
        console.log("s");
        
        $("#game-overview").hide();
        $("#game-startview").show();
        var startSong = new Audio("resources/aud/start.mp3");
        startSong.play();
        
        
        setTimeout(function() {
            $("#game-startview").fadeOut();
            calc = setInterval(setScore,10);  
            timer = setInterval(setTime, 1000);
            x = canvas.width/2;
            y = canvas.height-30;
            dx = 2;
            dy = -2;
            ballRadius = 20;
            audio.volume = 0.3;
            audio.loop = true;
            audio.play();
            $("#game").fadeIn();
            shuffleItem();
            gameTimer = setInterval(draw, 10);
        },1500);
    }
}


function shuffleItem(){
    blockShuffleTimer = setInterval(function(){
        if(blockUp == false){
            var now = $(".item").find('img');
            var next = $(".next-item").find('img');
            console.log(next.width()*3);
            now.width(next.width()*3);
            blockWidth = now.width();
            blockHeight = now.height();
            next.width(blockSize[Math.floor(Math.random()*4)]/3);
        }
    },1000);
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
    var imgs = $("#life img").eq(-damage_count); 
    imgs.attr("src", "resources/img/life1.png");
    
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
            audio.pause();
            $("#keep-btn").text("계속하기");
        }
        document.getElementById("game-script").innerHTML += script[page];
        page++;
    },2000);

}



function gameOver(){
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

    if(life_count == 0 || (min == 0 && sec == 0) || clear == true){
        isRun = false;
        $("#game").hide();
        $("#game-overview").fadeIn();
        setGameResult();
    }
    
}
function setGameResult(){
    clearInterval(calc);
    clearInterval(timer);
    clearInterval(gameTimer);
    clearInterval(blockShuffleTimer);

    audio.pause();
    audio.currentTime = 0;
    
    
    $("#game-result").hide();
    $("#score-result").hide();
    $("#script-result").hide();
    document.getElementById("score-result").innerHTML = "SCORE:" + score;
    if(clear==true)
    {
        audio.src = "resources/aud/clear.mp3";
        $("#logo-result").attr("src","resources/img/win.png");
        if(level == 3) $("#script-result").html("농장을 되찾았다!!<br><br>이제 두다리 쭉 뻗고 자야겠군!");
        else $("#script-result").text("해치웠나..?");
    }
    else
    {
        audio.src = "resources/aud/gameover.mp3";
        $("#logo-result").attr("src","resources/img/lose.png");
        $("#script-result").text("실패했나..?");
    }
    audio.play();
    $("#game-result").show();
    $("#score-result").show();
    $("#script-result").show();
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
    "농장은 건덕이, 만쥬, 쿠가 만들어논 벽돌 바리게이트에 당황하지만<br><br>",
    "다시 자신의 농장을 되찾기 위해 힘차게 벽돌을 부셔 나간다...<br><br>"
]

function showGameScript(lv){
    var scp = (lv==1)?scriptlv1 : ((lv==2)? scriptlv2 : scriptlv3);
    $("#lv-guide").html("");
    var page = 0;
    timeScript = setInterval(function(){
        if(page == scp.length-1){
            clearInterval(timeScript);
        }
        
        document.getElementById("lv-guide").innerHTML += scp[page];
        page++;
    },2000);

}

var scriptlv1 = [
    "첫번째 텃밭에는 건덕이가 있군..<br><br>",
    "다행이 건덕이가 만들어논 벽돌은 꽤나 허술하다<br><br>",
    "저 멀리서 돌을 던져서 벽돌을 파괴해야겠어!<br><br>",
    
    "좋아 가보자고!"
]
var scriptlv2 =[
    "이번엔 만쥬잖아..!<br><br>",
    "만쥬는 건덕이보다 조금 까다롭군, 역시 벽돌이 더 많아졌어<br><br>",
    "여긴 바닥에 돌 크기가 여러개네.. 랜덤으로 돌을 가져와야겠는걸!<br><br>",
    "좋아 가보자고!"
]

    "산 넘어 산이군 이번엔 뭐야.. !<br>아니 쿠 잖아 이런 해치우자!";
                    
var scriptlv3 =[
    "드디어 농장에 거의 다 온것같다...<br><br>",
    "근데 이번엔 ... 쿠 잖아!<br><br>",
    "힘도 쎄서 그런지 벽돌 수도 엄청 많아졌군<br><br>",
    "왠지.. 똑같은 속도로 돌을 못던질 것같은데..?<br><br>",
    "좋아 가보자고!"
]

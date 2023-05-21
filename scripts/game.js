var timeScript;

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
            if($(this).attr("id") == "lv1"){
                level= 1;
                min= 5;
                sec= 30;
                timer = setInterval(setTime, 1000);
                life_count = 5;
                setLife();
            }
            if($(this).attr("id") == "lv2"){
                level= 2;
                min= 4;
                sec= 30;
                timer = setInterval(setTime, 1000);
                life_count = 4;
                setLife();
            }
            if($(this).attr("id") == "lv3"){
                level= 3;
                min= 3;
                sec= 30;
                timer = setInterval(setTime, 1000);
                life_count = 3;
                setLife();
            }
            console.log(level);
            $("#game-level").hide();
            $("#game").show();
        })
    })
    $("#go-back").click(function(){
        window.location.replace("main.html");
    })
    // var interval = 1000;
    // var timer;
    // var container = $('.slide-selectbar');
    // function switchImg(){
    //     var imgs = container.find('img');
    //     var first = imgs.eq(0);
    //     var second = imgs.eq(Math.random() * (2 - 1) + 1);
    //     first.appendTo(container).hide();
    //     second.show();
    // }
    // timer = setInterval(switchImg,interval);
})

function setTime(){
    if(sec == 0 && min == 0){
        clearInterval(timer);
    }
    sec--;
    if(sec == 0){
       min--;
       sec = 59;
    }
    document.getElementById("time").innerHTML = "제한시간: " +min+":"+(sec<10 ? 0+sec : sec);
}

function setLife(){
    for(var i=0;i<life_count;i++){
        var create_img = document.createElement('img');
        $(create_img).attr("class","l_img");
        $(create_img).attr("src", "resources/img/life2.png");
        $(create_img).width("50px").height("50px");
        $("#life").append(create_img);
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
            $("#keep-btn").show();
        }
        document.getElementById("game-script").innerHTML += script[page];
        page++;
    },2000);
    
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
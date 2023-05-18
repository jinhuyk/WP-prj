$(function(){
    $("#game").hide();
    $("#lv1").css({"background":"url(../resources/img/lv1.jpeg)"});
    $("#lv2").css({"background":"url(../resources/img/lv2.jpeg)"});
    $("#lv3").css({"background":"url(../resources/img/lv3.jpeg)"});
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

$("#goback").click(function(){
    window.location.replace("main.html");
})
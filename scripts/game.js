$(function(){
    $("#lv1").css({"background":"url(../resources/img/lv1.jpeg)"});
    $("#lv3").css({"background":"url(../resources/img/lv3.jpeg)"});
    $(".game-level-button").css({"background-size": "cover"});
    $(".game-level-button").each(function(){
        $(this).click(function(){
            if($(this).attr("id") == "lv1"){
                level= 1;
                min= 1;
                second= 30;
                setInterval(timeSet(min,second), 1000);
            }
            if($(this).attr("id") == "lv2"){
                level= 2;
            }
            if($(this).attr("id") == "lv3"){
                level= 3;
            }
            console.log(level);
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

function timeSet(m,s){
    s--;
    if(s == 0){
        m--;
        s=60;
    }
    $("#time").innerHTML = "제한시간: " +m+":"+s;
}
$(document).ready(function(){
    $("#game-description").click(function(){
        var content = "#game-description-content";
        $(content).addClass("popup");
        change_position($(".popup"));
        $(content).show();
    });

    $("#engineer-info").click(function(){
        var content = "#engineer-info-content";
        $(content).addClass("popup");
        change_position($(".popup"));
        $(content).show();
    });
    
    $("#option").click(function(){
        var content = "#option-content";
        $(content).addClass("popup");
        change_position($(".popup"));
        $(content).show();
    });

    // $(".popup").click(function(){
    //     console.log("pop");
    //     var pop=$(this);
    //     pop.hide();
       
    // });

    $("#game-start-btn").click(function(){
        
    });

    $(".close_img").click(function(){
        $(".popup").hide();
    });

})

function change_position(obj){
	var l=($(window).width()-obj.width())/2;
	var t=($(window).height()-obj.height())/2;
	obj.css({top:t,left:l});
}
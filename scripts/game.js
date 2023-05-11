$(function(){
    var interval = 1000;
    var timer;
    var container = $('.slide-selectbar');
    function switchImg(){
        var imgs = container.find('img');
        var first = imgs.eq(0);
        var second = imgs.eq(Math.random() * (2 - 1) + 1);
        first.appendTo(container).hide();
        second.show();

    }
    timer = setInterval(switchImg,interval);
})
$(document).ready(function () {
    $('#gnb>li').hover(function () {
        $('.submenu, #mBack', this).stop().slideDown();
    }, function () {
        $('.submenu, #mBack', this).stop().slideUp();
    });
    var idx = 0;
    var scnt = $('#slide>a').length-1;
    slide();
    function slide(){
        ms = setInterval(function(){
            $('#slide>a').eq(idx).animate({left: '-100%'}, 800).animate({left:'100%'}, 0);
            idx==scnt?idx=0:idx++;
            $('#slide>a').eq(idx).animate({ left: 0 }, 800);
        }, 4000);
    }

    $('#slide').hover(function(){
        clearInterval(ms);
    }, function(){
        slide();
    });


    $('.pop').click(function () {
        $('#modal').fadeIn();
    });
    $('.close').click(function () {
        $('#modal').toggle();
    });

});
$(document).ready(function () {
    $('#gnb>li').hover(function() {
        $('.submenu',this).stop().slideDown();
    }, function() {
        $('.submenu',this).stop().slideUp();
    });

    
    var idx = 0;
    slider();
    function slide(){
        setInterval(function() {
            $('#slide>a').eq(0).animation({left: '-100%'}, 800).animation({left: '100%'},0);
            idx++==2?idx=0:idx++;
            $('#slide>a').eq(1).animation({left: 0}, 800);
        }, 4000);
    }
    

    $('#slide').hover(function() {
        clearInterval(1);
    }, function(){

    });
});
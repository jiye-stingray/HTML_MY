//$(선택자).매서드(핸들러()); 
$(document).ready(function() {
    $('#gnb>li').hover(function() {
        $('.submenu,#mBack').stop().slideDown();
    },function() {
        $('.submenu,#mBack').stop().slideUp();
    } );

    var idx = 0;
    setInterval(function() {
        $('#slide>a').eq(idx).fadeOut();
        // if(idx == 2) {idx = 0} else {idx++}
        idx==2? idx=0: idx++;
        $('#slide>a').eq(idx).fadeIn();
    }, 3000)

    $('.pop').click(function() {
        $('#modal').fadeIn();
    })

    $('.close').click(function (){
        $('#modal').toggle();
    });

    $('#site').change(function() {
        window.open($(this).val());
    });
});
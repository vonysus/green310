$(function(){

    // 윈도우의 높이값을 찾아 section에 높이값에 대입한다.
    var wht = $(window).height()
    $('section').height(wht);

    // 화면크기가 바뀌었을 때, 윈도우의 높이값을 찾아 section에 높이값을 대입한다.
    $(window).resize(function(){

        var wht = $(window).height()
        $('section').height(wht);
    })

    // gnb li를 클릭했을 때, li의 순번을 찾아라. 클릭한 나 자신의 클래스 on 값을 더해라.
    $('.gnb li').click(function(){

        var wht = $(window).height();
        var i = $(this).index();

        $('.gnb li').removeClass('on');
        $(this).addClass('on');

        $('html, body').stop().animate({'scrollTop':wht*i},1400,'easeOutBounce')

    })

    // section에서 마우스 휠 했을 때, 올리면 바뀌고 내리면 바뀌어라를 실행
    $('section').mousewheel(function(event,delta){ //event:실시간 값을 받아와라 & delta:마우스 휠

        // 마우스를 올렸을 때
        if(delta>0) {
            var prev = $(this).prev().offset().top //지금 나의 이전 요소의 위치값을 찾아라.
            $('html, body').animate({'scrollTop':prev},1400,'easeOutBounce')
        }

        // 마우스를 내렸으 때
        else if(delta<0) {
            var next = $(this).next().offset().top
            $('html, body').stop().animate({'scrollTop':next}, 1400, 'easeOutBounce')
        }
    });

    // 스크롤 했을 때, 스크롤의 위치값을 찾고 일정 높이였을 떄 li의 on 값을 더해라
    $(window).scroll(function(){

        var wht = $(window).height();
        var sc = $(this).scrollTop();
        $('h1').text(sc);

        // 반복문을 활용한 스크립트 축약
        for(var a = 0; a<5; a++) {
            if(sc>=wht*a && sc<wht*(a+1)) {
                $('.gnb li').removeClass('on')
                $('.gnb li').eq(a).addClass('on')
            }
        }





    })







})
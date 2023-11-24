$(function(){

    // 윈도우의 높이값을 찾아 section에 높이값에 대입한다.

    var wht = $(window).height()
    $('section').height(wht);

    // 화면크기가 바뀌었을때,윈도우의 높이값을 찾아 section에 높이값을 대입한다.
    $(window).resize(function(){
    var wht = $(window).height()
    $('section').height(wht);

    });

    // gnb li를 클릭했을 때, li의 순번을 찾아라. 클릭한 나 자신의 클래스 On 값을 더해라.
    $('.gnb li').click(function(){
        
        var wht = $(window).height();

        var i = $(this).index();
        console.log(i)

    $('.gnb li').removeClass('on')
    $(this).addClass('on');

    $('html,body').stop().animate({'scrollTop':wht*i},1400,'easeOutBounce')
    });

    // section에서 마우스 휠을 했을 때, 올리면 바뀌고 내리면 바뀌어라 를 실행
    $('section').mousewheel(function(event,delta){

        event.preventDefault()

        // 마우스를 올렸을 때
        if(delta>0){
            var prev = $(this).prev().offset().top //지금 나의 이전 요소의 위치값을 찾아라.
            $('html,body').animate({'scrollTop':prev},1400,'easeOutBounce')
        }


        // 마우스를 내렸을 때
        else if(delta<0) {
            var next = $(this).next().offset().top
            $('html,body').stop().animate({'scrollTop':next},1400,'easeOutBounce')
        }
    });


    // 스크롤 했을 때, 스크롤의 위치값을 찾고 일정 높이였을 때 li의 on 값을 더해라
    $(window).scroll(function(){
        var wht = $(window).height();
        var sc = $(this).scrollTop();
        $('h1').text(sc);

        // if(sc>=0 && sc<wht*1) {
        //     $('.gnb li').removeClass('on')
        //     $('.gnb li').eq(0).addClass('on')
        // }

        // if(sc>=wht*1 && sc<wht*2) {
        //     $('.gnb li').removeClass('on')
        //     $('.gnb li').eq(1).addClass('on')
        // }

        // if(sc>=wht*2 && sc<wht*3) {
        //     $('.gnb li').removeClass('on')
        //     $('.gnb li').eq(2).addClass('on')
        // }

        // if(sc>=wht*3 && sc<wht*4) {
        //     $('.gnb li').removeClass('on')
        //     $('.gnb li').eq(3).addClass('on')
        // }

        // 반복문을 활용한 스크립트 축약
        for(var a = 0; a<5; a++) {
            if(sc>=wht*a && sc<wht*(a+1)) {
            $('.gnb li').removeClass('on')
            $('.gnb li').eq(a).addClass('on')
            }
        }
    });

    // section에서 마우스가 움직일 때, 이미지가 움직여라.
    $('section').mousemove(function(e){
        var x = e.pageX;
        var y = e.pageY;

        var cx = e.clientX;
        var cy = e.clientY;

        // 임시설정
        $('.gnb li').eq(0).text(x)
        $('.gnb li').eq(1).text(y)
        $('.gnb li').eq(2).text(cx)
        $('.gnb li').eq(3).text(cy)

        $('.i11').css({'right': 20-(cx/30), 'bottom': 20-(cy/20)})
        $('.i12').css({'right': 130+(cx/30), 'bottom': -40+(cy/20)})
        $('.i13').css({'right': 60+(cx/40), 'bottom': 180+(cy/40)})

        $('.i21').css({'right': 130+(cx/30), 'bottom': -480+(cy/20)})
        $('.i22').css({'right': -40-(cx/30), 'bottom': -40-(cy/20)})

        $('.i31').css({'right': 180-(cx/30), 'bottom': 30-(cy/20)})
        $('.i32').css({'right': 110+(cx/30), 'bottom': -270+(cy/20)})
        $('.i33').css({'right': -70+(cx/40), 'bottom': -130+(cy/40)})

        $('.i41').css({'right': 20+(cx/30), 'bottom': -120+(cy/30)})
        $('.i42').css({'right': 0-(cx/40), 'bottom': 180-(cy/40)})

        



    })




})
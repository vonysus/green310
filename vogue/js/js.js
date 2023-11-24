// 제이쿼리설정
$(function(){

    // far-bars를 클릭했을 때, nav에 on이라는 클래스를 더하고
    // section에 on이라는 클래스를 더한다.

    $('.fa-bars').click(function(){

        
        $('nav').addClass('on')
        $('section').addClass('on')
        $(this).fadeOut(0.8)
    });


    // nav li를 클릭했을 때, 순서를 찾아서 변수로 바꿔라
    // section>div의 순번에 맞게 class on값을 더해라
    $('nav li').click(function(){

        var i = $(this).index();
        $('section>div').removeClass('on')
        $('section>div').eq(i).addClass('on')

        $('nav').removeClass('on')
        $('section').removeClass('on')
        $('.fa-bars').fadeIn(0.4)

    })






})
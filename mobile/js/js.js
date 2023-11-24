// 제이쿼리 실행문
$(function(){

var time = setInterval(function(){

    // 변수에 내장 객체 시간 정보 저장

    var now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var hNum
    var mNum
    var sNum

    if(hr>=10){
        hNum = hr
    }
    else {
        hNum = '0'+ hr
    }
    if(min>=10){
        mNum = min
    }
    else {
        mNum = '0'+ min
    }
    if(sec>=10){
        sNum = sec
    }
    else {
        sNum = '0'+ sec
    }

    // figure 구간 안에 있는 span에 출력하기

    $('p span').eq(0).text(hNum)
    $('p span').eq(1).text(mNum)
    $('p span').eq(2).text(sNum)

    // 15보다 크면 afternoon으로 변경
    if(hr>=15) {
        $('#wrap').removeClass()
        $('#wrap').addClass('afternoon')
    }

},1000);


// nav에 li를 클릭할 때마다 #wrap의 테마가 바뀌게
    // li 자식의 내용을 찾기
    // 자식의 내용을 변수로 저장

// 변수를 wrap의 addClass 이름을 더하기
    // 이때, class를 더하기 전 모든 클래스를 먼저 없애기

$('nav li').click(function(e){
    e.preventDefault();
    var className = $(this).children('a').text()
    
    $('#wrap').removeClass()
    $('#wrap').addClass(className)



    })















})
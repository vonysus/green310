// 제이쿼리선언문

$(document).ready(function(){


    var a = 0;
    $('.left').click(function(){

        if(a<0)
        a++;
        
        console.log(a)
        $('.container ul').css('left', (60*a)+'%')




    })

    $('.right').click(function(){

        if(a>-2)
        a--;
        console.log(a);
        $('.container ul').css('left', (60*a)+'%')
        




    })

    
})
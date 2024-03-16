$(function(){

    // trailer 이미지 클릭시 main 이미지 변경
    $('.product .imgBox .trailer ul li').click(function(){
        let i = $(this).index();
        console.log(i)
        $('.product .imgBox .main ul li').removeClass('on');
        $('.product .imgBox .main ul li').eq(i).addClass('on');
        $('.product .imgBox .trailer ul li').removeClass('on');
        $('.product .imgBox .trailer ul li').eq(i).addClass('on');
    });

    // option 설정
    // 색상 버튼 클릭시 옵션 선택 창 보이기
    $('.select-wrapper .option').click(function(){
        $('.select-wrapper .listbox').toggleClass("hide");
    });

    $('.select-wrapper .listbox li').click(function(){
        let option = $(this).index();
        console.log(option);
        $('.select-option li').eq(option).addClass('show');
    });

    $('.select-option .white .cancle').click(function(){
        $('.select-option .white').removeClass('show');
    });
    $('.select-option .lightblue .cancle').click(function(){
        $('.select-option .lightblue').removeClass('show');
    });
    $('.select-option .red .cancle').click(function(){
        $('.select-option .red').removeClass('show');
    });
    $('.select-option .black .cancle').click(function(){
        $('.select-option .black').removeClass('show');
    });













})
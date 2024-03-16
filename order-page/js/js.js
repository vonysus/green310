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


    // select-option li 추가
    // 화이트 li cnrk
    $('.select-wrapper .option .listbox li:nth-child(1)').click(function(){
        // 이미 추가되었는지 여부를 나타내는 변수
        var isAlreadyAdded = $('.select-option ul .white').length > 0;
    
        // 이미 추가되지 않았다면 요소를 추가합니다.
        if (!isAlreadyAdded) {
            var html_1 = '<li class="white">' +
                '<div>' +
                    '<p class="title">화이트</p>' +
                    '<div class="optionBox">' +
                        '<div class="plus-minus">' +
                            '<button class="minus" type="button"><i class="ri-subtract-line"></i></button>' +
                            '<form action="#">' +
                                '<input class="input-1 a" type="text" value="1">' +
                            '</form>' +
                            '<button class="plus" type="button"><i class="ri-add-line"></i></button>' +
                        '</div>' +
                        '<span class="option-price">' +
                            '<span class="option-price-1">119,000</span>' +
                            '원' +
                            '<div class="cancle">' +
                                '<i class="ri-close-line"></i>' +
                            '</div>' +
                        '</span>' +
                    '</div>' +
                '</div>' +
            '</li>';
        
            // 생성된 요소를 원하는 위치에 추가
            $('.select-option ul').append(html_1);
        }
    });

    // 라이트블루 li 추가
    $('.select-wrapper .option .listbox li:nth-child(2)').click(function(){
        // 이미 추가되었는지 여부를 나타내는 변수
        var isAlreadyAdded = $('.select-option ul .lightblue').length > 0;
    
        // 이미 추가되지 않았다면 요소를 추가합니다.
        if (!isAlreadyAdded) {
            var html_2 = '<li class="lightblue">' +
                '<div>' +
                    '<p class="title">라이트블루</p>' +
                    '<div class="optionBox">' +
                        '<div class="plus-minus">' +
                            '<button class="minus" type="button"><i class="ri-subtract-line"></i></button>' +
                            '<form action="#">' +
                                '<input class="input-1 b" type="text" value="1">' +
                            '</form>' +
                            '<button class="plus" type="button"><i class="ri-add-line"></i></button>' +
                        '</div>' +
                        '<span class="option-price">' +
                            '<span class="option-price-1">119,000</span>' +
                            '원' +
                            '<div class="cancle">' +
                                '<i class="ri-close-line"></i>' +
                            '</div>' +
                        '</span>' +
                    '</div>' +
                '</div>' +
            '</li>';
        
            // 생성된 요소를 원하는 위치에 추가
            $('.select-option ul').append(html_2);
        }
    });

    // 레드 li 추가
    $('.select-wrapper .option .listbox li:nth-child(3)').click(function(){
        // 이미 추가되었는지 여부를 나타내는 변수
        var isAlreadyAdded = $('.select-option ul .red').length > 0;
    
        // 이미 추가되지 않았다면 요소를 추가합니다.
        if (!isAlreadyAdded) {
            var html_3 = '<li class="red">' +
                '<div>' +
                    '<p class="title">레드</p>' +
                    '<div class="optionBox">' +
                        '<div class="plus-minus">' +
                            '<button class="minus" type="button"><i class="ri-subtract-line"></i></button>' +
                            '<form action="#">' +
                                '<input class="input-1 c" type="text" value="1">' +
                            '</form>' +
                            '<button class="plus" type="button"><i class="ri-add-line"></i></button>' +
                        '</div>' +
                        '<span class="option-price">' +
                            '<span class="option-price-1">119,000</span>' +
                            '원' +
                            '<div class="cancle">' +
                                '<i class="ri-close-line"></i>' +
                            '</div>' +
                        '</span>' +
                    '</div>' +
                '</div>' +
            '</li>';
        
            // 생성된 요소를 원하는 위치에 추가
            $('.select-option ul').append(html_3);
        }
    });
    
    // 블랙 li 추가
    $('.select-wrapper .option .listbox li:nth-child(4)').click(function(){
        // 이미 추가되었는지 여부를 나타내는 변수
        var isAlreadyAdded = $('.select-option ul .black').length > 0;
    
        // 이미 추가되지 않았다면 요소를 추가합니다.
        if (!isAlreadyAdded) {
            var html_4 = '<li class="black">' +
                '<div>' +
                    '<p class="title">블랙</p>' +
                    '<div class="optionBox">' +
                        '<div class="plus-minus">' +
                            '<button class="minus" type="button"><i class="ri-subtract-line"></i></button>' +
                            '<form action="#">' +
                                '<input class="input-1 d" type="text" value="1">' +
                            '</form>' +
                            '<button class="plus" type="button"><i class="ri-add-line"></i></button>' +
                        '</div>' +
                        '<span class="option-price">' +
                            '<span class="option-price-1">119,000</span>' +
                            '원' +
                            '<div class="cancle style="background-color:red"">' +
                                '<i class="ri-close-line"></i>' +
                            '</div>' +
                        '</span>' +
                    '</div>' +
                '</div>' +
            '</li>';
        
            // 생성된 요소를 원하는 위치에 추가
            $('.select-option ul').append(html_4);
        }
    });
    
    // cancle 클릭시 안보이게
    $('.select-option').on('click', '.white .cancle', function() {
        $('.select-option ul .white').remove();
    });
    $('.select-option').on('click', '.lightblue .cancle', function() {
        $('.select-option ul .lightblue').remove();
    });
    $('.select-option').on('click', '.red .cancle', function() {
        $('.select-option ul .red').remove();
    });
    $('.select-option').on('click', '.black .cancle', function() {
        $('.select-option ul .black').remove();
    });

    // li 갯수를 계산하여 .last-num에 입력하는 함수
    function updateLastNum() {
        var numLi = $('.select-option ul li').length;
        $('.last-num').text(numLi);
    }

    // 페이지가 로드될 때와 li가 추가될 때마다 .last-num을 업데이트
    updateLastNum();

    // .select-option 내부에 있는 ul에 li가 추가될 때마다 .last-num을 업데이트
    $('.select-option ul').on('DOMNodeInserted', function() {
        updateLastNum();
    });

    $('.select-option').on('click', '.cancle', function() {
        // 클릭된 요소의 부모 li 요소의 클래스를 가져옵니다.
        var className = $(this).closest('li').attr('class');
    
        // 해당 클래스를 가진 li 요소를 제거합니다.
        $('.select-option ul .' + className).remove();
        
        // li 요소가 제거되면 .last-num을 업데이트합니다.
        updateLastNum();
    });


    // 금액 불러오기
    // 총 가격을 업데이트하는 함수
    function updateTotalPrice() {
        var numLi = $('.select-option ul li').length; // 현재 li 요소의 개수를 가져옵니다.
        var totalPrice = numLi * 119000; // li 요소 개수에 따른 총 가격을 계산합니다.
        $('.last-price').text(totalPrice.toLocaleString()); // 총 가격을 화면에 출력합니다.
    }

    // 페이지가 로드될 때 총 가격을 업데이트합니다.
    $(document).ready(function() {
        updateTotalPrice();
    });

    // li 요소가 추가되거나 제거될 때마다 총 가격을 업데이트합니다.
    $('.select-option ul').on('DOMNodeInserted DOMNodeRemoved', 'li', function() {
        updateTotalPrice();
    });

    // li 삭제 버튼이 클릭될 때 총 가격을 업데이트합니다.
    $('.select-option').on('click', '.cancle', function() {
        // li 요소가 삭제될 때마다 총 가격을 업데이트합니다.
        updateTotalPrice();
    });























});









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
        $('.select-wrapper .option .listbox li').each(function(index) {
            $(this).click(function() {
                var colorClass = ["white", "lightblue", "red", "black"][index]; // li의 순서에 따라 클래스 선택
                var isAlreadyAdded = $('.select-option ul .' + colorClass).length > 0;
            
                if (!isAlreadyAdded) {
                    var html = '<li class="' + colorClass + '">' +
                        '<div>' +
                            '<p class="title">' + $(this).text() + '</p>' +
                            '<div class="optionBox">' +
                                '<div class="plus-minus">' +
                                    '<button class="minus" type="button"><i class="ri-subtract-line"></i></button>' +
                                    '<form action="#">' +
                                        '<input class="input-1" type="text" value="1">' +
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
                
                    $('.select-option ul').append(html);
                    registerEventHandlers(); // 새로운 li에 대한 이벤트 핸들러 등록
                }
            });
        });
    
        // 이벤트 핸들러 등록 함수
        function registerEventHandlers() {
            $('.select-option ul li').each(function() {
                let order = parseInt($(this).find('.input-1').val());
    
                $(this).find('.minus').click(function(){
                    if(order > 1) {
                        order--;
                        $(this).siblings('form').find('.input-1').val(order);
                        let price = order * parseInt($(this).closest('.optionBox').find('.option-price-1').text().replace(/[^0-9]/g, ''));
                        updateTotal();
                    }
                });
    
                $(this).find('.plus').click(function(){
                    let maxValue = 10;
                    if(order < maxValue) {
                        order++;
                        $(this).siblings('form').find('.input-1').val(order);
                        let price = order * parseInt($(this).closest('.optionBox').find('.option-price-1').text().replace(/[^0-9]/g, ''));
                        updateTotal();
                    }
                });
            });
        }
    
    // 총 수량 및 총 상품 금액 업데이트 함수
function updateTotal() {
    let totalQuantity = 0;
    let totalPrice = 0;

    $('.select-option ul li').each(function() {
        let quantity = parseInt($(this).find('.input-1').val());
        totalQuantity += quantity;
        totalPrice += quantity * parseInt($(this).find('.option-price-1').text().replace(/[^0-9]/g, ''));
    });

    $('.last-num').text(totalQuantity);
    $('.last-price').text(totalPrice.toLocaleString());
}

// cancle 클릭시 안보이게 및 총 가격 업데이트
$('.select-option').on('click', '.cancle', function() {
    var priceToRemove = parseInt($(this).closest('.optionBox').find('.option-price-1').text().replace(/[^0-9]/g, ''));
    var quantityToRemove = parseInt($(this).siblings('.plus-minus').find('.input-1').val());
    var totalPriceToRemove = priceToRemove * quantityToRemove;

    $(this).closest('li').remove(); // 선택한 항목 삭제
    updateTotal(); // 총 수량 및 총 가격 업데이트
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

// 총 가격을 업데이트하는 함수
function updateTotalPrice(priceToRemove = 0) {
    var numLi = $('.select-option ul li').length; // 현재 li 요소의 개수를 가져옵니다.
    var totalPrice = numLi * 119000; // 기본적으로 총 가격은 li의 개수에 따라 계산됩니다.
    if (!isNaN(priceToRemove)) {
        totalPrice -= priceToRemove; // 삭제된 옵션의 가격을 총 가격에서 제외합니다.
    }
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
    // 클릭된 요소의 가격을 가져옵니다.
    var priceToRemove = parseInt($(this).closest('.optionBox').find('.option-price-1').text().replace(/[^0-9]/g, ''));

    // 총 가격을 업데이트합니다.
    updateTotalPrice(priceToRemove);

    // 클릭된 요소의 부모 li 요소의 클래스를 가져옵니다.
    var className = $(this).closest('li').attr('class');

    // 해당 클래스를 가진 li 요소를 제거합니다.
    $('.select-option ul .' + className).remove();

    // li 요소가 제거되면 .last-num을 업데이트합니다.
    updateLastNum();


});

// 총 수량 및 총 상품 금액 업데이트 함수
function updateTotal() {
    let totalQuantity = 0;
    let totalPrice = 0;

    $('.select-option ul li').each(function() {
        let quantity = parseInt($(this).find('.input-1').val());
        totalQuantity += quantity;
        totalPrice += quantity * parseInt($(this).find('.option-price-1').text().replace(/[^0-9]/g, ''));
    });

    $('.last-num').text(totalQuantity);
    $('.last-price').text(totalPrice.toLocaleString());
}

// li 삭제 버튼이 클릭될 때 총 가격을 업데이트합니다.
$('.select-option').on('click', '.cancle', function() {
    // 클릭된 요소의 가격을 가져옵니다.
    var priceToRemove = parseInt($(this).closest('.option-price').find('.option-price-1').text().replace(/[^0-9]/g, ''));
    
    // 클릭된 요소의 수량을 가져옵니다.
    var quantityToRemove = parseInt($(this).siblings('.plus-minus').find('.input-1').val());
    
    // 삭제될 옵션의 가격을 총 가격에서 차감합니다.
    var totalPriceToRemove = priceToRemove * quantityToRemove;
    
    // 총 가격을 업데이트합니다.
    updateTotalPrice(totalPriceToRemove);

    // 선택한 항목 삭제
    $(this).closest('li').remove(); 
    
    // 총 수량 및 총 가격 업데이트
    updateTotal();
});




    























});









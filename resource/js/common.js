var Scrollbar = window.Scrollbar;

Scrollbar.init(document.querySelector('.wrap'));

function sldier(){
    $('.main-slider > .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:6500,
        mouseDrag:false,
        nav:true,
        navText:["<div class='main-slide-btn right-btn'></div>","<div class='main-slide-btn left-btn'></div>"],
        dot:true,
        dotsClass: 'owl-dots',
        autoWidth:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
};
function has_class(){
    $('.top-menu-bar').mouseenter(function(){
        var drop_menu_bg = $('.hover-bg');

        drop_menu_bg.addClass('active');
    })
};


$(function(){
    $(window).on('mousewheel DOMMouseScroll', function(e) {
    		e.preventDefault();
        
        var E = e.originalEvent;
        delta = 0;
        if (E.detail) {
            delta = E.detail;
        }else{
            delta = E.wheelDelta;
        }
        
        if(delta < 0){
        	$('.top-menu-bar').addClass('active');
        } else {
        	$('.top-menu-bar').removeClass('active');
        }
    });
});

/*

$(function(){
    $("html, body").on('mousewheel DOMMouseScroll', function(e) {
         // html, body 에 마우스 휠 이벤트와 돔마우스스크롤 이벤트를 걸었습니다.
        var E = e.originalEvent;
        	// 변수 E 에다가는 이벤트 객체의 속성으로 사용할 수 있는 속성 인 originalEvent 를 넣었습니다.
        delta = 0;
        	// 변수 delta 에다가는 숫자 자료형 0 을 넣어 두었습니다.
        if (E.detail) {
            // 이 조건에서는 e.originalEvent 의 속성으로 detail 가 있다면 입니다.
            // 익스, 크롬 등은 e.originalEvent 에 detail 의 속성이 없으나,
            // 파이어 폭스 일 경우엔 detail 속성이 있습니다.
            // 그래서 이 조건을 실행 시킵니다.
            delta = E.detail * -40;
            // 이렇게 해주는 이유는 detail 의 값이 익스와 크롬과는 다르게 3 이 찍힙니다.
            // 익스, 크롬은 120 이 찍히죠.
            // 익스, 크롬과 동일하게 해주기 위해서 이렇게 해줍니다.
            $('span').text(delta);
        }else{
            // 이곳에서는 익스, 크롬의 e.originalEvent 의 속성으로 wheelDelta 를 사용할 수 있습니다.
            delta = E.wheelDelta;
             $('span').text(delta);
        };
    });
});
http://jsfiddle.net/Davidan/rz3vd872/
*/


$(function(){
    sldier();
    has_class();
});

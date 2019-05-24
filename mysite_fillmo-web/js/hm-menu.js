//alert('hello');


//上にスクロールすると出現する
$(function(){
var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        $('.fix-header').addClass('hide');
    } else {
        $('.fix-header').removeClass('hide');
    }
    startPos = winScrollTop;
});
});

/*
$(function () {

    var flag = "view";

    

    $(window).on("scroll", function () {
        if(matchMedia('only screen and (max-width:424px').matches){
        // scrollTop()が「200」より大きい場合
        //画面トップから、ナビゲーションメニューまでの高さ（ピクセル）を指定すれば、メニュースクロールで
        //消えていくタイミングでヘッダが表示されて固定される。  
        $(function(){
            $('.fix-header').show
            ();
        })

        if ($(this).scrollTop() > 300) {
            if (flag === "view") {
                $(".fix-header").stop().css({ opacity: '1.0' }).animate({
                    //”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
                    top: 0
                }, 500);

                flag = "hide";
            }
        } else {
            if (flag === "hide") {
                $(".fix-header").stop().animate({ top: "-66px", opacity: 0 }, 500);
                //上にあがり切ったら透過度を0%にして背景が生きるように
                //”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
                flag = "view";
            }
        }

    }
    });*/
   

    //ハンバーガーメニュー押したらメニューがスライドしてくるやつ
$(function(){
    $('.c-header__tog').click(function(){
                $("header").toggleClass('open');
        $(".header-nav__menu").slideToggle(500);
            });

});


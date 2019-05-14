$(document).ready(function () {
    $('.header-nav__list-point').hover(
        function () {
            $(this).children('ul').stop(false, false).fadeIn(400).css("display", "flex").addClass("active");
            $(this).children('span').addClass("active");
        },
        function () {
            $(this).children('ul').stop(false, false).fadeOut(400).removeClass("active");
            $(this).children('span').removeClass("active");
        }
    );
});
$(document).ready(function () {
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        dots: true,
        speed: 1500,
        infinite: true,
        // variableWidth: true,
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('.main__clinics,.main__clinics__body,#body').addClass("active")
        }
        if($(window).scrollTop()>800){
            $('.main__request-title,.main__request-btn').addClass("active")
        }
        if($(window).scrollTop()>1200){
            $('.main__about-title').addClass("active")
        }
        if($(window).scrollTop()>1300){
            $('.main__about__box-title,.main__about__box-txt,.main__about__box__skills').addClass("active")
        }
        if($(window).scrollTop()>2050){
            $('.main__about__logo').addClass("active")
        }
    });
});

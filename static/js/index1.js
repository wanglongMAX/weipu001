//banner视差
$(function () {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
        relativeInput: true
    });
});

//版本选择
$(function () {
    $('.edition-a1').hover(function() {
        $(".content-1").css('display', 'block');
        $(".content-2,.content-3,.content-4").css('display', 'none');
    }, function() {
        $(".content-1").css('display', 'block');
    });
    $('.edition-a2').hover(function() {
        $(".content-1,.content-3,.content-4").css('display', 'none');
        $(".content-2").css('display', 'block');
    }, function() {
        $(".content-2").css('display', 'block');
    });
    $('.edition-a3').hover(function() {
        $(".content-1,.content-2,.content-4").css('display', 'none');
        $(".content-3").css('display', 'block');
    }, function() {
        $(".content-3").css('display', 'block');
    });
    $('.edition-a4').hover(function() {
        $(".content-1,.content-2,.content-3").css('display', 'none');
        $(".content-4").css('display', 'block');
    }, function() {
        $(".content-4").css('display', 'block');
    });
});



// 轮播
var swiper = new Swiper('.swiper-container', {
    autoplay: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

//返回顶部
$(window).ready(function(){
    $('#a-top').click(function(){
        $('html,body').stop()
            .animate({
                scrollTop: '0px'
            },1000);
    });
});
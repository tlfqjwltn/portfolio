$('document').ready(function(){
    allMenu();

    function allMenu(){
        $('.all_menu_img1').click(function(){
            $(this).removeClass('active');
            $('.all_menu_img2').addClass('active');
            $('.all_menu').addClass('active');
            $('.all_menu_close').delay(700).fadeIn();
            $('.all_menu_L').delay(700).fadeIn();
            $('.all_menu_wrap').delay(700).fadeIn();
        });

        $('.all_menu_img2').click(function(){
            $(this).removeClass('active');
            $('.all_menu_img1').addClass('active');
            $('.all_menu').removeClass('active');
            $('.all_menu_close').removeAttr('style');
            $('.all_menu_L').removeAttr('style');
            $('.all_menu_wrap').removeAttr('style');
        });

        $('.all_menu_close').click(function(e){
            e.preventDefault();
            $('.all_menu_img1').addClass('active');
            $('.all_menu_img2').removeClass('active');
            $('.all_menu').removeClass('active');
            $('.all_menu_close').removeAttr('style');
            $('.all_menu_L').removeAttr('style');
            $('.all_menu_wrap').removeAttr('style');
        })
    }
    // allMenu 좌측 메뉴 클릭시 클래스 제어
})
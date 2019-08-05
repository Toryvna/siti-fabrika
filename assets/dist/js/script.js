$(document).ready(function(){
    //mobile menu
    $('.toggle-menu').on('click touch', function () {
        $('.mobileWrap').toggleClass('show');
    });
    $('.mobileClose').on('click touch', function () {
        $('.mobileWrap').removeClass('show');
    });
    $(document).mouseup(function(e){
        var menu = $('.mobileWrap.show');
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass('show');
        }

        var fixedEl = $('#headerSearch.show');
        if (!fixedEl.is(e.target) && fixedEl.has(e.target).length === 0) {
            fixedEl.removeClass('show');
            $('.showSearch').show();
            $('.header__search').removeClass('active');
            $('.header .bottomLinks .signIn').removeClass('fixed');
        }

    });
    //end mobile menu

    //show/hide search
    function searchShow(){
        if ($(window).width() > 768) {
            $('.showSearch').on('click', function(){
                $(this).hide();
                $('.header__search').toggleClass('active');
                $(this).parent().find('.form-input').toggleClass('show');
                $('.header .bottomLinks .signIn').toggleClass('fixed');
            });
        }
       else {
        $('.open-popupSearch').on("click",function(){
            $('.overlay-popupSearch').addClass('active');
    
            if($(window).width() < 768) {   
                $.lockBody();
            }else{
                $('body').css('overflow', 'hidden');
            }
        });
        $('.overlay-popupSearch .close-popup, .overlay-popupSearch .close').on("click",function(){
            $('.overlay-popupSearch').removeClass('active');
            if($(window).width() < 768) {   
                $.unlockBody();
            }else{
                $('body').css('overflow', 'inherit');
            }
        });
       }
    }
    searchShow();

    //show/hide catalog
    function catalogPopup(){
        if ($(window).width() < 769) {
            $('.open-catalogPopup').on("click",function(){
                $('.overlay-catalogPopup').addClass('active'); 
                $.lockBody();
            });
            $('.overlay-catalogPopup .close-popup, .overlay-catalogPopup .close').on("click",function(){
                $('.overlay-catalogPopup').removeClass('active'); 
                $.unlockBody();
            });
        }else{
            $('.open-catalogPopup').on("click",function(){
                $.unlockBody();
            });
        }
    }
    catalogPopup();

    $(window).resize(function() {
        searchShow();
        catalogPopup();
        console.log('resize');
    });

    //lock,unlock body на телефоне
    var $docEl = $('html, body'),
    $wrap = $('body'),
    scrollTop;

    $.lockBody = function() {
        if(window.pageYOffset) {
        scrollTop = window.pageYOffset;
        
        $wrap.css({
            top: - (scrollTop)
        });
        }

        $docEl.css({
            height: "100%",
            overflow: "hidden"
        });
    }

    $.unlockBody = function() {
        $docEl.css({
            height: "",
            overflow: ""
        });

        $wrap.css({
            top: ''
        });

        window.scrollTo(0, scrollTop);
        window.setTimeout(function () {
            scrollTop = null;
        }, 0);

    }

});



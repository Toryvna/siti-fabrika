$(document).ready(function(){

    var playValue = $('.bannerSlider').attr('data-playSpeed');
    var bannerSlider = new Swiper('.bannerSlider', {
      loop: true,
      autoplay: {
        delay: playValue,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    
    var categoriesSlider = undefined;
    function initSwiper() {
        var screenWidth = $(window).width();
        if(screenWidth < 1024 && categoriesSlider == undefined) {            
          categoriesSlider = new Swiper('.categoriesSlider', {
            loop: true,
            slidesPerView: 4,
            pagination: {
              el: '.sw-pagination',
              clickable: true,
            },
            breakpoints: {
              768: {
                slidesPerView: 3,
                loop: true,
              },
              640: {
                slidesPerView: 2,
                loop: true,
              },
              480: {
                slidesPerView: 1,
                loop: true,
              }
            }
          });
        } else if (screenWidth > 991 && categoriesSlider != undefined) {
          categoriesSlider.destroy();
          categoriesSlider = undefined;
          $('.categoriesSlider .swiper-wrapper').removeAttr('style');
          $('.categoriesSlider .swiper-slide').removeAttr('style');            
        }        
    }
    initSwiper();

    var noveltySlider = new Swiper('.noveltySlider', {
        slidesPerView: 6,
        spaceBetween: 12,
        breakpoints: {
            1240: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1
            }
        },
        pagination: {
          el: '.sw-pagination',
          clickable: true,
        },
        navigation: {
            nextEl: '.sw-button-next',
            prevEl: '.sw-button-prev',
        },
    });
    var stockSlider = new Swiper('.stockSlider', {
        slidesPerView: 6,
        spaceBetween: 12,
        breakpoints: {
            1240: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1
            }
        },
        pagination: {
          el: '.sw-pagination',
          clickable: true,
        },
        navigation: {
            nextEl: '.sw-button-next',
            prevEl: '.sw-button-prev',
        },
    });

    var playValue2 = $('.sliderBanner').attr('data-playSpeed');
    var sliderBanner = new Swiper('.sliderBanner', {
      loop: true,
      autoplay: {
        delay: playValue2,
      },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
    var partnersSlider = new Swiper('.partnersSlider', {
        slidesPerView: 5,
        spaceBetween: 145,
        loop: false,
        pagination: {
          el: '.sw-pagination',
          clickable: true,
        },
        breakpoints: {
          1240: {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
          }
        }
    });

    //auto height 
    function hHeaight(item){
      var maxHeight = 0;
      $(item).each(function(){
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
        return $(item).css('min-height',maxHeight);
      });
    }

    if($(window).width() > 768) { 
      hHeaight('.noveltySlider h3');
      hHeaight('.stockSlider h3');
    }

    $(window).on('resize', function(){
      initSwiper();    
      hHeaight('.noveltySlider h3');
      hHeaight('.stockSlider h3');    
    });

    

      

});



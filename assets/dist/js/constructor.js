$(document).ready(function(){
    //выбрать изделие
    $('.chooseProduct .topLine').on('click', function(){
        $(this).parent().toggleClass('show');
    });
    $('.productList a').on('click', function(){
        $('.productList li').removeClass('active');
        $(this).parent().addClass('active');
        $('.current-value').html($(this).html());
        $('.chooseProduct').removeClass('show');
    });

    //переключение фото по клику на маленькие картинки
    $('.small-image').on('click', function () {
        var src = $(this).find('img').attr('src');
        $(this).parent().find('.small-image').removeClass('active');
        $(this).addClass('active');
        $('.main-photo').attr('src', src);
    });

    //показать фильтер
    $('.filters-item h3').on('click', function(){
        $(this).parent().toggleClass('hide');
    });

    //масштабирование картинки
    var $section = $('.main').first();
    $section.find('#panzoom').panzoom({
        $zoomIn: $section.find(".zoom-in"),
        $zoomOut: $section.find(".zoom-out"),
        $zoomRange: $section.find(".zoomRange"),
        $reset: $section.find(".reset")
    });

    //input only number
    $('input[type=number]').on("click", function () {
        $(this).keydown(function(e){
            if((e.which >=48 && e.which <=57)  // number
            || (e.which >=96 && e.which <=105)  // num lock
            || e.which==8 // backspace
            || (e.which >=37 && e.which <=40) // arrows
            || e.which==46) // delete 
        {
            return true;
        } else {
            return false;            
        }		 
        });
    });
    //End 

    //кол-во не меньше 100
    $(".quantity input").change(function() {
        var obj = $(this);
        if (obj.val() < 100){
            obj.val('100');
        }
    });

    //input не меньше 100
    $(".quantity input").change(function() {
        number = $(this).val()
        if( number < 100) {
            $(number).val("100");
        }
    });

});
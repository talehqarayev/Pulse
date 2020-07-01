$(document).ready(function(){
    $(".slider_carousel").slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/arrowtoleft.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/arrowtoright.png"> </button>',
        autoplay: false,
        autoplaySpeed: 3000
    });

    $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
        $(this)
          .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
          .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
    });

    // MODAL WINDOW

    $("[data-modal=consultation]").on("click", function() {

    $(".overlay, #consultation").fadeIn("fast");
    });

    $(".modal_close").on("click", function() {

    $(".overlay, #consultation, #order, #thanks").fadeOut("fast");
    });

    $(".overlay").on("click", function() {

        if ($(event.target).closest("#consultation, #order, #thanks").length) return;
        $(".overlay").fadeOut("slow");
        event.stopPropagation();
        });

 
    $(".btn").each(function(i) {
        $(this).on("click", function() {

        $("#order .modal_subheader").text($(".catalog_item_subheader").eq(i).text());
        $(".overlay, #order").fadeIn("fast");
        });

    });

    // Настройка ввода номероа телефона

    $("input[name=phone]").mask("+7(999) 999-99-99");

  });
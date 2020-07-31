$(document).ready(function(){

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
    

    // $(".overlay").on("click", function() {    //Закрывается модальное окно при нажатии  ВНЕ пределах его

    // if ($(event.target).closest("#consultation, #order, #thanks").length) return;
    // $(".overlay").fadeOut("slow");
    // event.stopPropagation();
    // });

 
    $(".btn").each(function(i) {
        $(this).on("click", function() {

        $("#order .modal_subheader").text($(".catalog_item_subheader").eq(i).text());
        $(".overlay, #order").fadeIn("fast");
        });

    });

    // Настройка ввода номероа телефона

    $("input[name=phone]").mask("+7(999) 999-99-99");


    // Отправление данный с сайта на ПОЧТУ
    
    $("form").submit(function(e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
            
        }).done(function() {

            $(this).find("input").val("");
            $("#consultation, #order").fadeOut();
            $(".overlay, #thanks").fadeIn("slow");
            $("form").trigger("reset");
        });
        
        return false;
    });

    // Scroll pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $(".pageup").fadeIn("slow");
        } 
        else {
            $(".pageup").fadeOut();
             }
    });

     // Чтобы крутилась до самого ваерха сайта ПЛАВНО, а не прямой переход

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
        });

    
  });
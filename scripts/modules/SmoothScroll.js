import $ from 'jquery';

module.export = function() {
    $(".nav__item").click(function(e) {
        var sectionID = e.currentTarget.id + "Section";

        $("html body").animate({
            scrollTop: $("#" + sectionID).offset().top - 60
        }, 1000);

        $('.nav__hamburger-menu').removeClass('animate');
        $('.nav__items').removeClass('nav__height-auto');
        $('.nav').removeClass('nav__height-fixed');
    });
}();
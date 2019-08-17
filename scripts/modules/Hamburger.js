import $ from 'jquery';

export default function() {
    $('.nav__menu-wrapper').on('click', function() {
        $('.nav__hamburger-menu').toggleClass('animate');
        $('.nav__items').toggleClass('nav__height-auto');
        $('.nav').toggleClass('nav__height-fixed');
    });
};
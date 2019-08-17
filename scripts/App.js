import Hamburger from './modules/Hamburger';
import AOS from './modules/Aos';
import SmoothScroll from './modules/SmoothScroll';

AOS.init({
    once: true
})
Hamburger();
console.log('here');
SmoothScroll();
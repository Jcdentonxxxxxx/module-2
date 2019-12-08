var bank = document.getElementById('bank');
var headerMain = document.querySelector('.header-main');
var media = false;
var lastTarget;

bank.addEventListener('click', function(event) {
    event.preventDefault();
    var body = document.querySelector('.header-top__body');
    body.classList.toggle('active');

    if(body.classList.contains('active')) {
        bank.style.color = '#003DB1';
    } else {
        bank.style.color = '';
    }
});



headerMain.addEventListener('click', function(event) {
    var windowWidth = window.innerWidth;
    if (windowWidth < 1024) media = true;
    if (windowWidth > 1024) media = false;
    
    if (event.target.classList.contains('nav-main__link')) {
        event.preventDefault();
        var navMainLinks = document.querySelectorAll('.nav-main__link');

        for (var j = 0; j < navMainLinks.length; j++) {
            navMainLinks[j].style = '';
            navMainLinks[j].classList.remove('active');
        }
        if(lastTarget === event.target) {
            event.target.style.color = '';
            event.target.classList.remove('active');
            lastTarget = '';
        } else {
            event.target.style.color = '#003DB1';
            event.target.classList.add('active');
            lastTarget = event.target;
        }
        

        var parent = event.target.parentElement;
        var navMainBlock = parent.querySelector('.nav-main__block');
        var list = document.querySelectorAll('.nav-main__block');

        for (var i = 0; i < list.length; i++) {
            if (navMainBlock === list[i]) {
                list[i].classList.toggle('active');
            } else {
                list[i].classList.remove('active');
            }
        }

        changeTop();
    };
 
});

/*About Bank*/

window.addEventListener('resize', function () {
    var windowWidth = window.innerWidth;
    if (windowWidth < 1024) media = true;
    if (windowWidth > 1024) media = false;
    changeTop();
});



function changeTop () {
    
    var headerTop = document.querySelector('.header-top');
    var navMainFooter = document.querySelector('.nav-main__footer');
    var top = document.querySelector('.nav-main__block.active');

    if (!media && !navMainFooter.classList.contains('active')) return;

    if (top) {
        
        if (!navMainFooter.classList.contains('active')) {
            navMainFooter.classList.add('active');
        }
    } else {
        
        if (navMainFooter.classList.contains('active')) {
            navMainFooter.classList.remove('active');
        }
        
        return;
    }
    var coords = top.getBoundingClientRect();
    
    navMainFooter.style.top = coords.top + window.pageYOffset + top.offsetHeight - headerTop.offsetHeight + 'px';
}

/*Nav Toggle*/

var navToggle = document.getElementById('nav__toggle');
navToggle.addEventListener('click', function() {
    var headerMain = document.querySelector('.header-main');
    headerMain.classList.toggle('active');
});

/*Bank Accordion*/
var toggle = document.getElementById('toggle');
toggle.addEventListener('click', function(event) {
    toggle.classList.toggle('active');
});


/*Slider: https://kenwheeler.github.io/slick/
================================================*/
$(function() {

    $('#introSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

})



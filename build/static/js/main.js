var bank = document.getElementById('bank');
var headerMain = document.querySelector('.header-main');
var media = false;
var lastTarget;

bank.addEventListener('click', function (event) {
    event.preventDefault();
    var body = document.querySelector('.header-top__body');
    body.classList.toggle('active');

    if (body.classList.contains('active')) {
        bank.style.color = '#003DB1';
    } else {
        bank.style.color = '';
    }
});



headerMain.addEventListener('click', function (event) {
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
        if (lastTarget === event.target) {
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



function changeTop() {

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
navToggle.addEventListener('click', function () {
    var headerMain = document.querySelector('.header-main');
    headerMain.classList.toggle('active');
});

/*Bank Accordion*/
var toggle = document.getElementById('toggle');
toggle.addEventListener('click', function (event) {
    toggle.classList.toggle('active');
});

/*Toggle services*/
var table = document.getElementById('table');
var lastTable = document.querySelector('.services__col--tables.active');
table.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (event.target.tagName != 'A') return;
    var id = event.target.dataset.id;    
    var showTable = document.getElementById(id);

    
    if (showTable.classList.contains('active')) return;
    if (lastTable === showTable) return;
    showTable.classList.add('active');    
    lastTable.classList.remove('active')

    document.querySelector('.services__toggle.active').classList.remove('active');
    event.target.closest('.services__toggle').classList.add('active');

    lastTable = showTable;

});

/*Footer*/
var footer = document.getElementById('footer');
footer.addEventListener('click', function(event) {
    if (!event.target.classList.contains('footer__title')) return;
    if (window.innerWidth > 565) return;
    var parent = event.target.closest('.footer__col');
    
    parent.classList.toggle('active');
});


/*Slider: https://kenwheeler.github.io/slick/
================================================*/
$(function () {
    /*intro*/
    $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true

    });

    /*advantages*/
    var sliderIsLive;
    var slickAdvantages = $('[data-slider="slick2"]');

    if (window.innerWidth < 768) {
        $(slickAdvantages).slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true,
            arrows: false

            
        });
        sliderIsLive = true;
    }

    window.addEventListener("resize", function () {
        if (window.innerWidth >= 767) {
            if (!sliderIsLive) return;
            $(slickAdvantages).slick('unslick');
            sliderIsLive = false;

        } else {
            if (!sliderIsLive) {
                $(slickAdvantages).slick({
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: true,
                    arrows: false
                });
                sliderIsLive = true;
            }
            
        }
    });

    var sliderIsLiveServices;
    var slickServices = $('[data-slider="slick3"]');

    if (window.innerWidth < 1024) {
        $(slickServices).slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true,
            arrows: false,

            responsive: [{

                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    arrows: false,
                    dots: true,
                    variableWidth: false
                }

            }]
        });
        sliderIsLiveServices = true;
    }

    window.addEventListener("resize", function () {
        
        if (window.innerWidth >= 1023) {
            if (!sliderIsLiveServices) return;
            $(slickServices).slick('unslick');
            sliderIsLiveServices = false;

        } else {
            if (!sliderIsLiveServices) {
                $(slickServices).slick({
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: true,
                    arrows: false,

                    responsive: [{

                        breakpoint: 768,
                        settings: {
                            infinite: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                fade: true,
                                arrows: false,
                                dots: true,
                                variableWidth: false
                        }

                    }]
                });
                sliderIsLiveServices = true;
            }

        }
    });

})
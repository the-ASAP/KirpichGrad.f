// function anchor() {
//     $('.anchorLink').on('click', function () {
//         var el = $(this).attr('href');
//         $('html, body').animate({
//             scrollTop: $(el).offset().top
//         }, 1000);
//         return false;
//     });
// }
function stopScroll(item) {
    var documentWidth = parseInt(document.documentElement.clientWidth);
    var windowsWidth = parseInt(window.innerWidth);
    var scrollbarWidth = windowsWidth - documentWidth;
    $(item).attr("style", 'overflow: hidden; padding-right: ' + scrollbarWidth + 'px');
}

function freeScroll(item) {
    $(item).attr("style", '');
}
function menuOpen(trigger, modal) {
    $(trigger).on('click', function () {
        stopScroll('body');
        $(modal).fadeIn(300).addClass('visible')
    })
}
function modalOpen(trigger, modal) {
    $(trigger).on('click', function () {
        stopScroll('body');
        $(modal).fadeIn().css({
            'display': 'flex'
        });
    })
}

function modalClose(btn, modal) {
    $(btn).on('click', function () {
        $(this).closest(modal).fadeOut();
        $('body').attr("style", '');
        freeScroll('body');
    });

}

function escClosing(modal) {
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $(modal).fadeOut();
            $('body').attr("style", '');
            return false;
        }
    });
}

function owls() {
    $('.showroom__slider').owlCarousel({
        nav: true,
        navContainer: ('.showroom__sliderNav'),
        navText: ['<svg class="showroom__sliderNavBtn" width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>', '<svg class="sliderNavBtn"  width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>'],
        dots: false,
        items: 1,
        touchDrag: false,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1000,
        lazyLoad: true,
        margin: 10
    });
    var goodsItem = $('.goods__gallerySlider');
    goodsItem.each(function () {
        $(this).owlCarousel({
            items: 1,
            margin: 10,
            dots: true,
            lazyLoad: true,

        })
    });
    $('.events__slider').owlCarousel({
        nav: true,
        navContainer: ('.events__controls'),
        navText: ['<svg class="sliderNavBtn" width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>', '<svg class="sliderNavBtn"  width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>'],
        dots: false,
        items: 1,
        touchDrag: false,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1000,
        margin: 10
    });
    $('.offers__slider').owlCarousel({
        margin: 40,
        items: 3,
        dots: false,
        nav: true,
        navContainer: '.offers__nav',
        navText: ['<svg class="sliderNavBtn" width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>', '<svg class="sliderNavBtn"  width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>'],
        lazyLoad: true,
        thumbs: false,
        smartSpeed: 1000,
    }); 
}

function detailOwls() {
    $('.detail__slider').owlCarousel({
        items: 1,
        margin: 10,
        dots: false,
        lazyLoad: true,
        thumbs: true,
        thumbImage: true,
        thumbsPrerendered: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumbs-item',
        smartSpeed: 400,
    });

}
function objectSlider(){
    $('.object__gallery').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget,
        cur = '0'+(carousel.relative(carousel.current()) + 1),
        length = '0'+carousel.items().length;
        $('.object__itemCurrent').html(cur);
        $('.object__itemLength').html(length);
      }).owlCarousel({
        items: 1,
        margin: 10,
        dots: false,
        lazyLoad: true,
        touchDrag: false,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1000,
        thumbs: false,
        navContainer: '.object__itemControls',
        navText: ['<svg class="sliderNavBtn" width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>', '<svg class="sliderNavBtn"  width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>'],
    });
}
function hashTabs(buttons, windows) {

    var button = $(buttons).children('button'),
        window = $(windows).children(),
        active = 'active',
        length = $(button).length,
        index,
        hash = location.hash;

    for (var i = 0; i < length; i++) {
        $(button[i]).attr('data-index', i + 1);
        $(window[i]).attr('data-index', i + 1);
    }

    if (hash > '') {
        var hashID = hash.replace('#', '');
        $(button).filter('[data-index = ' + hashID + ']').addClass(active);
        addActiveTab(hashID);
    } else {
        $(button).eq(0).addClass(active)
        addActiveTab(1);
    }

    function addActiveTab(i) {

        $(window).filter('[data-index = ' + i + ']').addClass(active);
 
        setTimeout(function () {
            $('.active').addClass('visible')
            var maxh = window.filter('.active').height();
            $(windows).css({
                "height": maxh
            });
        }, 100);
    }

    $(button).on('click', function () {
        if (!$(this).hasClass(active)) {
            index = $(this).attr('data-index');
            location.hash = index;
            $(button).removeClass(active);
            $(this).addClass(active);
            $(window).removeClass('active visible');
            addActiveTab(index);
        }
    });
}

function youTubeInit() {
    $('.events__videoBtn').on('click', function () {
        let src = $(this).attr('data-video');
        $(this).after(`<iframe class="events__videoFrame" src="${src}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`).remove();
    });
}

function tips(item) {
    var item = $(item),
        btn = item.find('button');

    btn.on('click', function () {
        var content = $(this).siblings('.content')
        if ($(this).hasClass('isOpen')) {
            $(this).removeClass('isOpen');
            content.slideUp()
        } else {
            $(this).addClass('isOpen');
            content.slideDown();
        }
    })
}

function showMenu(menu, btn) {
    var aside = $('.aside'),
        btn = $(btn),
        menu = btn.siblings(menu),
        blocker = true;
        if(blocker === true){
            blocker = false;
            $(document).on('scroll', function(){
                aside.removeClass('open')
            })
        }
    btn.on('click', function () {
        if ($(this).hasClass('isOpen')) {
            $(this).removeClass('isOpen');
            menu.fadeOut(200);
        } else {
            $(this).addClass('isOpen');
            menu.fadeIn(200);
        }
    });
    $(document).on("mousedown", function (e) {
        if (!$(menu).parent().is(e.target) && $(menu).parent().has(e.target).length === 0) {
            menu.fadeOut(200);
            btn.removeClass('.isOpen');
        }
    });
}
function yandexMap(){
    if ($("#map").length > 0){
        ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                center: [51.869051532878736,44.99647525936559],
                zoom: 17,
                "multiTouch": false,
                controls: ['zoomControl']
            }, {
                suppressMapOpenBlock: true
            });
            var myPlacemark = new ymaps.Placemark([51.86911130776214,44.996507445873775], {
                hintContent: 'Россия, Саратовская область, Аткарск, улица Гагарина, 91'
            });
            myMap.geoObjects.add(myPlacemark);
            myMap.controls.remove('routeEditor');
            myMap.behaviors.disable('scrollZoom');
        });
    }
}
function toggleList(parent) {
    var parent = $(parent),
        btn = parent.find('button'),
        activeClass = ('isOpen');
    // input = parent.find('input');

    $(btn).on('click', function () {

        var item = $(this).siblings('div'),
            btnH = $(this).height(),
            itemL = item.length,
            itemH = item.height();
        if (!$(this).hasClass(activeClass)) {
            $(this).addClass(activeClass).closest(parent).addClass(activeClass).height((itemL * itemH) + btnH);
        } else {
            $(this).removeClass(activeClass).closest(parent).removeClass(activeClass).height(btnH);
        }
    });
}
// Заменить на AJAX 
function activeItemOnClick(parent) {
    var parent = $(parent),
        item = parent.find('button');
    item.on('click', function () {
        item.removeClass('active');
        $(this).addClass('active');
    })
}

function animationInit(){
    $('.animation').css({'animation-name': 'slideTo'}).hide().show(0);
}

$().ready(function () {
    menuOpen('.aside__toggle', '.mainMenu');
    modalClose('.modal__close', '.modal');
    escClosing('.modal');
    owls();
    tips('.tips__item');
    showMenu('.catalog__other', '.catalog__otherBtn');
    toggleList('.catalog__select'); 
    activeItemOnClick('.catalog__listHeader');
    activeItemOnClick('.goods__nav');
    if ($('.detail').length > '') {
        detailOwls();
        hashTabs('.detail__contentTabs', '.detail__contentWindows'); 
    }
    if($('.object').length  > ''){
        objectSlider();
    }
    if($('.contacts-page').length > ''){
        yandexMap();
    }
    let el = document.querySelector('.preloader').style;

    if (sessionStorage.getItem('loaded') == null){
        animationInit()
        window.addEventListener('load', function (e) {
            el.opacity = 1;
            (function fade() {
                (el.opacity -= .1) < 0 ? el.display = "none" : setTimeout(fade, 70)
            })();
        });
        sessionStorage.setItem('loaded', true);
    } 
    else{
        // $('.animation').removeClass('slideDown slideUp slideLeft slideRight')
        // $('.preloader').remove();

        // test
         animationInit()
        window.addEventListener('load', function (e) {
            el.opacity = 1;
            (function fade() {
                (el.opacity -= .1) < 0 ? el.display = "none" : setTimeout(fade, 70)
            })();
        });
        sessionStorage.setItem('loaded', true);
    }
});




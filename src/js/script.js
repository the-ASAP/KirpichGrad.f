function stopScroll(item) {
    var documentWidth = parseInt(document.documentElement.clientWidth);
    var windowsWidth = parseInt(window.innerWidth);
    var scrollbarWidth = windowsWidth - documentWidth;
    $(item).attr("style", 'overflow: hidden; padding-right: ' + scrollbarWidth + 'px');
}

function freeScroll(item) {
    $(item).attr("style", '');
}

function mainMenu(trigger, menu) {
    $(trigger).on('click', () => {
        stopScroll('body');
        $(menu).fadeIn().addClass('visible');
    });
    $('.mainMenu__close').on('click', () => {
        $(menu).removeClass('visible')
        setTimeout(() => {
            $(menu).hide()
        }, 800)
    })
}

const filterModal = (trigger, modal) => {
    $(trigger).on('click', function () {
        if ($(this).hasClass('isOpen')) {
            $(this).removeClass('isOpen');
            $(modal).fadeOut();
        } else {
            $(this).addClass('isOpen')
            $(modal).fadeIn();
        }
    });
    $('.catalog__otherFilterApply', '.catalog__otherFilterCancel').on('click', () => {
        $(trigger).removeClass('isOpen');
        $(modal).fadeOut();
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
    const showroom = $('.showroom__slider')
    showroom.owlCarousel({
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
        })
        .on('change.owl.carousel', (e) => {
            let item = $('.showroom__slider').find('.owl-item').eq(e.property.value).find('img');
            $('.showroom__sliderInfo').hide().fadeIn(500)
            $('.showroom__sliderOption-name').text(item.attr('data-title'));
            $('.showroom__sliderOption-size').text(item.attr('data-size'));
            $('.showroom__sliderOption-price').text(item.attr('data-price'))
        })

    // $('.offers__slider').owlCarousel({
    //     margin: 40,
    //     items: 3,
    //     dots: false,
    //     nav: true,
    //     navContainer: '.offers__nav',
    //     navText: ['<svg class="sliderNavBtn" width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>', '<svg class="sliderNavBtn"  width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>'],
    //     lazyLoad: true,
    //     thumbs: false,
    //     smartSpeed: 1000,
    // }); 

}

const owlSlider = (selector, params) => {
    if (params == undefined) params = ''
    const owl = $(selector);
    owl
        .addClass('owl-carousel owl-theme')
        .owlCarousel(Object.assign(params, {
            nav: true,
            navText: ['<svg class="sliderNavBtn" width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>', '<svg class="sliderNavBtn"  width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>'],
            dots: false,
            items: 1,
            touchDrag: false,
            mouseDrag: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 1000,
            margin: 10
        }));
}

const owlItems = (selector, params, ) => {
    if (params == undefined) params = ''
    const owl = $(selector);
    owl
        .addClass('owl-carousel owl-theme')
        .owlCarousel(Object.assign(params, {
            dots: false,
            nav: true,
            navText: ['<svg class="sliderNavBtn" width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>', '<svg class="sliderNavBtn"  width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>'],
            lazyLoad: true,
            thumbs: false,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                768: {
                    items: 3,
                    margin: 40,
                }
            }
        }));
}

const owlGallery = (selector, params) => {
    if (params == undefined) params = ''
    const owl = $(selector);
    owl.each((i, el) => {
        $(el).addClass('owl-carousel owl-theme')
            .owlCarousel(Object.assign(params, {
                items: 1,
                dots: true,
                lazyLoad: true,
                nav: false,
                margin: 10,
                smartSpeed: 1000,
            }));
    })
}



const compareSlider = (selector) => {
    const owl = $(selector);
    owl.addClass('owl-carousel owl-theme')
    .owlCarousel({
        dots: false,
        lazyLoad: true,
        nav: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            }
        }
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

function itemsCounter(parent, result) {
    var parent = $(parent),
        input = parent.find('input'),
        button = parent.find('button'),
        val,
        count = 1;
    if (input.val() == '') input.attr('value', 1).val(1)
    $(button).eq(0).addClass('subtract');
    $(button).eq(1).addClass('addition');
    $('.subtract').prop('disabled', true);

    $(button).on('click', function () {
        val = Number($(this).siblings('input').attr('value')),

            count = val;
        if (!$(this).prop('disabled')) {

            $(this).closest(parent).find(button).prop('disabled', false);
            if ($(this).hasClass('addition')) {
                count++
            } else {
                if (count - 1 <= 1) {
                    $(this).prop('disabled', true);
                    count == 1
                }
                count--
            };
        }
        $(this).siblings(input).attr('value', count).val(count);
        setResultPrice(result, count)
    });
    $(input)
        .on('mouseenter', function () {
            $(this).focus();
        })
        .on('input', function (e) {
            var inputVal = Number($(this).val());
            $(this).siblings(button).prop('disabled', false)
            if (inputVal === '' || inputVal < 1 || inputVal == 0) {
                $(this).attr('value', '').val('')
                    .siblings('button').prop('disabled', true);
            }
            $(this).attr('value', e.target.value).val(e.target.value);
            setResultPrice(result, e.target.value)
        });

    function setResultPrice(price, val) {
        $(price).each((i, el) => {
            $(el).text(Number($(el).text()) * Number(val))
        })

    }
}

function objectSlider() {
    $('.object__gallery').on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget,
            cur = '0' + (carousel.relative(carousel.current()) + 1),
            length = '0' + carousel.items().length;
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
    if (blocker === true) {
        blocker = false;
        $(document).on('scroll', function () {
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

function yandexMap() {
    if ($("#map").length > 0) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                center: [51.869051532878736, 44.99647525936559],
                zoom: 17,
                "multiTouch": false,
                controls: ['zoomControl']
            }, {
                suppressMapOpenBlock: true
            });
            var myPlacemark = new ymaps.Placemark([51.86911130776214, 44.996507445873775], {
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

    function closeSelect(btn, box) {
        $(btn).removeClass(activeClass)
        $(box).height(0);
    }
    $(btn).on('click', function () {

        var input = $(this).siblings('input'),
            box = $(this).siblings('div'),
            item = box.find('div'),
            btnH = $(this).height(),
            itemL = item.length,
            itemH = item.height();
        if (!$(this).hasClass(activeClass)) {
            closeSelect($(btn), box)
            $(this).addClass(activeClass);
            $(box).height((itemL * itemH));
        } else {
            closeSelect($(this), box);
        }
        $(item).on('click', function () {
            input.val($(this).text());
            closeSelect($(btn), box);
        })
        $(document).on("mousedown", function (e) {
            if (!$(parent).is(e.target) && $(parent).has(e.target).length === 0) {
                closeSelect($(btn), box);
            }
        });
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

function animationInit() {
    $('.animation').css({
        'animation-name': 'slideTo'
    }).hide().show(0);
}

function inputTypeNumberCheck() {
    $('input[data-number]').keydown(function (event) {
        if ($(this).hasClass('error')) {
            $(this).removeClass('error')
        }
        // Разрешаем: backspace, delete, tab и escape
        if (event.keyCode == 46 || event.keyCode == 17 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // Ничего не делаем
            return;

        } else {
            // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
}

const inputSetValue = () => {
    $('input').each((i, el) => {
        if ($(el).val() == '') {
            $(el).attr('value', '');
        }
    }).on('input', function () {
        $(this).removeClass('error')
            .attr('value', $(this).val())
    });
}

$().ready(function () {
    inputTypeNumberCheck();
    inputSetValue()
    mainMenu('.aside__toggle', '.mainMenu');
    modalClose('.modal__close', '.modal');
    escClosing('.modal');
    owls();
    owlSlider('.events__slider', {
        navContainer: '.events__controls'
    })
    owlItems('.offers__slider', {
        navContainer: '.offers__nav'
    });
    owlItems('.offers-set__slider', {
        navContainer: '.offers-set__nav'
    });
    owlGallery('.goods__gallerySlider');
    owlGallery('.catalog__itemGallery');
    tips('.tips__item');
    showMenu('.catalog__other', '.catalog__otherBtn');
    toggleList('.catalog__select');
    activeItemOnClick('.catalog__listHeader');
    activeItemOnClick('.goods__nav');
    if ($('.detail').length > '') {
        detailOwls();
        hashTabs('.detail__contentTabs', '.detail__contentWindows');
        itemsCounter('.offers-set__counter', '.priceResult')
    }
    if ($('.object').length > '') {
        objectSlider();
    }
    if ($('.contacts-page').length > '') {
        yandexMap();
    }
    if ($('.category').length > '') {
        owlGallery('.category__itemGallery')
    }
    if ($('.catalog').length > '') {
        filterModal('.catalog__other', '.catalog__otherFilter');
        filterModal('.catalog__filtersBtn', '.catalog__otherFilter');
    }
    if ($('.compare').length > '') {
        compareSlider('.compare__items');
    }
    if (sessionStorage.getItem('loaded') == null) {
        animationInit()
        $('.preloader').fadeOut(300, () => {
            $('.preloader').remove()
        })
        sessionStorage.setItem('loaded', true);
    } else {
        // $('.animation').removeClass('slideDown slideUp slideLeft slideRight')
        // $('.preloader').remove();

        // после тестов удилить нижнее и раскоментить но это не точно
        $('.preloader').fadeOut(300, () => {
            $('.preloader').remove()
        })
        animationInit()
        sessionStorage.setItem('loaded', true);
    }

});
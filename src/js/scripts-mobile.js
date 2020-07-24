const sliderNav = (select) => {
    var select = $(select);

    const carousel = select
    .addClass('owl-carousel owl-theme')
    .owlCarousel({
        margin: 15,
        dots: false,
        autoWidth: true,
        thumbs: false,
        smartSpeed: 200
    })
    .on('click', (e) => {
        let index = $(e.target).parent().index();
        if(index > 0){
            carousel.trigger('to.owl.carousel', index - 1);
        }
    });
}

const filtersSlideToggle = () =>{
    $('.catalog__otherFilterTitle').on('click', function(){
       if($(this).hasClass('isOpen')){
           $(this).removeClass('isOpen')
           .siblings('.catalog__otherFilterBox').slideUp(200)
       }else{
           $(this).addClass('isOpen')
           .siblings('.catalog__otherFilterBox').slideDown(200).css({'display': 'flex'})
       }
    })
}

const hideContentAndToggle = () =>{
    $('.mainMenu__listTitle').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('isOpen')){
            $(this).removeClass('isOpen')
            .siblings('.mainMenu__listItem').slideUp()
        }else{
            $(this).addClass('isOpen')
            .siblings('.mainMenu__listItem').slideDown(200, function(){
                $(this).css({'display': 'block'})
            })
        }
    })
    $('.mainMenu__item').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('isOpen')){
            $(this).removeClass('isOpen')
            .siblings('.mainMenu__itemSub').slideUp()
        }else{
            $(this).addClass('isOpen')
            .siblings('.mainMenu__itemSub').slideDown(200, function(){
                $(this).css({'display': 'block'})
            })
        }
    })
}

$().ready(() => {
   if($(window).width() < 768){
        sliderNav('.goods__nav');
        sliderNav('.detail__contentTabs');
    }
    if($(window).width() < 1200){
        filtersSlideToggle();
        hideContentAndToggle();
    }
});

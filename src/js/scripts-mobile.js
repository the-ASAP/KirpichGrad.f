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

$().ready(() => {
   if($(window).width() < 768){
        sliderNav('.goods__nav');
    }
});

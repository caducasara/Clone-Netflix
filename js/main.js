$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.btn-assistir').click(function(e){
    e.stopPropagation();
    $('.assistir').fadeIn(function(){
        $('.assistir').css('display','flex');
    });

    $('body').click(function(){
        $('.assistir').fadeOut();
    });
});
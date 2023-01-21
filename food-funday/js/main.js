//=======================> change Text   <=============

var typed = new Typed('.element', {
    strings: ["Friends", "Family", "Officemates"],
    cursorChar: '_',
    typeSpeed: 100,
    loopCount: Infinity,
    loop: true,
    backSpeed: 100,
    
});

//=======================> change navbar color && and size of logo   <=============

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $(".navbar").css("backgroundColor", "black");
        $(".navbar-brand img").removeClass('w-100').addClass('w-75');

    } else {
        $(".navbar").css("backgroundColor", "transparent");
        $(".navbar-brand img").addClass('w-100');
    }
});

//=======================> add active to navbar link and scroll to section <=============
$(".nav-item .nav-link").click(function(e) {
    e.preventDefault;
    $("body,html").animate({
        scrollTop: $('#' + $(this).data('scroll'))
            .offset().top

    }, 1000);
    $('.navbar-nav .nav-link').click(function() {
        $('.navbar li a').removeClass('ActiveNav')
        $(this).addClass('ActiveNav');
    })
});

//=======================> button Hover  <=============

$('.from-left').hover(function() {

        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 200);


    },
    function() {

        $(this).find('span').eq(0).animate({
            width: '0'
        }, 200);




    });

//=======================> Menu slider  <=============

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
       
        rtl: true,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        paginationSpeed: 300,
        rewindSpeed: 400,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }


    });
});

//=======================> sidebar option  <=============

$('.fixed-menu .fa-cog').click(function() {

    $(this).parent('.fixed-menu').toggleClass('is-visiable');
    if ($(this).parent('.fixed-menu').hasClass('is-visiable')) {
        $(this).parent('.fixed-menu').animate({
            left: '0px'

        }, 500);

    } else {
        $(this).parent('.fixed-menu').animate({
            left: '-220px'
        }, 500);
    }



});

//=======================> change text Color In the WebSite  <=============

let changeColor = $('.color-item');
changeColor.eq(0).css('backgroundColor', '#e75b1e');
changeColor.eq(1).css('backgroundColor', 'green');
changeColor.eq(2).css('backgroundColor', 'purple');
changeColor.eq(3).css('backgroundColor', 'red');
changeColor.click(function() {
    let newColor = $(this).css('backgroundColor');
    $('.ccolor').css('color', newColor)
})

//=======================> filter Data =============

$('.btn').click(function() {




    let value = $(this).attr('data-filter');

    if (value == 'All') {
        $('.filter').show("1000")
    } else {
        $('.filter').not('.' + value).hide("1000");
        $('.filter').filter('.' + value).show("1000");
        $('.btn').addClass("text-light");

        $(this).addClass("menuActive").siblings().removeClass("menuActive");


    }
})


AOS.init();




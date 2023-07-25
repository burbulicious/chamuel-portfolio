
$(document).ready(function () {
      
    var headerHeight = $('.header').height() ;
    var hieghtThresholdProducts = $('#products').offset().top -headerHeight ;
    var hieghtThresholdProducts_end  = $('#products').offset().top +$('#products').height() ;

    var hieghtThresholdAbout = $('#about').offset().top -headerHeight ;
    var hieghtThresholdAbout_end  = $('#about').offset().top +$('#about').height() ;

    // var hieghtThresholdQuotes = $('#quotes').offset().top -headerHeight ;
    // var hieghtThresholdQuotes_end  = $('#quotes').offset().top +$('#quotes').height() ;

    var hieghtThresholdContact = $('#contact').offset().top -headerHeight ;
    var hieghtThresholdContact_end  = $('#contact').offset().top +$('#contact').height() ;

    setTimeout(function() {
        $('.hero__enter-logo').fadeOut(1000);
    }, 500);
    setTimeout(function() {
        if ($(window).width() > 768) {
            $('.hero__bg__inner').animate ({
                left:"50%"
                }, 800, function() {}
            );
        }
        else {
        }
    }, 1000);
    setTimeout(function() {
        $('.hero__text-box').fadeIn(1000).removeClass('enter');
    }, 1000);
    setTimeout(function() {

        // if ($(window).width() < 768) {
        //     $('.hero__menu__inner').css("display","none");
        // }
        // else {
        //     $('.hero__menu__inner').fadeIn(1000).removeClass('enter');
        // }
        $('.hero__menu__inner').fadeIn(1000).removeClass('enter');
        $('.header').fadeIn(1000).removeClass('enter');
    }, 2000);
    
    $('.hero__enter-logo').click(function() {
        $('.hero__enter-logo').fadeOut(500);
        if ($(window).width() > 768) {
            $('.hero__bg__inner').animate ({    
                left:"50%"
                }, 1000, function() {}
            );
        }
        else {
        }
        $('.hero__menu__inner').fadeIn(800).removeClass('enter');
        $('.header').fadeIn(800).removeClass('enter');
        $('.hero__text-box').fadeIn(800).removeClass('enter');
      
    });
    $('.burger').click(function() {
        $(this).toggleClass('active');
        
        $('.header').toggleClass('mobile-open');
        if ($(this).hasClass('active')) {
            $('.header-cta').removeClass('inverse');
        } else {
            $('.header-cta').addClass('inverse');
        }
        if ($('.header').hasClass('header-lower')) {
            $('.header-cta').removeClass('inverse');
        } else {  }
    });

    if ($(window).width() < 1300) {
        $('.header__content__links__one').click(function() {
            $('.burger').removeClass('active');
            $('.header').removeClass('mobile-open');
        });
    } else {}
    if ($(window).width() < 576) {
        $('.products-mobile-slider').slick({
            arrows: true
        });
        $('.qoutes-mobile-slider').slick({
            arrows: true
        });
    } else {}
    

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $('.header').addClass('header-lower');
            $('.header-cta').removeClass('inverse');
            $('.hero__menu__inner').css("display","none");
            $('.header__content__logo__white').removeClass('show');
            $('.header__content__logo__white').addClass('hide');
            $('.header__content__logo__dark').removeClass('hide');
            $('.header__content__logo__dark').addClass('show');
            
        } else {
            $('.header').removeClass('header-lower');
            setTimeout(function() {

                if ($(window).width() < 768) {
                    $('.hero__menu__inner').css("display","block");
                }
                else {
                    $('.hero__menu__inner').fadeIn(1000).removeClass('enter');
                }
                $('.hero__menu__inner').fadeIn(1000).removeClass('enter');
                $('.header').fadeIn(1000).removeClass('enter');
            }, 2000);
            if ($('.header').hasClass('mobile-open')) {
                $('.header-cta').removeClass('inverse');
            } else {
                $('.header-cta').addClass('inverse');
            }
            // if ($(window).width() < 768) {
            //     $('.hero__menu__inner').css("display","none");
            // }
            // else {
            //     $('.hero__menu__inner').css("display","block");
            // }
            $('.header__content__logo__white').removeClass('hide');
            $('.header__content__logo__white').addClass('show');
            $('.header__content__logo__dark').removeClass('show');
            $('.header__content__logo__dark').addClass('hide');
            
        }

        
        if (scroll >= hieghtThresholdProducts && scroll <=  hieghtThresholdProducts_end ) {
            $('#products-link').addClass('active-menu-link');
        } else {
            $('#products-link').removeClass('active-menu-link');
        }
        
        if (scroll >= hieghtThresholdAbout && scroll <=  hieghtThresholdAbout_end ) {
            $('#about-link').addClass('active-menu-link');
        } else {
            $('#about-link').removeClass('active-menu-link');
        }

        // if (scroll >= hieghtThresholdQuotes && scroll <=  hieghtThresholdQuotes_end ) {
        //     $('#quotes-link').addClass('active-menu-link');
        //     $('.quotes__header-col__title').addClass('fixed');
        // } else {
        //     $('#quotes-link').removeClass('active-menu-link');
        //     $('.quotes__header-col__title').removeClass('fixed');
        // }

        if (scroll >= hieghtThresholdContact && scroll <=  hieghtThresholdContact_end ) {
            $('#contact-link').addClass('active-menu-link');
        } else {
            $('#contact-link').removeClass('active-menu-link');
        }
    });
    $('.header__content__links__one').click(function() {
        $(this).removeClass('active-menu-link');
        $('#contact-link').removeClass('active-menu-link');
        $(this).addClass('active-menu-link');
    });

    // Smooth scrolling for browsers that don't support CSS smooth scrolling
    if (window.getComputedStyle(document.documentElement).scrollBehavior !== 'smooth') {
        document.querySelectorAll('a[href^="#"]').forEach(internalLink => {
            const targetElement = document.querySelector(internalLink.getAttribute('href'));
            if (targetElement) {
                internalLink.addEventListener('click', (e) => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                    });
                    e.preventDefault();
                });
            }
        });
    }
    // AOS.init();

    $(window).on("load",function() {
        $(window).scroll(function() {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          $(".fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
              if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else { //object goes out of view (scrolling up)
              if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
          });
        }).scroll(); //invoke scroll-handler on page-load
      });
      

    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
            } else {
            $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll', check_if_in_view);
});


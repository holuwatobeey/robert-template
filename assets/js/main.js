



(function ($) {
    'use strict';

    /* Color Customizer */
    function tmCustomizer() {
        var customizer = $('.tm-customizer');
        var dataColorCss = $('[data-color-css]');
        var currentColorfile = '';

        customizer.find('.tm-customizer-opener').on('click', function () {
            customizer.toggleClass('open');
        });

        customizer.find('.tm-customizer-colorbox').on('click', 'li', function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            currentColorfile = $(this).data('colorfile');
            dataColorCss.attr('href', currentColorfile);
            document.cookie = 'hozoborol=' + $(this).data('colorfile');
        });

        var getCookie = document.cookie.split(';');

        function arraySearch() {
            for (var i = 0; i < getCookie.length; i++) {
                if (getCookie[i].indexOf('hozoborol') != -1) {
                    var getContent = getCookie[i].replace('hozoborol=', '');
                    dataColorCss.attr('href', getContent);
                }
            }
        }

        if (getCookie.length >= 1) {
            arraySearch();
        }

    }
    tmCustomizer();

    /* Custom Functions */
    jQuery.fn.exists = function () {
        return this.length > 0;
    };

    var Robert = {

        /* Preloader Activation */
        preloaderActivation: function () {
            $('.tm-preloader').delay(300).fadeOut('slow');
            $('.tm-preloader').find('.tm-button').on('click', function () {
                $(this).parent('.tm-preloader').fadeOut('slow');
            });
        },

        /* Meanmenu Activation */
        meanmenuActivation: function () {
            $('nav.tm-navigation').meanmenu({
                meanMenuContainer: '.tm-mobilenav',
                meanScreenWidth: '991',
                meanMenuOpen: '<i class="fas fa-bars"></i>',
                meanMenuClose: '<i class="fas fa-times"></i>'
            });
        },

        /* Inline Background Image */
        dataBgImage: function () {
            $('[data-bgimage]').each(function () {
                var imageUrl = $(this).data('bgimage');
                $(this).css({
                    'background-image': 'url(' + imageUrl + ')'
                });
            });
        },

        /* Header Search Form */
        haderSearchForm: function () {
            $('.header-searchtrigger').on('click', function (e) {
                e.preventDefault();
                $('.header-searchbox').toggleClass('is-visible');
            });

            $('.header-searchbox .search-close').on('click', function (e) {
                e.preventDefault();
                $(this).parents('.header-searchbox').removeClass('is-visible');
            });
        },

        /* Heroslider Height */
        herosliderHeight: function () {
            var headerHeight = $('.header').innerHeight();

            $('.heroslider-singleslider').css({
                'min-height': 'calc(100vh - ' + headerHeight + 'px)',
            });
        },

        /* Button Effect */
        buttonEffect: function () {
            $('.tm-button')
                .on('m ouseenter', function (e) {
                    var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                    $(this).find('b').css({
                        top: relY,
                        left: relX
                    });
                })
                .on('mouseout', function (e) {
                    var parentOffset = $(this).offset(),
                        relX = e.pageX - parentOffset.left,
                        relY = e.pageY - parentOffset.top;
                    $(this).find('b').css({
                        top: relY,
                        left: relX
                    });
                });
            $('[href="#"]').on('click', function () {
                return false;
            });
        },

        /* Slider Activations */
        sliderActivations: {

            /* Heroslider Activation */
            heroSliderActivation: function () {
                $('.heroslider-slider').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    arrows: false,
                    dots: true,
                    adaptiveHeight: false,
                    responsive: [{
                        breakpoint: 1201,
                        settings: {
                            adaptiveHeight: true
                        }
                    }]
                });
            },

            /* Heroslider Activation 2 */
            heroSliderActivation2: function () {
                $('.heroslider-slider-2').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="tm-slider-arrow-prev"><i class="fas fa-chevron-left"></i></button>',
                    nextArrow: '<button class="tm-slider-arrow-next"><i class="fas fa-chevron-right"></i></button>',
                    dots: false,
                    adaptiveHeight: false,
                    responsive: [{
                        breakpoint: 1201,
                        settings: {
                            adaptiveHeight: true
                        }
                    }]
                });
            },

            /* Feature Slider Activation */
            featureSliderActivation: function () {
                $('.features-slider-active').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: true,
                    arrows: false,
                    dots: true
                });
            },

            /* Testimonial Slider */
            testimonialSliderActivation: function () {
                $('.testimonial-slider-active').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                });
            },

            /* Testimonial Slider 2 */
            testimonialSlider2Activation: function () {
                $('.tm-testimonial2-contentslider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    asNavFor: '.tm-testimonial2-videoslider'
                });
                $('.tm-testimonial2-videoslider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: '.tm-testimonial2-contentslider',
                    vertical: true,
                });

            },

            /* Product Vertical Slider */
            productVerticalSliderActivation: function () {
                $('.product-vertical-slider-active').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: true,
                    arrows: false,
                    dots: true
                });
            },

            /* Blog Slider Activation */
            blogSliderActivation: function () {
                $('.blog-slider-active').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    arrows: false,
                    dots: false,
                    responsive: [{
                            breakpoint: 1800,
                            settings: {
                                slidesToShow: 4,
                            }
                        },
                        {
                            breakpoint: 1300,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 2,
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },

            /* Brand Logo Slider */
            brandlogoSliderActivation: function () {
                $('.brandlogo-slider').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    arrows: false,
                    dots: false,
                    responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 420,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },

            /* Portfolio Gallery Slider */
            portfolioGallerySliderActivation: function () {
                $('.tm-portfoliodetails-gallery').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="tm-slider-arrow-prev"><i class="fas fa-chevron-left"></i></button>',
                    nextArrow: '<button class="tm-slider-arrow-next"><i class="fas fa-chevron-right"></i></button>',
                    dots: false,
                });
            },

            /* Blog Gallery Slider */
            blogGallerySliderActivation: function () {
                $('.blogitem-imageslider').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="tm-slider-arrow-prev"><i class="fas fa-chevron-left"></i></button>',
                    nextArrow: '<button class="tm-slider-arrow-next"><i class="fas fa-chevron-right"></i></button>',
                    dots: false,
                });
            },

            /* Product Details Image Slider */
            productDetailsImageSlider: function () {
                $('.tm-prodetails-thumbs').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                });
            },

            /* Similliar Product Slider */
            similliarProductSlider: function () {
                $('.tm-similliar-products-slider').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="tm-slider-arrow-prev"><i class="fas fa-chevron-left"></i></button>',
                    nextArrow: '<button class="tm-slider-arrow-next"><i class="fas fa-chevron-right"></i></button>',
                    dots: false,
                    responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },

            /* Slider Activations Initializer ( Just Remove a single line if you want to disable any slider ) */
            init: function () {
                Robert.sliderActivations.heroSliderActivation();
                Robert.sliderActivations.heroSliderActivation2();
                Robert.sliderActivations.featureSliderActivation();
                Robert.sliderActivations.testimonialSliderActivation();
                Robert.sliderActivations.testimonialSlider2Activation();
                Robert.sliderActivations.productVerticalSliderActivation();
                Robert.sliderActivations.blogSliderActivation();
                Robert.sliderActivations.brandlogoSliderActivation();
                Robert.sliderActivations.portfolioGallerySliderActivation();
                Robert.sliderActivations.blogGallerySliderActivation();
                Robert.sliderActivations.productDetailsImageSlider();
                Robert.sliderActivations.similliarProductSlider();
            }

        },

        /* Countdown Activation */
        countdownActivation: function () {
            $('.tm-countdown').each(function () {
                var $this = $(this),
                    finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function (event) {
                    $this.html(event.strftime(
                        '<div class="tm-countdown-pack tm-countdown-day"><h2 class="tm-countdown-count">%-D</h2><h5>Days</h5></div><div class="tm-countdown-pack tm-countdown-hour"><h2 class="tm-countdown-count">%-H</h2><h5>Hour</h5></div><div class="tm-countdown-pack tm-countdown-minutes"><h2 class="tm-countdown-count">%M</h2><h5>Min</h5></div><div class="tm-countdown-pack tm-countdown-seconds"><h2 class="tm-countdown-count">%S</h2><h5>Sec</h5></div>'));
                });
            });
        },

        /* CounterUp Activation */
        counterupActivation: function () {
            if ($('.odometer').length) {
                $(window).on('scroll', function () {
                    function winScrollPosition() {
                        var scrollPos = $(window).scrollTop(),
                            winHeight = $(window).height();
                        var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
                        return scrollPosition;
                    }
                    var elemOffset = $('.odometer').offset().top;
                    if (elemOffset < winScrollPosition()) {

                        $('.odometer').each(function () {
                            $(this).html($(this).data('count-to'));
                        });
                    }
                });
            }
        },

        /* Wowjs Activation */
        wowJsActive: function () {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            });
            wow.init();
        },

        /* Pricebox State Active */
        priceboxActiveState: function () {
            $('.tm-pricebox').each(function () {
                if ($(this).hasClass('is-active') == true) {
                    $(this).find('.tm-button').removeClass('tm-button-dark');
                }
            });
        },

        /* Blog Hover State */
        blogHoverState: function () {
            $('.blogitem').each(function () {
                $(this).on('mouseover', function () {
                    $(this).find('.blogitem-content').find('.tm-button').removeClass('tm-button-dark');
                }).on('mouseout', function () {
                    $(this).find('.blogitem-content').find('.tm-button').addClass('tm-button-dark');
                });
            });
        },

        /* Blog Social Action */
        blogSocialAction: function () {
            $('.blogitem').each(function () {
                $(this).find('.blogitem-share-trigger').on('click', function () {
                    $(this).toggleClass('is-active');
                    $(this).siblings('ul').toggleClass('is-visible');
                });
            });
        },

        stickySidebarActive: function () {
            var winWidth = $(window).width();
            if (winWidth > 991) {
                $('.sticky-sidebar').stickySidebar({
                    topSpacing: 0,
                    bottomSpacing: 30
                });
            }
        },

        /* Popup Activations */
        popupActivation: {

            /* Video Pupup Activation */
            videoPopup: function () {
                $('.tm-videobutton').lightGallery({
                    selector: 'a'
                });
            },

            /* Portfolio Image Popup Activation */
            portfolioImagePopup: function () {
                $('.tm-portfolio').lightGallery({
                    selector: '.zoom-button a',
                    thumbnail: false,
                });
            },

            /* Portfolio Details Image Popup Activation */
            portfolioDetailsImagePopup: function () {
                $('.tm-portfoliodetails-image').lightGallery({
                    selector: 'a',
                    thumbnail: false,
                });
            },

            /* Product Details Image Zoom Activation */
            productDetailsImageZoom: function () {
                $('.tm-prodetails-largeimage').lightGallery({
                    selector: '.tm-prodetails-zoomimage',
                    thumbnail: false,
                });
            },

            /* Popup Initializations */
            init: function () {
                Robert.popupActivation.videoPopup();
                Robert.popupActivation.portfolioImagePopup();
                Robert.popupActivation.portfolioDetailsImagePopup();
                Robert.popupActivation.productDetailsImageZoom();
            }
        },

        /* Portfolio Filter */
        portfolioFilter: function () {
            $('.tm-portfolio-wrapper').imagesLoaded({
                background: true
            }, function () {
                $('.tm-portfolio-wrapper').isotope({
                    itemSelector: '.tm-portfolio-item',
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: 1,
                    }
                });
            });

            $('.tm-portfolio-buttons button').on('click', function () {
                var filterValue = $(this).attr('data-filter');
                $('.tm-portfolio-wrapper').isotope({
                    filter: filterValue
                });

                $('.tm-portfolio-buttons button').removeClass('is-active');
                $(this).addClass('is-active');
            });
        },

        /* Blog Masonry Active */
        blogMasonryActive: function () {
            $('.blog-masonry-active').masonry({
                itemSelector: '.blog-masonry-item'
            });
        },

        /* Range Slider Active */
        rangeSlider: function () {
            $('.tm-rangeslider').nstSlider({
                'left_grip_selector': '.tm-rangeslider-leftgrip',
                'right_grip_selector': '.tm-rangeslider-rightgrip',
                'value_bar_selector': '.tm-rangeslider-bar',
                'value_changed_callback': function (cause, leftValue, rightValue) {
                    $(this).parent().find('.tm-rangeslider-leftlabel').text(leftValue);
                    $(this).parent().find('.tm-rangeslider-rightlabel').text(rightValue);
                }
            });
        },

        /* Nice Slect Active */
        niceSelectActive: function () {
            $('select').niceSelect();
        },

        /* Product Details Zoom */
        productDetailsZoom: function () {
            $('.tm-prodetails-largeimage img').elevateZoom({
                gallery: 'image-gallery',
                galleryActiveClass: 'active',
                zoomWindowWidth: 300,
                zoomWindowHeight: 100,
                scrollZoom: false,
                zoomType: 'inner',
                cursor: 'crosshair'
            });
            $('.tm-prodetails-largeimage img').elevateZoom({
                gallery: 'image-gallery2',
                galleryActiveClass: 'active',
                zoomWindowWidth: 300,
                zoomWindowHeight: 100,
                scrollZoom: false,
                zoomType: 'inner',
                cursor: 'crosshair'
            });
        },

        /* Product Quantitybox */
        productQuantityBox: function () {
            $('.tm-quantitybox').append('<div class="decrement-button tm-quantitybox-button">-</i></div><div class="increment-button tm-quantitybox-button">+</div>');
            $('.tm-quantitybox-button').on('click', function () {
                var button = $(this);
                var quantityOldValue = button.parent().find('input').val();
                var quantityNewVal;
                if (button.text() == "+") {
                    quantityNewVal = parseFloat(quantityOldValue) + 1;
                } else {
                    if (quantityOldValue > 1) {
                        quantityNewVal = parseFloat(quantityOldValue) - 1;
                    } else {
                        quantityNewVal = 1;
                    }
                }
                button.parent().find('input').val(quantityNewVal);
            });
        },

        /* Product Details Zoom Image Change */
        productDetailsImageZoomChange: function () {
            $('.tm-prodetails-thumbs').find('a').on('click', function (e) {
                e.preventDefault();
                var largeImage = $(this).data('zoom-image');
                $('.tm-prodetails-largeimage').find('img').attr('data-zoom-image', largeImage);
                $('.tm-prodetails-zoomimage').attr('href', largeImage);
            });
        },

        /* Product Details Color & Size Active */
        productDetailsColorSize: function () {
            $('.tm-prodetails-color ul li, .tm-prodetails-size ul li').on('click', 'span', function (e) {
                e.preventDefault();
                $(this).parent('li').addClass('is-checked').siblings().removeClass('is-checked');
            });
        },

        /* Product Rating Input */
        productRatingInput: function () {
            $('.tm-rating-input').each(function () {
                $(this).find('span').on('mouseenter', function () {
                    $('.tm-rating-input span').addClass('active');
                    $(this).nextAll('span').removeClass('active');
                });

            });
        },

        /* Different Address Form */
        differentAddressFormToggle: function () {
            $('#billform-dirrentswitch').on('change', function () {
                if ($(this).is(':checked')) {
                    $('.tm-checkout-differentform').slideDown();
                } else {
                    $('.tm-checkout-differentform').slideUp();
                }
            });
        },

        /* Checkout Payment Method */
        checkoutPaymentMethod: function () {
            $('.tm-checkout-payment input[type="radio"]').each(function () {
                if ($(this).is(':checked')) {
                    $(this).siblings('.tm-checkout-payment-content').slideDown();
                }
                $(this).siblings('label').on('click', function () {
                    $('.tm-checkout-payment input[type="radio"]').prop('checked', false).siblings('.tm-checkout-payment-content').slideUp();
                    $(this).prop('checked', true).siblings('.tm-checkout-payment-content').slideDown();
                });
            });
        },

        /* Scroll Up Active */
        scrollUpActive: function () {
            $.scrollUp({
                scrollName: 'scrollUp',
                topDistance: '300',
                topSpeed: 1000,
                animation: 'fade',
                animationInSpeed: 1000,
                animationOutSpeed: 1000,
                scrollText: '<i class="fas fa-chevron-up"></i>',
                activeOverlay: false,
            });
        },

        /* Modal Slick Conflict */
        modalSlickConflict: function () {
            $('.tm-product-quickview').on('show.bs.modal', function () {
                $('.tm-prodetails-thumbs').slick('slickNext');
            });
        },

        /* Sticky Header */
        stickyHeader: function () {
            $(window).on('scroll', function () {
                var scrollPos = $(this).scrollTop();
                if (scrollPos > 220) {
                    $('.header').addClass('sticky-active');
                } else {
                    $('.header').removeClass('sticky-active');
                }
            });
        },

        /* Parallax Active */
        parallaxActive: function () {
            $('.tm-parallax').jarallax({
                speed: 0.2
            });
        },

        /* Video Background Active */
        videoBackgroundActive: function () {
            if ($('.tm-videobg').exists()) {
                $('.tm-videobg').YTPlayer({
                    autoplay: true
                });
            }
        },


        /* Ajax Mailchimp */
        ajaxMailchimp: function () {
            $('#tm-mailchimp-form').ajaxChimp({
                language: 'en',
                callback: mailChimpResponse,
                // ADD YOUR MAILCHIMP URL BELOW HERE!
                url: 'YOUR_MAILCHIMP_URL_HERE'
            });

            function mailChimpResponse(resp) {
                if (resp.result === 'success') {
                    $('.tm-mailchimp-success').html('' + resp.msg).fadeIn(900);
                    $('.tm-mailchimp-error').fadeOut(400);
                } else if (resp.result === 'error') {
                    $('.tm-mailchimp-error').html('' + resp.msg).fadeIn(900);
                }
            }
        },


        /* Menu Overflow */
        menuOverflow: function () {
            $('.tm-navigation ul li').on('mouseenter mouseleave', function (e) {
                if ($('ul', this).length) {
                    var listElem = $('ul:first', this);
                    var listElemOffset = listElem.offset();
                    var leftValue = listElemOffset.left - $('body').offset().left;
                    var widthValue = listElem.width();

                    if (listElem.find('ul').length) {
                        widthValue = listElem.width() * 2;
                    }

                    var docW = $('body').width();
                    var isEntirelyVisible = (leftValue + widthValue <= docW);

                    if (!isEntirelyVisible) {
                        $(this).addClass('overflow-element');
                    } else {
                        $(this).removeClass('overflow-element');
                    }
                }
            });
        },

        /* Particle Active */
        particleJsActive: function () {
            if ($('#particles-js').exists()) {
                particlesJS.load('particles-js', 'assets/json/particles.json', function () {
                    console.log('');
                });
            }
        },


        /* Ripple Js Active */
        rippleJsActive: function () {
            if ($('.tm-rippple-active').exists()) {
                $('.tm-rippple-active').ripples();
            }
        },

        /* Animated Headline Active */
        animatedHeadline: function () {
            $('.tm-animated-text').textillate({
                loop: true,
                autoStart: true,
                minDisplayTime: 4000,
                in: {
                    delayScale: 1.5,
                    delay: 100,
                    sync: false,
                    reverse: false,
                },
                out: {
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    reverse: false,
                },
            });
        },

        /* Initializer */
        init: function () {
            Robert.meanmenuActivation();
            Robert.dataBgImage();
            Robert.haderSearchForm();
            Robert.herosliderHeight();
            Robert.buttonEffect();
            Robert.sliderActivations.init();
            Robert.countdownActivation();
            Robert.counterupActivation();
            Robert.wowJsActive();
            Robert.priceboxActiveState();
            Robert.blogHoverState();
            Robert.blogSocialAction();
            Robert.stickySidebarActive();
            Robert.popupActivation.init();
            Robert.portfolioFilter();
            Robert.blogMasonryActive();
            Robert.rangeSlider();
            Robert.niceSelectActive();
            Robert.productDetailsZoom();
            Robert.productQuantityBox();
            Robert.productDetailsImageZoomChange();
            Robert.productDetailsColorSize();
            Robert.productRatingInput();
            Robert.differentAddressFormToggle();
            Robert.checkoutPaymentMethod();
            Robert.scrollUpActive();
            Robert.modalSlickConflict();
            Robert.stickyHeader();
            Robert.parallaxActive();
            Robert.videoBackgroundActive();
            Robert.ajaxMailchimp();
            Robert.menuOverflow();
            Robert.particleJsActive();
            Robert.rippleJsActive();
            Robert.animatedHeadline();
            Robert.preloaderActivation();
        }
    };

    Robert.init();


})(jQuery);
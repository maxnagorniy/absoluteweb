;
// Custom JS


$( document ).ready(function() {

    $('.menu-icon__btn').on('click', function () {
        $('.header-nav').slideToggle( "300");
        $(this).find('i.fas').toggleClass("fa-bars fa-times");
    });

    $('.search-icon__btn').on('click', function () {
        $('.search-toggle').slideToggle( "300");
        $(this).find('i.fas').toggleClass("fa-search fa-times");
    });


    $('.footer-open').on('click', function () {
        $(this).parent().find('div.footer-info').slideToggle( "300");
        $(this).toggleClass('active').find('i.fas').toggleClass("fa-chevron-down fa-chevron-up");
    });


    var menu = $('.header-nav');

    $(window).scroll(function(){
        if($(this).scrollTop() > 250 && menu.hasClass('default')){
            menu.fadeOut('fast', function(){
                $(this).removeClass('default').addClass('fixed').fadeIn('fast');
            });
        } else if($(this).scrollTop() <= 250 && menu.hasClass('fixed')){
            menu.fadeOut('fast', function(){
                $(this).removeClass('fixed').addClass('default').fadeIn('fast');
            });
        }
    });

    function checkWidth() {
        var $window = $(window);
        var windowsize = $window.width();
        if (windowsize > 767) {
            $('.search-toggle').removeAttr("style");
            $('.footer-info').removeAttr("style");
        }
        if (windowsize < 1200) {
            $('.header-nav').removeClass('default').removeAttr("style");
        }
        if (windowsize > 1200){
            $('.header-nav').addClass('default').removeAttr("style");
        }
    }

    checkWidth();
    $(window).resize(checkWidth);
    
    
    
    

    var rateYoPercent = document.getElementById('rateYo');


    $("#rateYo").rateYo({
        rating: rateYoPercent.dataset.percent,
        readOnly: true,
        spacing: "4px",
        normalFill: "rgba(0,0,0,0)",
        ratedFill: "#e7ab65",
        starWidth: "17px",
        starSvg: '<svg aria-hidden="true" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
    });


    $("#rate_radio").rateYo({
        rating: 0,
        fullStar: true,
        spacing: "4px",
        normalFill: "rgba(0,0,0,0)",
        ratedFill: "#e7ab65",
        starWidth: "17px",
        starSvg: '<svg aria-hidden="true" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>',
        onSet: function (rating, rateYoInstance) {
            alert("Rating is set to: " + rating);
        }
    });


    $(".owl-carousel").owlCarousel({
        items: 1,
        dotsData: true,
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        responsive : {
            0:{
                nav: false
            },
            768:{
                nav: true
            }
        }
    });

});


function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 47.846238, lng: 35.068482},
        disableDefaultUI: false,
        scrollwheel: false,
        mapTypeControl: false,
        zoom: 15,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "lightness": "6"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#292d32"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#4d5156"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#4d5156"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0049b0"
                    }
                ]
            }
        ]
    });
}
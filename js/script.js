/* Home Slider Section Start */

$('.featured-videos').slick({
  slidesToShow: 3,
  slidesToScroll:3,
  autoplay: true,
  autoplaySpeed: 2500,
  speed:2500,
  infinite:true,
  dots:true,
  arrows:false,
  responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow:2,
          slidesToScroll:2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
          autoplay:true
        }
      }
    ]
});

/* Home Slider Section End */

/* Reviews Slider Section Start */

$('.reviews-slider').slick({
slidesToShow: 1,
slidesToScroll:1,
autoplay:false,
autoplaySpeed: 2500,
speed:2500,
infinite:true,
dots:true,
arrows:false,
});

/* Reviews Slider Section End */

/* Gaming Slider Section Start */

$('.gaming-slider').slick({
slidesToShow: 1,
slidesToScroll:1,
autoplay:false,
autoplaySpeed: 2500,
speed:2500,
infinite:true,
dots:true,
arrows:false,
});

/* Gaming Slider Section End */

/* Shorts Slider Section Start */

$('.shorts-slider').slick({
slidesToShow: 5,
slidesToScroll:1,
autoplay: true,
autoplaySpeed: 2500,
speed:2500,
infinite:true,
dots:true,
arrows:false,
responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow:3,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
      }
    }
  ]
});

/* Shorts Slider Section End */
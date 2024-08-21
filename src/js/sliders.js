import $ from 'jquery'
import 'slick-carousel'
window.jQuery = window.$ = $;
export const initSliders = () => {
    const slider = $('.hero-slider');
    slider.slick({
        infinite: true,
        speed: 600,
        delay: 6000,
        slidesToShow: 1,
        fade: true,
        lazyLoad: 'ondemand',
        arrows: false,
    });

    $('.bestsellers-slider').slick({
        slidesToShow: 5,
        dots:false,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
    });

    $('.popular-farms-slider').slick({
      slidesToShow: 6,
      dots:false,
      arrows: true,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
  });
    
}

export default initSliders
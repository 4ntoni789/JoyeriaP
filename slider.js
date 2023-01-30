new Glider(document.querySelector('.carouselLista'),{
  slidesToShow: 2,
  slidesToScroll: 1,
  
  dots: '.carouselIndicadores',
  arrows: {
    prev: '.carouselAnterior',
    next: '.carouselSiguiente'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 200,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 1,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});
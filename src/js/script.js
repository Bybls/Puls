
  const slider = tns({
    container: '.carousel__slider',
    items: 1,
    slideBy: 'page',
    autoHeight: true,
    controls: false,
    nav: true,
    navPosition: 'bottom',
    mouseDrag: true,
    responsive: {
        765: {
            nav: false,
            mouseDrag: false,
        }
    }
  });

  document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };
  document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };
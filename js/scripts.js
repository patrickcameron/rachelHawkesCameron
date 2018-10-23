// Init Barba.js (PJAX)
if (typeof Barba.Pjax === 'object') {

    // Make sure Flickity gallery is enabled when the user visits a Gallery page
    var barbaGalleryInit = Barba.BaseView.extend({
      namespace: 'gallery',
      onEnterCompleted: function() {
          $('.gallery').flickity({
            wrapAround: true,
            imagesLoaded: true,
            setGallerySize: false,
            pageDots: false,
            cellSelector: '.gallery-cell'
          });
      }
    });

    barbaGalleryInit.init();
    Barba.Prefetch.init();
    Barba.Pjax.start();

}

// Init Flickity for galleries
$('.gallery').flickity({
  wrapAround: true,
  imagesLoaded: true,
  setGallerySize: false,
  pageDots: false,
  cellSelector: '.gallery-cell'
});

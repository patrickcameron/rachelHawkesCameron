// Init Barba.js (PJAX)
if (typeof Barba.Pjax === 'object') {

    Barba.Pjax.start();

    var barbaGalleryInit = Barba.BaseView.extend({
      namespace: 'gallery',
      onEnter: function() {
          console.log( 'Barba view: gallery' );
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

} else {
    console.log( 'no barba' + typeof Barba.Pjax);
}

// Init Flickity for galleries
$('.gallery').flickity({
  wrapAround: true,
  imagesLoaded: true,
  setGallerySize: false,
  pageDots: false,
  cellSelector: '.gallery-cell'
});

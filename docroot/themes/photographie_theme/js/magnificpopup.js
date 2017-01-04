(function ($) {
  $(document).ready(function() {

    $('.popup-image-expand').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile mfp-with-zoom',
      image: {
        verticalFit: true
      }
    });

    $('.view-category-view .popup-image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile mfp-with-zoom',
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
    });

    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,

      // When element is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function() {
          // get all selected image values
          // 
        }
      }
    });

  });
}(jQuery));

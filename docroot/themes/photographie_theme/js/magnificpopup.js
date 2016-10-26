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
      }
    });

  });
}(jQuery));

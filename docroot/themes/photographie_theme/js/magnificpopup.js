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

      callbacks: {
        beforeOpen: function() {

          var searchIDs = $("#private-images input:checked").map(function(){
            return $(this).val();
          }).get();

          searchIDs.forEach(function(item) {
            var img = '/system/files' + item.substring(9);
            console.log(img);
            $('.popup-selected').append('<img src="' + img + '" />');
          });

        }
      }
    });

  });
}(jQuery));

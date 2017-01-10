(function ($) {
  $(document).ready(function() {

    // Masonry grid - Imagesloaded
    var $grid = $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      gutter: 15
    });

    $grid.imagesLoaded().progress(function() {
      $grid.masonry('layout');
    }).done(function() {
      $('.image-wrapper .expand-icon').css('opacity', 1);
    });




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

          var images = $("#private-images input:checked").map(function(){
            return $(this).val();
          }).get();

          images.forEach(function(item) {
            var img = '/system/files' + item.substring(9);
            console.log(img);
            $('.popup-selected').append('<img src="' + img + '" />');
          });
        }
      }
    });

    $('#send').click(function() {
      event.preventDefault();

      var $form = $('#private-images');

      var images = $("#private-images input:checked").map(function(){
        return $(this).val().substring(16);
      }).get();

      // object of filenames from selected images. Need to pass this to php somehow.
      console.log(images);
    });





    if (!$('.private-photo-collection').length) {
      $('.my-photos').slideDown(800);
    }

    $('.home').hover(function() {
      $('.home a i').toggleClass('fa-camera fa-home');
    });

  });
}(jQuery));

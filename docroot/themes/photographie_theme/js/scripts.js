(function ($) {
  $(document).ready(function() {

    var $grid = $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      gutter: 15
    });

    $grid.masonry('layout');

    $grid.imagesLoaded().done(function() {
      $grid.masonry('layout');
    });

    if ($('.view-test').length) {
      $(document).ajaxComplete(function() {
        var $grid = $('.grid').masonry({
          // options
          itemSelector: '.grid-item',
          gutter: 15
        });

        $grid.masonry('layout');

        // force layout again just incase of issues.
        $grid.imagesLoaded().done(function() {
          $grid.masonry('layout');
        });
      });
    }

    if ($('.private-photo-collection').length) {
      $grid.imagesLoaded().progress(function() {
        $grid.masonry('layout');
      }).done(function() {
        $('.image-wrapper .expand-icon').css('opacity', 1);
      });
    }



    if (!$('.private-photo-collection').length) {
      $('.my-photos').slideDown(800);
    }

    $('.home').hover(function() {
      $('.home a i').toggleClass('fa-camera fa-home');
    });



    /* MAGNIFIC POPUP */
    $('.grid-item a').magnificPopup({
  		type: 'image',
  		closeOnContentClick: true,
  		closeBtnInside: false,
  		fixedContentPos: true,
  		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
  		image: {
  			verticalFit: true
  		},
      gallery: {
        enabled: true
      },
  		zoom: {
  			enabled: true,
  			duration: 300 // don't foget to change the duration also in CSS
  		}
  	});

    if ($('.popup-with-form').length) {
      $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        closeOnContentClick: false,

        callbacks: {
          beforeOpen: function() {
            $('.popup-selected img').remove();

            var images = $("#private-images input:checked").map(function(){
              return $(this).val();
            }).get();

            images.forEach(function(item) {
              var img = '/system/files' + item.substring(9);
              $('.popup-selected').append('<img src="' + img + '" />');
            });
          }
        }
      });
    }

    $('#send').click(function() {
      event.preventDefault();

      // var $form = $('#private-images');
      //
      // var images = $("#private-images input:checked").map(function(){
      //   return $(this).val().substring(16);
      // }).get();
      //
      // // object of filenames from selected images. Need to pass this to php somehow.
      // console.log(images);
    });


  });
}(jQuery));

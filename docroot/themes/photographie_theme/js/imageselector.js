(function ($) {
  $(document).ready(function() {

    // UNVEIL
    $('.private-photos img').unveil(200, function() {
      $(this).load(function() {
        $this = $(this);
        $this.removeClass('loading');
        $this.addClass('loaded');
        $this.closest('div').find('i').css("opacity", "1");
      });
    });

    $('.private-photos img').click(function() {
      event.preventDefault();
      $(this).toggleClass('selected');

      var selectedCount = $('.selected').length;
      $('#num-selected').replaceWith('<span id="num-selected">'+selectedCount+'</span>');
    });

    // MAGNIFIC POPUP
    $('.popup-image-expand').magnificPopup({
  		type: 'image',
  		closeOnContentClick: true,
  		mainClass: 'mfp-img-mobile mfp-with-zoom',
  		image: {
  			verticalFit: true
  		}
  	});

    });
}(jQuery));

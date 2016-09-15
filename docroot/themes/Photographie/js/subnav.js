(function ($) {

  /**
  * Soft scrolling on anchor
  */
  $(function() {
    $('.scroll-anchor').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        if(!$target.length) return;

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 70
        }, 900, 'swing');
    });
  });

  $(function() {
    var headerContainer = $('.paragraph--type--sub-navigation-section');
    var header = $('.sub-navigation-section--wrapper');

    if ( headerContainer.length ) {
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var subNavigationContainer = headerContainer.offset().top;
        if (scroll >= subNavigationContainer) {
          header.addClass('fixed');
          $('body').addClass('.sub-navigation--active');
        } else {
          header.removeClass('fixed');
          $('body').removeClass('sub-navigation--active');
        }
      });
    }
  });

  $(function() {
    var subNavigationItem = $('.sub-navigation > a');

    subNavigationItem.on( 'click', function(){
      var subNavigationSiblings = $(this).siblings();
      subNavigationSiblings.removeClass('is-active');
      $(this).addClass('is-active');
    });
  });
})(jQuery);

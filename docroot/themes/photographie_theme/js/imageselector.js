(function ($) {
  $(document).ready(function() {
    var fixedVisible = false;

    // UNVEIL
    $('.private-photos img').unveil(400, function() {
      $(this).load(function() {
        $this = $(this);
        $this.removeClass('loading');
        $this.addClass('loaded');
        $this.closest('div').find('i').css("opacity", "1");
      });
    });

    $('.private-photos img').click(function() {
      $this = $(this);
      $this.toggleClass('selected');

      var selectedCount = $('.selected').length;
      $('#num-selected').replaceWith('<span id="num-selected">'+selectedCount+'</span>');

      if (selectedCount >= 1) {
        if (fixedVisible == false) {
          $('#fixed-bottom').slideToggle('slow');
          fixedVisible = true;
        }
      } else {
        if (fixedVisible == true) {
          $('#fixed-bottom').slideToggle('slow');
          fixedVisible = false;
        }
      }

    });

  });
}(jQuery));

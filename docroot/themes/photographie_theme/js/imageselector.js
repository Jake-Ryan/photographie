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
      $this = $(this);
      $this.toggleClass('selected');

      var selectedCount = $('.selected').length;
      $('#num-selected').replaceWith('<span id="num-selected">'+selectedCount+'</span>');
    });

  });
}(jQuery));

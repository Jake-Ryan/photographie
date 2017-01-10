(function ($) {
  $(document).ready(function() {
    var fixedVisible = false;

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

(function ($) {
  $(document).ready(function() {
    $('.home').hover(function() {
      $('.home a i').toggleClass('fa-camera', 1000);
      $('.home a i').toggleClass('fa-home', 1000);
    });

  });
}(jQuery));

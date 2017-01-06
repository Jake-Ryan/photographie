(function ($) {
  $(document).ready(function() {

    if (!$('.private-photo-collection').length) {
      $('.my-photos').slideDown(800);
    }

    $('.home').hover(function() {
      $('.home a i').toggleClass('fa-camera fa-home');
    });

  });
}(jQuery));

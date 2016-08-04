$('.menu-button').click(function() {
  $(this).toggleClass('rotate');
  $('.main-nav').slideToggle(500, 'easeOutCubic');
});

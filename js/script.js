$( document ).ready(function() {
  var btnMenuMobile = $('.btn-menumobile');

  $(btnMenuMobile).on('click', function() {
    $('.nav-conteiner ul').toggleClass('open');
  });
});

$(function(){
  $('.menu-link a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({'scrollTop':position},500);
  });
});
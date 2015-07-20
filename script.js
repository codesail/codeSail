$(document).ready(function(){
   $('i.fa-bars').on('click', function(){
       $(this).siblings('ul').slideToggle(700);
       $('.w').css('display', 'none');
   });
})

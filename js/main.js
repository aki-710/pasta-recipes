$(function($){
    $('.more-button').on('click', function (){
        var $openBox = $('.open-box', $(this).closest('.container'));
        if ($('.open-box').is(':hidden')) {
            $('.open-box').slideDown();
            $(this).text('close');
        } else {
            $('.open-box').slideUp();
            $(this).text('open');
        }
        
    });

    var open = $('.modal-open'),
   container = $('.modal-container');

    open.on('click',function(event){ 
  container.addClass('active');
  event.stopPropagation();
});
});

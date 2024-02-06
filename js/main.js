/*レシピのmodal*/
$(function () {
    $('.js-modal-open').each(function () {
      $(this).on("click", function () {
        var target = $(this).data('target');
        var modal = document.getElementById(target);
        $(modal).css('display', 'none').fadeIn();
        return false;
      });
    });
    $('.js-modal-close').on("click", function () {
      $('.js-modal').fadeOut();
      return false;
    });
  });
  
/*headerを隠す*/
  var prevScrollPos = 0;
$(window).scroll(function () {
  var currentScrollPos = $(this).scrollTop();
    if (prevScrollPos > currentScrollPos) {
        $('header').animate({top:  '0px' }, 200);
      } else {
        $('header').animate({ top: '-1000px' }, 200); // アニメーション時間を追加
      }
    prevScrollPos = currentScrollPos;
});

/*read more*/
$('.more-button').on('click',function(){
  if ($('.open-box').is(':hidden')) {
    $('.open-box').slideDown();
    $(this).text('close');
    $(this).css('background-color','#808080')
  }
})

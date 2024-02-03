/*レシピのmodal*/
$(function () {
    $('.js-modal-open').each(function () {
      $(this).on("click", function () {
        var target = $(this).data('target');
        var modal = document.getElementById(target);
        $(modal).fadeIn();
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
        $('header').css('top', '0');
      } else {
        $('header').css('top', '-1000px'); // ヘッダーの高さ分だけ上に隠す
      }
    prevScrollPos = currentScrollPos;
});

/*read more*/

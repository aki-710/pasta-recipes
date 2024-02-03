/*$(function() {
    // 変数に要素を入れる
    var open = $('.img'),
      close = $(''),
      container = $('.modal-container');
  
    //開くボタンをクリックしたらモーダルを表示する
    open.on('click',function(){ 
        // var index = $(this).index();
      container.addClass('active');
      return false;
    });
  
    //閉じるボタンをクリックしたらモーダルを閉じる
    close.on('click',function(){  
      container.removeClass('active');
    });
  
    //モーダルの外側をクリックしたらモーダルを閉じる
    $(document).on('click',function(e) {
      if(!$(e.target).closest('.modal-body').length) {
        container.removeClass('active');
      }
    });
});*/

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

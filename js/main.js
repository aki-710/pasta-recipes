$(function() {
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
});
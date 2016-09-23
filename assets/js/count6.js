/*js file*/
$(function(){

  var count = 0;
  var maxCount = 10;
  var $txt = $(".container__count-text");
  var $btn = $(".container__btn");

  $btn.click(function(){
    num = $(this).hasClass("increment") ? 1 : -1;
    count += (num);
    if( count < 0 ) count = 0;
    if( count > maxCount ) count = maxCount;
    $(this).css("opacity","0.2");
    $(this).stop().fadeTo( 300 , 1 );
    $txt.text(count);
  });

  $btn.mouseover(function(){
    $(this).stop().fadeTo( 300 , 0.8 );
  });

  $btn.mouseout(function(){
    $(this).stop().fadeTo( 300 , 1 );
  });
})//end function;

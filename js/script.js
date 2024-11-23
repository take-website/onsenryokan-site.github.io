// Recommend / slick.js
// ==================================================
$(function(){
  $('#rec-slick').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      arrows: false,
      centerPadding: '130px',
      centerMode: true,
      responsive: [
        {
          breakpoint: 768, // 399px以下のサイズに適用
          settings: {
          slidesToShow: 1,
          },
        },
      ],
  });
});


$(function () {
  //ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function(){
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });
});


// FAQ
// ==================================================
$(function(){
  $('.js-accordion').on('click',function(){
      $(this).next().slideToggle();
  })
});

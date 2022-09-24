$("document").ready(function () {
  $('#vid-list li ').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('.owl-carousel').owlCarousel({
    rtl:true,
    loop: true,
    dots: false,
    margin:10,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
      }
    });
  /* Start Slider Info Prodect */
  $('#slider-for').slick({
    rtl:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
    

  });
  $('#slider-nav').slick({
    rtl:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
  /* End Slider Info Prodect */

  /*Start Login  */
      
  $('#sign-up-btn').click(function() {
    $('.containerz').addClass('sign-up-mode');
  });
  $('#sign-in-btn').click(function() {
    $('.containerz').removeClass('sign-up-mode');
  });
/*End Login  */

  $('.counter').counterUp({
    delay: 20,
    time: 2000,
    offset: 50,
    beginAt: 20,
    formatter: function (n) {
      return n.replace(/,/g, '.');
    }
  });
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    $('#viewmobilscript').empty();
  }else{
    
  }
  
  
  
});
$("#lang").click(function(){
  $("#bootstrapID").attr("href", "css/bootstrap.min.css");
  $("#styleLTR").attr("href", "css/styleLTR.css");
});




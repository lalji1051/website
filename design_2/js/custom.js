$(document).ready(function() {

    var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
      var height = affixElement.outerHeight(),
          top = wrapper.offset().top;
   
      if (scrollElement.scrollTop() >= top){
          wrapper.height(height);
          affixElement.addClass("affix");
      }
      else {
          affixElement.removeClass("affix");
          wrapper.height('auto');
      }
     
    };
  
    $('[data-toggle="affix"]').each(function() {
      var ele = $(this),
          wrapper = $('<div></div>');
   
      ele.before(wrapper);
      $(window).on('scroll resize', function() {
          toggleAffix(ele, $(this), wrapper);
      });
   
      // init
      toggleAffix(ele, $(window), wrapper);
    });


    $('#slider-testimonial').slick({
        dots: true,
        arrows: false,
        autoplay: false,
    });
    
    $('.responsive').slick({
      dots: false,
      infinite: false,
      speed: 300,
      arrows: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.single-item').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    });
   
  });
$('.clientSliderBox').slick({
  slidesToScroll: 1,
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 0,
  arrows: false,
  speed: 3500,
  infinite: true,
  cssEase: 'linear',
  centerMode:true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});



///Testimonial SLider

$('.testimonialSlider').slick({
  slidesToScroll: 1,
  slidesToShow: 2,
  arrows: false,
  speed: 1000,
  infinite: true,
  cssEase: 'linear',
 dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});



$(document).ready(function(){
  $(".content").slice(0, 1).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 1).slideDown();
    if($(".content:hidden").length == 0) {
      $("#loadMore").text("Read Less").addClass("noContent");
    }
  });
  
})




$('.relatedProduct-slide').slick({
  slidesToScroll: 1,
  slidesToShow: 4,
  arrows: true,
  speed: 1000,
  infinite: true,
  cssEase: 'linear',
 dots: false,
 prevArrow: $('.slick-prev'),
 nextArrow: $('.slick-next'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});




// tabs

$('.tb-block').hide();
$('.tb-block:first').show();
$('.tabs-block button:first').addClass('tactive');

// Change tab class and display content
$('.tabs-block a').on('click', function(event){
  event.preventDefault();
  $('.tabs-block button').removeClass('tactive');
  $(this).parent().addClass('tactive');
  $('.tb-block').hide();
  $($(this).attr('href')).show();
});




// popup contact form
function closeForm() {
  $('.enquiry-form-block').removeClass('is-visible');
}

$(document).ready(function($) {
  
  /* Contact Form Interactions */
  $('#enquryBtn').on('click', function(event) {
    event.preventDefault();

    $('.enquiry-form-block').addClass('is-visible');
  });
  
    //close popup when clicking x or off popup
  $('.enquiry-form-block').on('click', function(event) {
    if ($(event.target).is('.enquiry-form-block') || $(event.target).is('#btnCloseForm')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  
  
  
  });



  // back-scroll-top

  var btn = $('#scrollTop');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  
  

/**
* isMobile
*/
function isMobile() {
  var IS_IPAD = navigator.userAgent.match(/iPad/i) != null,
    IS_IPHONE = !IS_IPAD && ((navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null)),
    IS_IOS = IS_IPAD || IS_IPHONE,
    IS_ANDROID = !IS_IOS && navigator.userAgent.match(/android/i) != null,
    IS_MOBILE = IS_IOS || IS_ANDROID;
  return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);
}

/**
* PageLoader
*/
function PageLoaderShow(){
  $('#page-loader').addClass('show');
}
function PageLoaderHide(){
  $('#page-loader').removeClass('show');
}

/**
* Rellax
*/
var rellax = null;
var rellaxHorizontal = null;
function parallax(className) {
  if(document.getElementsByClassName(className).length <= 0)
    return;
  
  windowWidth = window.innerWidth;
  if( !rellax && !isMobile() )
    rellax = new Rellax('.'+className);
  if( rellax && (isMobile() || windowWidth < 992) )
    rellax.destroy();
  if( rellax && !isMobile() && windowWidth >= 992 )
    rellax.refresh();
}
function parallaxHorizontal(className) {
  if(document.getElementsByClassName(className).length <= 0)
    return;
  
  windowWidth = window.innerWidth;
  if( !rellaxHorizontal && !isMobile() )
  rellaxHorizontal = new Rellax('.'+className,{
    vertical: false,
    horizontal: true
  });
  if( rellaxHorizontal && (isMobile() || windowWidth < 992) )
  rellaxHorizontal.destroy();
  if( rellaxHorizontal && !isMobile() && windowWidth >= 992 )
  rellaxHorizontal.refresh();
}

$(document).ready(function(){
  if( $('.rellax').length > 0 )
    rellax = new Rellax('.rellax');

  // $(".fancybox-gallery").fancybox({
  //   // topRatio: 0,
  //   // width: '100%',
  //   // height: '100%',
  //   // wrapCSS    : 'fancybox-fullscreen',
  //   // afterLoad  : function () {
  //   //     $.extend(this, {
  //   //         aspectRatio : false,
  //   //         type    : 'html',
  //   //         width   : '100%',
  //   //         height  : '100%',
  //   //         content : '<div class="fancybox-image" style="background-image:url(' + this.href + '); background-size: cover; background-position:50% 50%;background-repeat:no-repeat;height:100%;width:100%;" /></div>'
  //   //     });
  //   //     $('.fancybox-wrap').css({'position':'fixed', 'top':'0'});
  //   // }
  // });
})

/**
 * Navbar
 */
$(document).on('click', '.navbar-btn-projects', function(){
  if( $(this).hasClass('collapsed') ){
    $(this).removeClass('collapsed')
    $('.navbar-toggler').addClass('opacity0')
    $('#menu-home-projects').addClass('show')
    // $('.magic-intro').addClass('fixed')
  }
  else {
    $(this).addClass('collapsed')
    $('.navbar-toggler').removeClass('opacity0')
    $('#menu-home-projects').removeClass('show')
    // $('.magic-intro').removeClass('fixed')
  }
})

/**
 * Swiper Projects
 */
$(document).on('mouseenter', '.swiper-slide-home-project > .project-item', function(){
  var index = $(this).attr('data-index')
  // console.log('mouseenter', index)
  $('#home-project-background-'+index).addClass('show')
  $(this).addClass('show')
  // $(this).addClass('show-details')
  // $(this).find('.project-item').addClass('show')
})
$(document).on('mouseleave', '.swiper-slide-home-project > .project-item', function(){
  var index = $(this).attr('data-index')
  $('#home-project-background-'+index).removeClass('show')
  $(this).removeClass('show')
  // $(this).removeClass('show-details')
  // $(this).find('.project-item').removeClass('show')
})

/**
 * Header: Scroll
 */
// $(window).on('scroll', function(){
//   if( window.pageYOffset > 50 ){
//     $('#nav-1').addClass('navbar-scroll')
//   }
//   else {
//     $('#nav-1').removeClass('navbar-scroll')
//   }
// })



/**
 * ScrollTo
 */
$('.scrollto').click(function(){
  var scrollto = $(this).attr('href'); console.log('href', scrollto, $(this));
  $('html, body').animate({
    scrollTop: parseInt($(scrollto).offset().top) - 60
  }, 1000);
  return false;
});


/**
 * Animate
 */
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}
$(window).scroll(function() {
  $(".animate__animated").each(function() {
    if (isScrolledIntoView(this) === true) {
      $(this).addClass($(this).attr('data-animation'));
      $(this).css('opacity','1');
    }
  });
});



/**
 * Swiper
 */
var swipers = [];
$('.swiper-container').each(function(index){
  if( $(this).hasClass('swiper-home-projects') ){
    $(this).attr('data-index', index);
    $(this).parent().find('.swiper-button-next').addClass('swiper-button-next-' + index);
    $(this).parent().find('.swiper-button-prev').addClass('swiper-button-prev-' + index);

    var swiper = new Swiper(this, {
      initialSlide: 0,
      slidesPerView: 4,
      loop: false,
      speed: 900,
      spaceBetween: 80,
      navigation: {
        nextEl: '.swiper-button-next-' + index,
        prevEl: '.swiper-button-prev-' + index,
      }
    });
  }
  if( $(this).hasClass('swiper-projects') ){
    $(this).attr('data-index', index);
    $(this).parent().parent().find('.swiper-button-next').addClass('swiper-button-next-' + index);
    $(this).parent().parent().find('.swiper-button-prev').addClass('swiper-button-prev-' + index);

    var swiper = new Swiper(this, {
      slidesPerView: 2,
      slidesPerColumn: 3,
      spaceBetween: 60,
      // loop: false,
      speed: 1500,
      navigation: {
        nextEl: '.swiper-button-next-' + index,
        prevEl: '.swiper-button-prev-' + index,
      },
      // breakpoints: {
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 30,
      //   },
      //   992: {
      //     slidesPerView: 3,
      //     spaceBetween: 60,
      //   }
      // }
    });
  }
  if( $(this).hasClass('swiper-events') ){
    $(this).attr('data-index', index);
    $(this).parent().find('.swiper-button-next').addClass('swiper-button-next-' + index);
    $(this).parent().find('.swiper-button-prev').addClass('swiper-button-prev-' + index);

    var swiper = new Swiper(this, {
      initialSlide: 0,
      slidesPerView: 3,
      loop: false,
      speed: 1500,
      spaceBetween: 60,
      navigation: {
        nextEl: '.swiper-button-next-' + index,
        prevEl: '.swiper-button-prev-' + index,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 60,
        }
      }
    });
  }
  swipers[index] = swiper;
  initPalette();
})

function initPalette(){
  $('.swiper-container').each(function(index){
    if( $(this).hasClass('swiper-home-projects') ){

    }
    if( $(this).hasClass('swiper-events') ){
      var palette = $(this).parent().find('.swiper-palette');
      $(palette).css({
        top: ($(this).find('figure').height() - 120)+'px'
      })
    }
  })
}

$(window).on('resize', function(){
  for( let i in swipers ){
    swipers[i].update()
  }
  initPalette();
})



/***
 * Contact Form 7
 */
// $('.form-1 .custom-checkbox label').click(function(){
//   var checkbox = $(this).parent().find('input[type="checkbox"]');
//   if( $(checkbox).is(':checked') ){
//     $(checkbox).prop('checked', false);
//     $(this).removeClass('checked');
//   } else {
//     $(checkbox).prop('checked', true);
//     $(this).addClass('checked');
//   }
// })
$('.form-1 .custom-control.custom-checkbox').click(function(){
  var currInput = $(this).find('input[type="checkbox"]'),
  currLabel = $(this).find('.custom-control-label'),
  currVal = currInput.prop('checked');
  currInput.prop('checked', !currVal);

  if( !currVal )
    $(currLabel).addClass('checked');
  else
    $(currLabel).removeClass('checked');
});
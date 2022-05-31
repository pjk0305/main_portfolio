$(document).ready(function(){

// main mouse animation
setInterval(function(){
    $('#wheel').animate({'top':'12px','opacity':'0'},290)
    $('#wheel').animate({'top':'6px','opacity':'1'},290)
    $('#story_mouse').animate({'left':'12px','opacity':'1'},490)
    $('#story_mouse').animate({'left':'-12px','opacity':'1'},490)
},600)


//menu hover
$('#menu_icon>li:nth-child(1)').mouseenter(function(){
  $('.menu_icon_img1').attr({'src':'./images/menu_icon-1.png'})
})
$('#menu_icon>li:nth-child(1)').mouseleave(function(){
  $('.menu_icon_img1').attr({'src':'./images/menu_icon.png'})
})
$('#menu_icon>li:nth-child(2)').mouseenter(function(){
  $('.menu_icon_img2').attr({'src':'./images/menu_icon-1.png'})
})
$('#menu_icon>li:nth-child(2)').mouseleave(function(){
  $('.menu_icon_img2').attr({'src':'./images/menu_icon.png'})
})
$('#menu_icon>li:nth-child(3)').mouseenter(function(){
  $('.menu_icon_img3').attr({'src':'./images/menu_icon-1.png'})
})
$('#menu_icon>li:nth-child(3)').mouseleave(function(){
  $('.menu_icon_img3').attr({'src':'./images/menu_icon.png'})
})
$('#menu_icon>li:nth-child(4)').mouseenter(function(){
  $('.menu_icon_img4').attr({'src':'./images/menu_icon-1.png'})
})
$('#menu_icon>li:nth-child(4)').mouseleave(function(){
  $('.menu_icon_img4').attr({'src':'./images/menu_icon.png'})
})

// menu click
$(".scroll_move").click(function(event){         

    event.preventDefault();
  
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

});
// main_page
spring1 = 0;
Jinx_hair = 0;
speed=1.5; // speed 
setInterval(function(){
   spring1 = spring1  + speed //
   Jinx_hair = Jinx_hair + speed
    $('#spring1').css({'transform':'rotate('+spring1+'deg )'})
},30)

// character page
  function effect1() {
    const $window = $(window);
  
    let windowWidth = $window.width();
    let windowHeight = $window.height();
  
    $window.resize(_.throttle(function () {
      windowWidth = $window.width();
      windowHeight = $window.height();
    }, 100));
  
    $window.resize(_.throttle(function () {
      MousemoveEffect1__update();
    }, 100));
  
    let MousemoveEffect1__$el = null;
    let MousemoveEffect1__lastPosX = 0;
    let MousemoveEffect1__lastPosY = 0;
  
    function MousemoveEffect1__update() {
      MousemoveEffect1__$el.each(function (index, node) {
        const $node = $(node);
        const horRes = $node.data('data-mousemove-effect1-hor-res');
        const verRes = $node.data('data-mousemove-effect1-ver-res');
  
        const x = (MousemoveEffect1__lastPosX - (windowWidth / 2)) * horRes;
        const y = (MousemoveEffect1__lastPosY - (windowHeight / 2)) * verRes;
        $(node).css('transform', 'translateX(' + x + 'px) translateY(' + y + 'px)');
  
        console.log("MousemoveEffect1__lastPosX : " + MousemoveEffect1__lastPosX);
        console.log("MousemoveEffect1__lastPosY : " + MousemoveEffect1__lastPosY);
      });
    }
  
    function MousemoveEffect1__init() {
      MousemoveEffect1__$el = $('.mousemove-effect-1-el');
  
      MousemoveEffect1__$el.each(function (index, node) {
        const $node = $(node);
        $node.data('data-mousemove-effect1-hor-res', $node.attr('data-mousemove-effect1-hor-res') * 1);
        $node.data('data-mousemove-effect1-ver-res', $node.attr('data-mousemove-effect1-ver-res') * 1);
      });
  
      const MousemoveEffect1__updateThrottled = _.throttle(function () {
        MousemoveEffect1__update();
      }, 5);
  
      $window.mousemove(function (e) {
        MousemoveEffect1__lastPosX = e.clientX;
        MousemoveEffect1__lastPosY = e.clientY;
  
        MousemoveEffect1__updateThrottled();
      });
    }
    MousemoveEffect1__init();
  }
  effect1();

  $('.jinx_effect').click(function(){
    $('#character_wrap').show()
    $('.quickmenu').hide()
    $('character_icon>li:nth-child(1)').css({'opacity':'1'})
  })
  $('#character_wrap_closebt').click(function(){
    $('#character_wrap').hide()
    $('.quickmenu').show()
})

  $('#character_icon>li:nth-child(1)').click(function(){
    $(this).css({"opacity":"1"}).siblings().css({"opacity":"0.5"})
    $('#character_info_img').attr({'src':'./images/CharacterPoster-Jinx.jpg'})
    $('.character_info_box2 h3').text('Jinx')
    $('.character_info_box2 h3').css({'color':'rgb(41,80,149)'})
    $('.character_info_box2 p').html("Name : Jinx<br>One's real name : Powder<br>Voice actor : Ella Purnell")
    $('.character_video').attr({'src':'https://www.youtube.com/embed/qhs5DTaOzHU'})
  })
 
  $('#character_icon>li:nth-child(2)').click(function(){
    $(this).css({"opacity":"1"}).siblings().css({"opacity":"0.5"})
    $('#character_info_img').attr({'src':'./images/CharacterPoster-Vi.jpg'})
    $('.character_info_box2 h3').text('Vi')
    $('.character_info_box2 h3').css({'color':'#C71585'})
    $('.character_info_box2 p').html("Name : Vi<br>One's real name : Violet<br>Voice acter : Hailee Steinfeld")
    $('.character_video').attr({'src':'https://www.youtube.com/embed/xTLbHvUbLpE'})
  })

  $('#character_icon>li:nth-child(3)').click(function(){
    $(this).css({"opacity":"1"}).siblings().css({"opacity":"0.5"})
    $('#character_info_img').attr({'src':'./images/CharacterPoster-Silco.jpg'})
    $('.character_info_box2 h3').text('Slico')
    $('.character_info_box2 h3').css({'color':'rgb(59,16,95)'})
    $('.character_info_box2 p').html("Name : Slico<br>One's real name : Silco<br>Voice acter : Jason Spisak")
    $('.character_video').attr({'src':'https://www.youtube.com/embed/Jyttj284oik'})

  })
  $('#character_icon>li:nth-child(4)').click(function(){
    $(this).css({"opacity":"1"}).siblings().css({"opacity":"0.5"})
    $('#character_info_img').attr({'src':'./images/CharacterPoster-Vander.jpg'})
    $('.character_info_box2 h3').text('Vender')
    $('.character_info_box2 h3').css({'color':'rgb(232,221,204)'})
    $('.character_info_box2 p').html("Name : Vender<br>One's real name : Vender<br>Voice acter : JB Blanc")
    $('.character_video').attr({'src':'https://www.youtube.com/embed/H9HGxKN3qhU'})
  })
})
//gallery_page
$(document).ready(function(){
  let slide_num = 0;
  $('#gallery_next_bt').click(function(){
      slide_num = slide_num - 100
      if(slide_num<-600){slide_num = 0}
      $('#gallery_slide').stop().animate({'left':slide_num+'%'})
  })
  $('#gallery_prev_bt').click(function(){
      slide_num = slide_num + 100
      if(slide_num>0){slide_num = -600}
      $('#gallery_slide').stop().animate({'left':slide_num+'%'})
  })
  $('#gallery_slide>li').hover(function(){
    $('#gallery_box').css({'opacity':'1'});
  }, function(){
    $('#gallery_box').css({'opacity':'0'});
  });
})
document.addEventListener('DOMContentLoaded', function() {
  var parent = document.querySelector('.splitview'),
      topPanel = parent.querySelector('.top'),
      handle = parent.querySelector('.handle'),
      skewHack = 0,
      delta = 0;

  // If the parent has .skewed class, set the skewHack var.
  if (parent.className.indexOf('skewed') != -1) {
      skewHack = 1000;
  }

  parent.addEventListener('mousemove', function(event) {
      // Get the delta between the mouse position and center point.
      delta = (event.clientX - window.innerWidth / 2) * 0.5;

      // Move the handle.
      handle.style.left = event.clientX + delta + 'px';

      // Adjust the top panel width.
      topPanel.style.width = event.clientX + skewHack + delta + 'px';
  });
});
//top menu
$(document).ready(function(){
  $('#toggle').click(function() {
      $('#toggle .bar').toggleClass('animate');
      $('#page').toggleClass('overlay');
  });
})

//logo homePage
$("#click").mouseenter(function(){
    $("#logo_2").css('opacity','0');
    $("#logo_1").css('display','block');
    const element =  document.querySelector('#logo_1')
    element.classList.add('animated', 'jello')
});
$("#click").mouseleave(function(){
  $("#logo_2").css('opacity','100');
  $("#logo_1").css('display','none');
  });
  $("#click").click(function(event){
    var target_top = $("#homePage").offset().top;
      $("html,body").scrollTop(target_top);
    return false;
});
// typing homePage
import (init) from 'ityped';
const oneElement = document.querySelector('#textTyping')
init("#textTyping", {
  strings: ['Digital', 'Graphic','Motion'],
  typeSpeed:  100,
  backSpeed:  50,
  backDelay:  500,
  loop: true,
  showCursor: true,
  disableBackTyping: false,
  cursorChar: "|",
})
  //menu
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
$("#Navi_Bar").click(function(){
  $("#navi").css('display','block');
  animateCSS('#navi', 'slideInRight');
  $.ajaxSetup({cache : false })
})

$("#close").click(function(){
  animateCSS('#navi', 'slideOutRight',function(){
    $("#navi").css('display','none');
  });
  $.ajaxSetup({cache : false })
})



$("#Navi_Bar").mouseenter(function(){
    $("#Navi_Bar").css('opacity','0');
    $("#Navi_Bar_hover").css('display','block');
    const element =  document.querySelector('#Navi_Bar_hover')
    element.classList.add('animated', 'rubberBand')
});
$("#Navi_Bar").mouseleave(function(){
  $("#Navi_Bar").css('opacity','100');
  $("#Navi_Bar_hover").css('display','none');
  });

//project link
  $("#project1").mouseenter(function(){
      $("#cover1").css('opacity','0');
  });
  $("#project1").mouseleave(function(){
    $("#cover1").css('opacity','0.7');
    });
    $("#project1").click(function(event){
    window.location.href="/work_Avomarket.html";
  });

  $("#project2").mouseenter(function(){
      $("#cover2").css('opacity','0');
  });
  $("#project2").mouseleave(function(){
    $("#cover2").css('opacity','0.7');
    });
    $("#project2").click(function(event){
    window.location.href="/work_Workmate.html";
  });
  $("#project3").mouseenter(function(){
      $("#cover3").css('opacity','0');
  });
  $("#project3").mouseleave(function(){
    $("#cover3").css('opacity','0.7');
  });
  $("#project3").click(function(event){
  window.location.href="/work_Microfoodscape.html";
});

$("#project4").mouseenter(function(){
  $("#text4").css('display','block')
    const element =  document.querySelector('#text4')
    element.classList.add('animated', 'bounce')
});
$("#project4").mouseleave(function(){
  $("#text4").css('display','none')
});

$("#project5").mouseenter(function(){
  $("#text5").css('display','block')
    const element =  document.querySelector('#text5')
    element.classList.add('animated', 'bounce')
});
$("#project5").mouseleave(function(){
  $("#text5").css('display','none')
});

$("#project6").mouseenter(function(){
  $("#text6").css('display','block')
    const element =  document.querySelector('#text6')
    element.classList.add('animated', 'bounce')
});
$("#project6").mouseleave(function(){
  $("#text6").css('display','none')
});


//anchor points
//work
$(document).ready(function(){
$("#navi_work").click(function(){
  var target_top = $("#workProject").offset().top;
  $("html,body").animate(
  {scrollTop: target_top}, 500 /*scroll实现定位滚动*/
        );/*让整个页面可以滚动*/
return false;
});

});
//about
$(document).ready(function(){
$("#navi_about").click(function(){
  var target_top = $("#aboutMe").offset().top;
  $("html,body").animate(
    {scrollTop: target_top}, 500 /*scroll实现定位滚动*/
          );/*让整个页面可以滚动*/
  //$("html,body").scrollTop(target_top);
});

});

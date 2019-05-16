window.onload=function(){
$(".loading").fadeOut();
}
//logo homePage
$("#logo_2").mouseenter(function(){
    $("#logo_2").css('opacity','0');
    $("#logo_1").css('display','block');
    const element =  document.querySelector('#logo_1')
    element.classList.add('animated', 'jello')
});
$("#logo_2").mouseleave(function(){
  $("#logo_2").css('opacity','100');
  $("#logo_1").css('display','none');
  });
  $("#logo_2").click(function(event){
    var target_top = $("#homePage").offset().top;
    $("html,body").animate(
      {scrollTop: target_top}, 500 /*scroll实现定位滚动*/
    );/*让整个页面可以滚动*/
    return false;
});
//navi bar
$("#Navi_Bar").mouseenter(function(){
    $("#Navi_Bar").css('opacity','0');
    $("#Navi_Bar_hover").css('display','block');
    const element =  document.querySelector('#Navi_Bar_hover')
    element.classList.add('animated', 'rubberBand')
});
$("#Navi_Bar").mouseleave(function(){
  $("#Navi_Bar").css('opacity','100');
  $("#Navi_Bar_hover").css('display','none');
  $.ajaxSetup({cache : false })
  });

// typing homePage
const oneElement = document.querySelector('#textTyping')
ityped.init("#textTyping", {
  strings: ['Digital', 'Graphic','Motion'],
  typeSpeed:  100,
  backSpeed:  50,
  backDelay:  550,
  loop: true,
  showCursor: true,
  disableBackTyping: false,
  cursorChar: "|",
})
  //menu selector
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
  $("#menu_cover").css('display','block');
  $("#menu_selector").css('display','block');
  animateCSS('#menu_cover', 'slideInRight');
  animateCSS('#navi_work', 'fadeIn');
  animateCSS('#navi_about', 'fadeIn');
  animateCSS('#navi_resume', 'fadeIn');
  $("html, body").css({
	"overflow" : "hidden"
})
  $.ajaxSetup({cache : false })
})

$(".navi_text").click(function(){
  animateCSS('#menu_cover', 'slideOutRight',function(){
    $("#menu_cover").css('display','none');
  });
  animateCSS('#menu_selector', 'fadeOut',function(){
    $("#menu_selector").css('display','none');
  });
  $("html, body").css({
	"overflow" : "auto"
})
  $.ajaxSetup({cache : false })
})

$(".close").click(function(){
  animateCSS('#menu_cover', 'slideOutRight',function(){
    $("#menu_cover").css('display','none');
  });
  animateCSS('#menu_selector', 'fadeOut',function(){
    $("#menu_selector").css('display','none');
  });
  $("html, body").css({
	"overflow" : "auto"
})
    $.ajaxSetup({cache : false })
})

//close
$("#before").mouseenter(function(){
  $(this).css('opacity','0');
  $("#after").css('display','block');
  const element =  document.querySelector('#after')
  element.classList.add('animated', 'rubberBand')
});
$("#before").mouseleave(function(){
  $(this).css('opacity','100');
  $("#after").css('display','none');
  });
//scroll function
var controller = new ScrollMagic.Controller();
// build scene
				new ScrollMagic.Scene({
									triggerElement: "#workProject",
									triggerHook: 0.8, // show, when scrolled 10% into view
								})
								.setClassToggle("#workProject", "visible") // add class to reveal
								.addTo(controller);
// build scene
				new ScrollMagic.Scene({
									triggerElement: "#aboutMe",
									triggerHook: 0.8, // show, when scrolled 20% into view
								})
								.setClassToggle("#aboutMe", "visible") // add class to reveal
								.addTo(controller);

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
    $("#cover4").css('opacity','0');
});
$("#project4").mouseleave(function(){
  $("#cover4").css('opacity','0.7');
});
$("#project4").click(function(event){
window.location.href="/work_Carissima.html";
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
  $("html,body").scrollTop(target_top);
  //$("html,body").animate(
  //{scrollTop: target_top}, 500 /*scroll实现定位滚动*/);/*让整个页面可以滚动*/
return false;
});

});
//about
$(document).ready(function(){
$("#navi_about").click(function(){
  var target_top = $("#aboutMe").offset().top;
  //$("html,body").animate(
    //{scrollTop: target_top}, 500 /*scroll实现定位滚动*/);/*让整个页面可以滚动*/
  $("html,body").scrollTop(target_top);
});

});
//Resume
$("#navi_resume").click(function(){
  window.open("https://drive.google.com/open?id=12yCTvHt4N67ThPoB2TdWkuo14LMP-ie5","_blank");
});

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
    window.location.href="/index.html";
    return false;
});
//navigation setting
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
//menu selector
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
  //close effect
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

  $("#navi_work").click(function(event){
    window.location.href="/index.html#workProject";
  });
  $("#navi_about").click(function(event){
    window.location.href="/index.html#aboutMe";
  });
  //Resume
  $("#navi_resume").click(function(){
    window.open("https://drive.google.com/open?id=12yCTvHt4N67ThPoB2TdWkuo14LMP-ie5","_blank");
  });
//scroll funtion
var controller = new ScrollMagic.Controller();
// build scene
				new ScrollMagic.Scene({
									triggerElement: "#overview",
									triggerHook: 0.5, // show, when scrolled 10% into view
								})
								.setClassToggle("#navigation", "visible") // add class to reveal
								.addTo(controller);

//goavocado
$("#avocadoWeb").click(function(event){
  window.open("/avocado.html","_blank");
});
$("#phase1").click(function(event){
  window.open("https://densitydesign.github.io/teaching-dd14/es01/group03/#firstPage","_blank");
});
$("#phase2").click(function(event){
  window.open("https://densitydesign.github.io/teaching-dd14/es02/group03/","_blank");
});
$("#phase3").click(function(event){
  window.open("/avocado.html","_blank");
});

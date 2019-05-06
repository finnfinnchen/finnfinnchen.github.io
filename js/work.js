
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

  $("#work").click(function(event){
    window.location.href="/index.html#workProject";
  });
  $("#about").click(function(event){
    window.location.href="/index.html#aboutMe";
  });

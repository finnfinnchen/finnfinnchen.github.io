
//navigation setting
$("#Navi_Bar").mouseenter(function(){
    $("#Navi_Bar").css('opacity','0');
});
$("#Navi_Bar").mouseleave(function(){
  $("#Navi_Bar").css('opacity','100');
  });
  $("#Navi_Bar").click(function(){
    $("#navi").css('display','block');
  })

  $("#close").click(function(){
    $("#navi").css('display','none');
  })

  $("#work").click(function(event){
    window.location.href="/index.html";
  });

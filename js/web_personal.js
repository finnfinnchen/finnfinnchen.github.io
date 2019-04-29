
//navigation
$("#Navi_Bar").click(function(){
  $("#navi").css('display','block');
})

$("#close").click(function(){
  $("#navi").css('display','none');
})

$("#Navi_Bar").mouseenter(function(){
    $("#Navi_Bar").css('opacity','0');
});
$("#Navi_Bar").mouseleave(function(){
  $("#Navi_Bar").css('opacity','100');
  });

  $("#project1").mouseenter(function(){
      $("#cover1").css('opacity','0');
  });
  $("#project1").mouseleave(function(){
    $("#cover1").css('opacity','0.5');
    });

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({
  triggerElement:"#trigger"
})
// trigger a velocity opaticy animation
.setVelocity("#guidingtext", {opacity: 0}, {duration: 700})
.addTo(controller);


//parallax function
var sceneBack = document.getElementById('forest'),
sceneCenter = document.getElementById('market_pic'),
sceneFront = document.getElementById('forest2');
var old_top1 =50,
old_top2 = 1000,
old_top3 = 1550;

addEvent(window,'scroll',onScroll);
onScroll();

function onScroll(e){
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
sceneBack.style.top = old_top1+scrollTop*.2+'px';
sceneCenter.style.top = old_top2+scrollTop*.3+'px';
sceneFront.style.top = old_top3+scrollTop*.4+'px';
}

function addEvent(eventTarget, eventType, eventHandler) {
  if (eventTarget.addEventListener) {
      eventTarget.addEventListener(eventType, eventHandler, false);
  } else {
      if (eventTarget.attachEvent) {
          eventType = "on" + eventType;
          eventTarget.attachEvent(eventType, eventHandler);
      } else {
          eventTarget["on" + eventType] = eventHandler;
      }
  }
}
//communication_clikfunction
//chile
//$("#A_cli").mouseenter(function(){  $("#enter_chil").css('display','block');$("#orignal").css('display','none');})
//$("#A_cli").mouseleave(function(){$("#enter_chil").css('display','none');$("#orignal").css('display','block');})
$("#A_cli").click(function(){
    $("#chli").addClass('visible');
    $("#chile").mouseenter(function(){
        $("#buych").css('fill','#FFEFEA');
    });
    $("#chile").mouseleave(function(){
        $("#buych").css('fill','#FFFFFF');
    });
    $("#closed_cli").click(function(){
      $("#chli").removeClass('visible');
    });
    $("#W_chli").mouseenter(function(){
        $("#R_chli").css('opacity','1');
    });
    $("#W_chli").mouseleave(function(){
        $("#R_chlil").css('opacity','0');
    });
});
$("#chile").click(function(){
    $("#chli").removeClass('visible');
});
//mexico
$("#A_mx").click(function(){
    $("#mxc").addClass('visible');
    $("#mexico").mouseenter(function(){
        $("#buymx").css('fill','#FFEFEA');
    });
    $("#mexico").mouseleave(function(){
        $("#buymx").css('fill','#FFFFFF');
    });
    $("#closed_mx").click(function(){
      $("#mxc").removeClass('visible');
    });
    $("#W_mxc").mouseenter(function(){
        $("#R_mxc").css('opacity','1');
    });
    $("#W_mxc").mouseleave(function(){
        $("#R_mxc").css('opacity','0');
    });
});
$("#mexico").click(function(){
    $("#mxc").removeClass('visible');
});
//Israel
$("#A_is").click(function(){
    $("#isr").addClass('visible');
    $("#israel").mouseenter(function(){
        $("#buyis").css('fill','#FFEFEA');
    });
    $("#israel").mouseleave(function(){
        $("#buyis").css('fill','#FFFFFF');
      });
      $("#closed_isr").click(function(){
        $("#isr").removeClass('visible');
      });
});
$("#israel").click(function(){
    $("#isr").removeClass('visible');
});
//spain
$("#A_spa").click(function(){
    $("#spa").addClass('visible');
    $("#spain").mouseenter(function(){
        $("#buysp").css('fill','#FFEFEA');
    });
    $("#spain").mouseleave(function(){
        $("#buysp").css('fill','#FFFFFF');
      });
      $("#closed_spa").click(function(){
        $("#spa").removeClass('visible');
      });
});
$("#spain").click(function(){
    $("#spa").removeClass('visible');
});
//NewZealand
$("#A_nz").click(function(){
    $("#nzl").addClass('visible');
    $("#NewZealand").mouseenter(function(){
        $("#buynz").css('fill','#FFEFEA');
    });
    $("#NewZealand").mouseleave(function(){
        $("#buynz").css('fill','#FFFFFF');
      });
      $("#closed_nzl").click(function(){
        $("#nzl").removeClass('visible');
      });
      $("#W_nz").mouseenter(function(){
          $("#R_nzl").css('opacity','1');
      });
      $("#W_nz").mouseleave(function(){
          $("#R_nzl").css('opacity','0');
      });
});
$("#NewZealand").click(function(){
    $("#nzl").removeClass('visible');
});
//columbia
//$("#A_clm").mouseenter(function(){$("#enter_colm").css('display','block');$("#orignal").css('display','none');})
//$("#A_clm").mouseleave(function(){$("#enter_colm").css('display','none');  $("#orignal").css('display','block');})
$("#A_clm").click(function(){
    $("#coml").addClass('visible');
    $("#Columbia").mouseenter(function(){
        $("#buyclm").css('fill','#FFEFEA');
    });
    $("#Columbia").mouseleave(function(){
        $("#buyclm").css('fill','#FFFFFF');
      });
      $("#closed_clm").click(function(){
        $("#coml").removeClass('visible');
      });
      $("#W_coml").mouseenter(function(){
          $("#R_coml").css('opacity','1');
      });
      $("#W_coml").mouseleave(function(){
          $("#R_coml").css('opacity','0');
      });
});
$("#Columbia").click(function(){
    $("#coml").removeClass('visible');
});
//fairtrade
$("#A_ft").click(function(){
    $("#ftr").addClass('visible');
    $("#fairtrade").mouseenter(function(){
        $("#buyft").css('fill','#FFEFEA');
    });
    $("#fairtrade").mouseleave(function(){
        $("#buyft").css('fill','#FFFFFF');
      });
      $("#closed_ft").click(function(){
        $("#ftr").removeClass('visible');
      });
      $("#W_ftr").mouseenter(function(){
          $("#R_ftr").css('opacity','1');
      });
      $("#W_ftr").mouseleave(function(){
          $("#R_ftr").css('opacity','0');
      });
});
$("#fairtrade").click(function(){
    $("#ftr").removeClass('visible');
});
//pay_active
$("#pay").mouseenter(function(){
    $("#pay_active").css('display','block');
});
$("#pay").mouseleave(function(){
    $("#pay_active").css('display','none');
  });

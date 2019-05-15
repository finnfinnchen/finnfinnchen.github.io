//loading
window.onload=function(){
$(".loading").fadeOut();
}
$("html, body").css({
"overflow" : "hidden"
})
//
var avocados = Cookies.getJSON("avocado");
var x=0;
//console.log(avocados);
for(var i = 0, len = avocados.length; i < len; ++i){
  // i的值为0 1 2， id 为no1 no2 no3
  var id = "#no" + (i + 1);
  switch(avocados[i]){
    case "mexico":
      $(id).text("Avocado from MEXICO");
      $(id).click(function(event){
      window.location.href="/part2.html#5thPage";
      })
      x+=1.06;
      break;
    case "spain":
      $(id).text("Avocado from SPAIN");
      $(id).click(function(event){
      window.location.href="/part2.html#3rdPage";
      })
      x+=1.00;
      break;
    case "chile":
      $(id).text("Avocado from CHILE");
      $(id).click(function(event){
      window.location.href="/part2.html#3rdPage";
      })
      x+=1.30;
      break;
    case "israel":
      $(id).text("Avocado from ISRAEL");
      $(id).click(function(event){
      window.location.href="/part2.html#3rdPage";
      })
      x+=1.40;
      break;
    case "Columbia":
      $(id).text("Avocado from COLOMBIA");
      $(id).click(function(event){
      window.location.href="/part2.html#4thPage";
      })
      x+=1.10;
      break;
    case "NewZealand":
      $(id).text("Avocado from NEW ZEALAND");
      $(id).click(function(event){
      window.location.href="/part2.html#6thPage";
      })
      x+=2.40;
      break;
    case "fairtrade":
      $(id).text("Avocado from FAIRTRADE");
      $(id).click(function(event){
      window.location.href="/part2.html";
      })
      x+=7;
      break;
    default:
      break;
  }
}
//两位小数
x = x.toFixed(2);
$("#total").text(x);

$("#next").click(function(event){
window.location.href="/kitchen.html";
})

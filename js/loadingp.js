//loading
window.onload=function(){
$(".loading").fadeOut();
}
//animate
const element =  document.querySelector('#before')
element.classList.add('animated', 'bounce')



//button
$("#buttonGoOn").mouseenter(function(){
    $("#after").css('display','block');
    $("#jpg").css('display','block');
    $("#before").css('opacity','0');
});
$("#buttonGoOn").mouseleave(function(){
    $("#after").css('display','none');
    $("#jpg").css('display','none');
    $("#before").css('opacity','1');
});

$("#GoOn").click(function(event){
window.location.href="/market.html";
})

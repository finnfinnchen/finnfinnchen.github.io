//diretor
$('.continu').off('click');

//click function
var countries = [];
$('.btn').click(function(event){
  countries.push(this.id);
  Cookies.set("avocado",countries);
  add();
});
//Cookies.set("avocado",countries);
//js-button function
var count = 0;
function add()
    {
      if(count < 3){
        count++;
        //将count组合成字符串 "#a1" 放进jq的选择器中即可
        //调整了三个牛油果的id，现在从右至左
        var id = '#a' + count;
        $(id).addClass('visible');
        // 使用console打印调试信息
        console.log("id: " + id + " has been set to visible");
      }
      if(count == 3)
      {
        $(".continu").addClass('visible');
        console.log("count: have reached its maxium value" + count);
        // 另一种输出调试信息的方法，显然过于粗暴，不如console
        // alert会停止后续代码，此处不再用了
        // alert("You have had enough avocado!");
        // 有效地关闭btn click事件的方法
        $('.btn').off('click');
        $('.continu').on('click');

      }
    };
$(".continu").click(function(event){
window.location.href="/payment.html";
})

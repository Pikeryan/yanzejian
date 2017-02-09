/**
 * Created by Administrator on 2017/2/5.
 */
angular.module("shopCar",["shopCarList"]);

var _g = 0, _t = 0;
   function  fc()
    {
        if (this.checked == true) {
            $(this).parent().siblings().eq(2).text();
            console.log($(this).parent().siblings().eq(2).text());
            _g += $(this).parent().siblings().eq(2).text()
        }
    }

angular.module("shopCar").controller("myCount",function($scope){

   /* $scope.goodsCount = _g;
    $scope.totalPrice = _t;*/
})



$(function(){

    $(".gctop input").prop("checked","true");
    $(".priceCount input").prop("checked","true");
    $(".checkedAll").click(function(){
        //console.log(this.checked);
        if(this.checked == true){//当第一个默认为选中状态时
            /*首选两个全选框被选中偶数input*/
            $(".checkedAll").prop("checked","true");
            $(".gcmain input:even").prop("checked","true");
            $(".gcmain input:even").parent().parent().css("background","#fef4e8");
            //nums = $(".gcmain input:even").size();

        }else{
           // console.log($(".gcmain input:even").removeAttr("checked"))
            $(".checkedAll").removeProp("checked");
            $(".gcmain input:even").removeProp("checked");
            $(".gcmain input:even").parent().parent().css("background","#fff")
           // console.log($(".gcmain input:even"));
            //nums = 0;
        }
    })


    var num = 0;
//单个点击是出现的效果
    $(".goodsChecked").on("click",function(e){
        var num = 0;
        var countPrice = 0;
        e= e ||window.event;
        var flag = true;
        var tar = e.target || e.srcElement;
        $.each($(".gcmain input:even"),function(index){
            if(!$(this).prop("checked")){
                flag  = false;
            }else{
                num += parseInt($(this).parent().siblings().eq(3).children().eq(1).val())
                countPrice = parseInt($(this).parent().siblings().eq(2).text())
            }
        })
        console.log(num,countPrice)

        if($(tar).prop("checked") && $(tar).hasClass("checkBox")){//判断复选狂的被选中状态 如果没被选中则去掉后边的颜色
            $(tar).parent().parent().css("background","#fef4e8");
        }else if(!$(tar).prop("checked") && $(tar).hasClass("checkBox")) {
            $(tar).parent().parent().css("background","#fff");
        }

        if(!flag){
            $(".checkedAll").removeProp("checked");
        }else{
            $(".checkedAll").prop("checked","true")
        }
    });
    function  fc(){
        $(".gcmain input:even").each(function(){
            //console.log($(".gcmain input:even"))
            if (this.checked == true) {
                $(this).parent().siblings().eq(2).text();
                console.log($(this).parent().siblings().eq(2).text());
                _g += $(this).parent().siblings().eq(2).text()
            }
        })
    }
    //当数量为0时购物车的商品消失

    fc();

})

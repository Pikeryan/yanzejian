/**
 * Created by Administrator on 2017/1/25.
 */
$(function(){
    $(".smallimg").hover(function(){//放大镜的写法原理
        $(".smallview").css("display","block");
        $(".bigview").css("display","block");
        $(this).mousemove(function(e){
            e = e ||window.event;
            //取得鼠标坐标的位置
            var x = e.pageX - $(this).offset().left - $(".smallview").width()/2;
            var y = e.pageY - $(this).offset().top - $(".smallview").height()/2;
            //判断边界的问题等
            if(x<0 ){x=0};
            if(y<0){y = 0};
            if(x >= $(this).width()-$(".smallview").width()){x = $(this).width()-$(".smallview").width()}
            if(y >= $(this).height()-$(".smallview").height()){y = $(this).height()-$(".smallview").height()}
            //定位小视窗
            $(".smallview").css({"top":y,"left":x});
            //取得大视窗和大图片的比例关系
            var l = $(".bigimg").width()/$(".smallimg").width();
            var t = $(".bigimg").height()/$(".smallimg").height();
            //设置小视窗的宽高
            $(".smallview").css({"width":$(".smallimg").width()/l,"height":$(".smallimg").height()/t});
                //定位大图片的关系相对大视窗的位置
            $(".bigimg").css({"top":-t*y,"left":-l*x})
        })
    },function(){
        $(".smallview").css("display","none");
        $(".bigview").css("display","none");
    })
})

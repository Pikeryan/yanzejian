/**
 * Created by Administrator on 2017/1/25.
 */
$(function(){
    $(".smallimg").hover(function(){
        $(".smallview").css("display","block");
        $(".bigview").css("display","block");
        $(this).mousemove(function(e){
            e = e ||window.event;
            var x = e.pageX - $(this).offset().left -$(".smallview").width()/2;
            var y = e.pageY - $(this).offset().top - $(".smallview").height()/2;
            if(x<0 ){x=0};
            if(y<0){y = 0};
            if(x>=$(this).width()-$(".smallview").width()){x = $(this).width()-$(".smallview").width()}
            if(y>=$(this).height()-$(".smallview").height()){y = $(this).height()-$(".smallview").height()}
            $(".smallview").css({"top":y,"left":x});
            var l = $(".bigimg").width()/$(".smallimg").width();
            var t = $(".bigimg").height()/$(".smallimg").height();
            $(".smallview").css({"width":$(".smallimg").width()/l,"height":$(".smallimg").height()/t})
            $(".bigimg").css({"top":-t*y,"left":-l*x})
        })
    },function(){
        $(".smallview").css("display","none");
        $(".bigview").css("display","none");
    })
})

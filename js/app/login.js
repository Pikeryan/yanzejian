/**
 * Created by Administrator on 2017/1/18.
 * 这里是登陆注册页面的js代码
 */
$(function(){
    /*这是登陆框的js上边显示代码狂*/
    $(".loginBox p").click(function(){
        $(".loginBox p").attr("class","");
        $(this).attr("class","loginBox-p");
    });

    $(".loginBox input").focus(function(){
        var tex = $(this).attr("placeholder");
        $(this).attr("placeholder","");
        $(this).prev().text(tex);
        $(this).prev().css("display","block");
    })
    $(".loginBox input").blur(function(){
        var tex = $(this).prev().text();
        $(this).attr("placeholder",tex);
        $(this).prev().css("display","none")
    })

})
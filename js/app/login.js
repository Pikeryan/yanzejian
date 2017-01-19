/**
 * Created by Administrator on 2017/1/18.
 * 这里是登陆注册页面的js代码
 */
$(function(){
    /*这是登陆框的js上边显示代码狂*/
    $(".loginBox p").click(function(){
        $(".loginBox p").attr("class","");
        $(this).attr("class","loginBox-p");
        /*判断是否确定为短信登陆短信登陆即为注册 否则为密码登陆*/
        if($(this).text() == "短信登陆"){
            $(".sign").css("display","block");
            $(".login").css("display","none");
        }else{
            $(".sign").css("display","none");
            $(".login").css("display","block");
        }

    });
/*这里是当输入框获取焦点时 输入框中的信息定位于单选框上边*/
    $(".loginBox input").focus(function(){
        var tex = $(this).attr("placeholder");
        $(this).attr("placeholder","");
        $(this).prev().text(tex);
        $(this).prev().css("display","block");
    })
    /*失去焦点时输入框的信息重新显示于输入框中*/
    $(".loginBox input").blur(function(){
        var tex = $(this).prev().text();
        $(this).attr("placeholder",tex);
        $(this).prev().css("display","none")
    })
/*下面的是当我点击记住密码时勾选的按钮*/
    $('.rememberPassword span').eq(0).click(function(){
        $(this.children[0]).toggleClass('iChecked')
    })
/*切换登陆方式二维码登陆或者电脑登陆*/
    $(".erweima").click(function(){
        $(this).toggleClass("erweimalogin");
        $(this.children[0]).toggleClass("spanlogin");
        $(".loginBox .phoneBox").toggleClass("blockHide");
        $(".loginBox .codeBox").toggleClass("hideBlock");
    })

})
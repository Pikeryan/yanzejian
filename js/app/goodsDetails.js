/**
 * Created by Administrator on 2017/1/23.
 */
$(function(){
    EunneLode(Eunnejson,$("#Eunne ul"));
    EunneLode(Lavidionejson,$("#Lavidione ul"));
    EunneLode(Shezglobaljson,$("#Shezglobal ul"));
    EunneLode(AEannelogjson,$("#AEannelog ul"));
    EunneLode(Fagirejson,$("#Fagire ul"));
    EunneLode(Marcjson,$("#Marc ul"));
    $(".goodsMain ul li").hover(function(){
        console.log( $(this.children[4]));
        $(this.children[4]).css("display","block");
        $(this.children[4]).animate({"height":"80px","bottom":"84px"},200)
    },function(){
        $(this.children[4]).css("display","none");
        $(this.children[4]).animate({"height":"0px","bottom":"4px"},200)
    })
    $(".backtop span").click(function(){
        $(".backtop").css("display","none")
    });
    /*回到顶部事件*/
    $(".backtop p:last-of-type").click(function(){
        var top = $(window).scrollTop();
        var timer = setInterval(function(){
            $(window).scrollTop(top);
            top-=100;
            if(top<=0){
                clearInterval(timer);
                $(window).scrollTop(0);
            }
        },10)
    })

})
function EunneLode(json,jqdom){//数据加载函数
    $.each(json,function(index){
        var $li = $("<li>");

        var $a1 = $("<a>");
        $a1.attr("href","#");
        var goodimg = $("<img>");
        goodimg.attr("src",this.img);
        $a1.append(goodimg);

        var $a2 = $("<a>");
        $a2.attr("href","#");
        $a2.text(this.name);

        var span = $("<span>");
        span.text(this.price);

        $li.append($a1);
        $li.append($a2);
        $li.append(span);

        if(this.stock <= 0){
            var $img = $("<img>");
            $img.attr("src",this.yswimg);
            $li.append($img);
        }
        if($(this.goodsSizes).size()>0){//如果存在尺码则创建尺码
            var $div1 = $("<div>");
            $div1.addClass("goodSize");

            var $div2 = $("<div>");
            $div2.addClass("opacity");
            $div1.append($div2);

            var $div3 = $("<div>");

            var $p = $("<p>");
            $p.text("可售尺码");
            $div3.append($p);

            for(var i= 0 ;i<$(this.goodsSizes).size();i++){
                //console.log(this.goodsSizes[i]);
                var $em = $("<em>");
                $em.text(this.goodsSizes[i]);
                $div3.append($em);
            }
            $div1.append($div3);
            $li.append($div1);
        }//!*尺码到此结束*!

        jqdom.append($li);
    })
}
var Eunnejson = [
    {"goodid":"001","img":"images/goodsMain/pic_01.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"002","img":"images/goodsMain/pic_02.jpg","stock":4,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"003","img":"images/goodsMain/pic_03.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"004","img":"images/goodsMain/pic_04.jpg","stock":1,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"005","img":"images/goodsMain/pic_05.jpg","stock":4,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"006","img":"images/goodsMain/pic_06.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"007","img":"images/goodsMain/pic_07.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"008","img":"images/goodsMain/pic_08.jpg","stock":2,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"009","img":"images/goodsMain/pic_09.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"010","img":"images/goodsMain/pic_10.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"011","img":"images/goodsMain/pic_11.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"012","img":"images/goodsMain/pic_12.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"013","img":"images/goodsMain/pic_13.jpg","stock":3,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"014","img":"images/goodsMain/pic_14.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"015","img":"images/goodsMain/pic_15.jpg","stock":4,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"016","img":"images/goodsMain/pic_06.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"017","img":"images/goodsMain/pic_17.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"018","img":"images/goodsMain/pic_18.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"019","img":"images/goodsMain/pic_19.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"020","img":"images/goodsMain/pic_20.jpg","stock":4,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"021","img":"images/goodsMain/pic_21.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"}
]


var Lavidionejson =[
    {"goodid":"001","img":"images/goodsMain/pic_25.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"002","img":"images/goodsMain/pic_26.jpg","stock":4,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"003","img":"images/goodsMain/pic_27.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"004","img":"images/goodsMain/pic_28.jpg","stock":1,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"005","img":"images/goodsMain/pic_29.jpg","stock":4,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"006","img":"images/goodsMain/pic_30.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"007","img":"images/goodsMain/pic_31.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"008","img":"images/goodsMain/pic_32.jpg","stock":2,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"009","img":"images/goodsMain/pic_33.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"010","img":"images/goodsMain/pic_34.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"011","img":"images/goodsMain/pic_35.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"012","img":"images/goodsMain/pic_36.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"013","img":"images/goodsMain/pic_37.jpg","stock":3,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"014","img":"images/goodsMain/pic_38.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"}]


    var Shezglobaljson = [{"goodid":"001","img":"images/goodsMain/pic_22.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S","M","ML"]},
    {"goodid":"001","img":"images/goodsMain/pic_23.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S","M"]},
    {"goodid":"001","img":"images/goodsMain/pic_24.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S"]}]


var AEannelogjson = [{"goodid":"001","img":"images/goodsMain/pic_39.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S","M","ML"]},
    {"goodid":"001","img":"images/goodsMain/pic_40.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"001","img":"images/goodsMain/pic_41.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S"]},{"goodid":"001","img":"images/goodsMain/pic_42.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"001","img":"images/goodsMain/pic_43.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S","M"]},
    {"goodid":"001","img":"images/goodsMain/pic_38.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S"]}]

var Fagirejson = [{"goodid":"001","img":"images/goodsMain/pic_44.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S","M","ML"]},
    {"goodid":"001","img":"images/goodsMain/pic_45.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"001","img":"images/goodsMain/pic_46.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S"]},{"goodid":"001","img":"images/goodsMain/pic_47.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"},
    {"goodid":"001","img":"images/goodsMain/pic_48.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S","M"]},
    {"goodid":"001","img":"images/goodsMain/pic_49.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S"]},
    {"goodid":"001","img":"images/goodsMain/pic_50.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S","M"]},
    {"goodid":"001","img":"images/goodsMain/pic_51.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S"]}];

var Marcjson = [{"goodid":"001","img":"images/goodsMain/pic_51.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套","goodsSizes":["L","S","M","ML"]},
    {"goodid":"001","img":"images/goodsMain/pic_52.jpg","stock":0,"price":659,"yswimg":"images/goodsMain/ysw.png","name":"女士经典挺括棉A字型显瘦中袖黑色外套"}]
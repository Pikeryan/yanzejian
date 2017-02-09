/**
 * Created by Administrator on 2017/1/21.
 * 首页的js样式
 */

var goodsjson = [{"img":"images/0120goods_a1.jpg"},{"img":"images/0121goods_a2.jpg"},{"img":"images/0120goods_a3.jpg"},{"img":"images/0121goods_a4.jpg"},{"img":"images/0121goods_a5.jpg"},{"img":"images/0121goods_a6.jpg"}];
var goodsjson1 = [{"img":"images/0120goods_b1.jpg"},{"img":"images/0120goods_b3.jpg"},{"img":"images/0120goods_b6.jpg"},{"img":"images/0121goods_b2.jpg"},{"img":"images/0121goods_b4.jpg"},{"img":"images/0121goods_b5.jpg"}];
var goodsjson2 = [{"img":"images/0121goods_c1.jpg"},{"img":"images/0121goods_c3.jpg"},{"img":"images/0121goods_c6.jpg"},{"img":"images/0121goods_c2.jpg"},{"img":"images/0121goods_c4.jpg"},{"img":"images/0121goods_c5.jpg"}];
var goodsjson3 = [{"img":"images/0121goods_d1.jpg"},{"img":"images/0121goods_d3.jpg"},{"img":"images/0121goods_d6.jpg"},{"img":"images/0121goods_d2.jpg"},{"img":"images/0121goods_d4.jpg"},{"img":"images/0121goods_d5.jpg"}];
var goodsjson4 = [{"img":"images/0121goods_e1.jpg"},{"img":"images/0121goods_e3.jpg"},{"img":"images/0121goods_e6.jpg"},{"img":"images/0121goods_e2.jpg"},{"img":"images/0121goods_e4.jpg"},{"img":"images/0121goods_e5.jpg"}];
var goodsjson5 = [{"img":"images/0121goods_f1.jpg"},{"img":"images/0121goods_f3.jpg"},{"img":"images/0121goods_f6.jpg"},{"img":"images/0121goods_f2.jpg"},{"img":"images/0121goods_f4.jpg"},{"img":"images/0121goods_f5.jpg"}];



$(function(){
    $(".xinrenfenxiang a").hover(function(){
        $(this).stop().animate({"left":"-30px"},300)
    },function(){
        $(this).stop().animate({"left":0},300)
    })

    loadjson(goodsjson);
    loadjson(goodsjson1);
    loadjson(goodsjson2);
    loadjson(goodsjson3);
    loadjson(goodsjson4);
    loadjson(goodsjson5);
    /*热荐专题*/
    loadremen(rejianjson);

    loadfaxianjson(faxianjson);

/*回到顶部事件*/
    $("#back").click(function(){
        var top = $(window).scrollTop();
        var timer = setInterval(function(){
            $(window).scrollTop(top);
            top-=100;
            if(top<=0){
                clearInterval(timer);
                $(window).scrollTop(0);
            }
        },10)
    });


    /*尖端好货的点击时间*/
    $("#jhFloor").click(function(){
        var top = $(".jianduanhaohuo").offset().top - 100;
        console.log(top);
        $(window).scrollTop(top);

    });
})
//尖端好货函数
function loadjson(json){
    var div = $("<div>");
    div.addClass("clear");
    $.each(json,function(index){
        var a = $("<a>");
        a.attr("href","#");
        var img = $("<img>");
        img.attr("src",this.img);
        var span = $("<span>");
        a.append(img);
        a.append(span);
        div.append(a);
    })
    $(".goodGoods").append(div);
}
var rejianjson = [{"img":"images/0110beats_01.jpg","spanimg":"images/0116beats_01.png"},
    {"img":"images/0119beats_02.jpg","spanimg":"images/0119beats_02.png"},
    {"img":"images/0119beats_03.jpg","spanimg":"images/0119beats_03.png"},
    {"img":"images/0112beats_04.jpg","spanimg":"images/0112beats_04.png"},
    {"img":"images/0114beats_05.jpg","spanimg":"images/0114beats_05.png"},
    {"img":"images/0110beats_06.jpg","spanimg":"images/0116beats_06.png"}
]
//热门推荐函数
function loadremen(json){
    $.each(json,function(index){
        var a = $("<a>");
        a.attr("href","#");
        var img = $("<img>");
        img.addClass("rejianimg");
        img.attr("src",this.img);
        var span = $("<span>");
        var spanimg = $("<img>");
        spanimg.attr("src",this.spanimg);
        span.append(spanimg);
        a.append(img);
        a.append(span);
        $(".rejian").append(a);
    })
}



var faxianjson　= [{"img":"images/20170105_001.jpg"},{"img":"images/20170105_002.jpg"},{"img":"images/20170105_003.jpg"},{"img":"images/20170105_004.jpg"},{"img":"images/20170105_005.jpg"},{"img":"images/20170112_006.jpg"},{"img":"images/20170105_007.jpg"},{"img":"images/20170105_008.jpg"},{"img":"images/20170105_009.jpg"},{"img":"images/20170105_010.jpg"},{"img":"images/20170105_011.jpg"},{"img":"images/20170105_012.jpg"},{"img":"images/20170105_013.jpg"},{"img":"images/20170105_014.jpg"},{"img":"images/20170105_015.jpg"},{"img":"images/20170105_016.jpg"}];
//发现好货的js代码编写
function loadfaxianjson(json){
    $.each(json,function(index){
        var li = $("<li>");
        var a = $("<a>");
        a.attr("href","#");
        var img = $("<img>");
        img.attr("src",this.img);
        a.append(img);
        li.append(a);
        $(".faxianhaohuo ul").append(li);
        if((index+1)%4 == 0){
            li.css("marginRight",0);
        }
    })
}
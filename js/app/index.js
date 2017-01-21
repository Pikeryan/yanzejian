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
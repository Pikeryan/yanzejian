/**
 * Created by Administrator on 2017/1/20.
 * 头部动态信息
 */
$(function(){
    $(".myShow").hover(function(){
        $(".myShowNav").css("display","block")
    },function(){
        $(".myShowNav").css("display","none")
    })
    $(".gouwudai").hover(function(){
        $(".daizi").css("display","block")
    },function(){
        $(".daizi").css("display","none")
    })


    /*导航栏的样式*/
    $(".nav a").hover(function(){
        $(this.children[0]).css("display","block");
        var $left =  $(this).offset().left - $(".container").offset().left;
        if($left >= $(".container").width()- $(".navBox").width()){
            $left = $(".container").width()- $(".navBox").width()
        }
        $(".navBox").css({"display":"block","left":$left})
    },function(){
        $(this.children[0]).css("display","none");
    })

    $(".top2 .container").mouseleave(function(){
        $(".navBox").css({"display":"none"})
    })

    $("#search").focus(function(){
        var t = $(this).attr("placeholder");
        $(this).attr("placeholder","");
        if($(this).val().trim() == ""){
            $("#search").blur(function(){
                $(this).attr("placeholder",t);
            })
        }
    })


    /*吸顶菜单*/
    var y = $(".xiding").offset().top;
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=y){
            $(".top").css({
                "position":"fixed",
                "top":-y,
                "zIndex":"5"
            })
        }else {
            $(".top").css({
                "position":"static",
                "zIndex":"5"
            })
        }
    })
})

var navjson =
    {
        "包袋":[{
            left:{0:"频道精选",1:"女士包袋",2:"男士包袋",3:"功能箱包",4:"旅行包"},
            "女士包袋":{0:"手提包", 1:"单肩包",2:"斜挎包",3:"提跨两用包",4:"双肩包",5:"钱包",6:"手拿包/晚宴包",7:"化妆包"},
            "男士包袋":{0:"手提包",1:"公文包",3:"斜跨包",4:"单肩包",5:"提跨两用包",6:"双肩包",7:"钱包",8:"手包/夹包"},
            "功能箱包":{0:"电脑包/袋",1:"iPad套",2:"摄影包/相机袋",3:"手机袋/手机壳",4:"钥匙包",5:"名片夹",6:"卡包",7:"腰包",8:"环保袋",9:"其他"},
            "旅行包":{0:"旅行箱",1:"旅行包",2:"登山包"},
            right:{
                "热门品牌":{0:"Michael kors",1:"Bally",3:"Chanel",4:"Louis Vuitton",5:"Gucci",6:"Burberry",7:"Celine",8:"Rimowa",9:"Prada",10:"Dolce@Gabbana",11:"Chloe",12:"miu Miu",13:"Bottega Weneta",14:"Fendi",15:"Givenchy",16:"菲拉格慕",17:"Saint Laurent",18:"Valentino",19:"Prada",20:"Coach",21:"Balenciaga",22:"Aspinal of london",23:"Armani Jeans",24:"Philipp Plein",25:"Furla",26:"Moschino",27:"MCM",28:"Emporio Armani",29:"Dior",30:"Hermes",31:"Longchamp"}
            }
        }],
        "香包":{0:"xiangbao"}
    }


function lodeNav(json,tex){
    json.tex.each(function(){
            var $div =  $("<div>");
            var $h5 = $("<h5>");

        })

}
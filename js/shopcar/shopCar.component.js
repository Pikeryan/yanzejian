/**
 * Created by Administrator on 2017/2/5.
 */
angular.module("shopCarList")
    .component("carList",{
        templateUrl:"js/shopcar/shopCar.template.html",
        controller:["$scope", "$http", function($scope,$http){
            var that = this;
            $scope.addClick = function (g,e){
                e= e || window.event;
                //取得被点击元素的内容并且判断是加一还是减一
                if(angular.element(e.target).text()== "-"){
                    g.number = g.number - 1;
                }
                if(angular.element(e.target).text()== "+"){
                    g.number = g.number + 1;
                }
                //判断每件商品的最小值不能为负数最少为0
                $(".gcmain input:odd").each(function () {
                    if (g.nums <= 0) {
                        g.nums = 0;
                    }
                    //判断每件商品的最大值不能为负数最少定义的最大值
                    if(g.nums >= g.maxNums){
                        g.nums = g.maxNums;
                    }
                })
            }
            //已选商品件数

            //请求购物车数据并将数据显示在购物车内
            $http
            ({
                method:"get",
                url:" http://datainfo.duapp.com/shopdata/getCar.php",
                params:{
                    userID:"admin"
                }
            }).then(function(response){
                var s = response.data
                s = s.slice(9, s.length -1)
                s = JSON.parse(s)
                that.carGoods = s;//请求到的json数据加载出来
            })
        }]
    })

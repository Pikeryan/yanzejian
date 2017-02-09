/**
 * Created by Administrator on 2017/2/9.
 */
angular.module("register")
    .config(function($sceDelegateProvider){
        $sceDelegateProvider.resourceUrlWhitelist([
            "self",
            "http://datainfo.duapp.com/**"
        ])//设置访问白名单进行跨域
    }).service("registerService",["$http", function ($h) {//自定义服务进行数据请求
        this.getData = function(un,pw,fn){
            $h({
                method:"get",
                url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                params:{
                    status:"register",
                    userID:un,
                    password:pw
                }
            }).then(function(response){
                    fn(response);
                    console.log(response)
            },function(response){
                console.log("链接服务其超时.....")
            })
        }
}])
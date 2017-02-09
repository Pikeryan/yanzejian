/**
 * Created by Administrator on 2017/2/9.
 */
angular.module("register")
    .controller("registerController",["$scope","registerService",function($scope,registerService){
        //service服务
        console.log(registerPwd());
           $scope.registerLogin = function(un,pw){
               $scope.uname = un;
               $scope.pwd = pw;
               console.log("1111",un,pw)
               registerService.getData($scope.uname, $scope.pwd,$scope.callback)
           }


        $scope.callback = function(data){
            if(data.data == "1"){//判段返回值若返回值为1  则注册成功
                alert("注册成功");
            }else　if(data.data == "0"){  //返回值为0 则注册用户名存在
                alert("用户名已存在，请重新输入");
            }else{//否则注册失败
                alert("注册失败");
            }
        }

}])



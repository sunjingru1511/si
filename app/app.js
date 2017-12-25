var app = angular.module('app', ["ngRoute"])

// 路由
 app.config(function ($routeProvider) {
    $routeProvider
       .when("/page1", {
           templateUrl: "./app/view/page1.html",
           controller: "ctl1"
       })
       .when("/page2", {
        templateUrl: "./app/view/page2.html",
        controller: "ctl2"
    });
 });
// app.controller("tabController", function () {
    
// })
// 自定义服务
app.directive('tab', [ function () {
    return {
        restrict: "EA",
        templateUrl:"/app/view/template/tab.html",
         
        controller: function ($scope) {
            $scope.title = ["标题1", "标题2", "标题3" ];
            $scope.content = ["这是标题11111的内容", "这是标题22222的内容", "这是标题33333的内容" ];
            $scope.changTab = function (index) {
               var ulis = document.querySelectorAll("ul li");
               var olis = document.querySelectorAll("ol li");
               olis.forEach(function (item, index1) {
                   if (index1 == index) {
                       item.style.background = 'red';
                       ulis[index1].style.display = "block";
                   } else {
                       item.style.background = '';
                       ulis[index1].style.display = "none"
                   }
               })
            }
        }
    }
}])
app.directive('tab', [ function () {
    return {
        restrict: "EA",
        template:"<p>你好</p>",
        // link: function () {

        // },
        controller: function ($scope) {
            $scope.title = ["标题1", "标题2", "标题3" ];
            $scope.content = ["这是标题1的内容", "这是标题2的内容", "这是标题3的内容" ];
        }
    }
}])
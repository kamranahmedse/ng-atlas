app.directive("loader", function ($rootScope) {

    return {
        transclude: true,
        template: '<div id="loaderDiv" class="loader-progress" ng-show="isLoading">' +
                        '<div class="progress">' +
                            '<div class="progress-bar progress-bar-striped active"></div>' +
                        '</div>' +
                    '</div>',
        replace: true,
        restrict: 'AE',
        link: function ($scope, $element, attrs) {
            $scope.$on("loader_show", function () {
                $scope.isLoading = true;
            });

            return $scope.$on("loader_hide", function () {
                $scope.isLoading = false;
            });
        }
    };

});
app.controller('rankController', function ($scope, $rootScope, $http, $window, gameServices) {
    $scope.headingTitle = "Login Activity";

    $scope.getRanking = function () {
        gameServices.getRanking()
            .success(function (data) {
                $scope.games = data
                //$rootScope.maioresPontuadores = data;
            }).error(function (err) {
            alert(err);
        });
    };

    $scope.avaliar = function () {
        $window.location.href = '/index.html#/avaliar';
    };

    $scope.getNumber = function (num) {
        return new Array(num);
    };

    $scope.init = function () {
        $scope.getRanking();
    };

    $scope.init();
});

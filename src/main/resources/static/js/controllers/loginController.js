app.controller('loginController', function ($scope, $rootScope, $http, $location, $window, gameServices) {
    $scope.headingTitle = "Login Activity";

    $scope.logar = function () {
        if ($scope.usuario.nome === "admin" && $scope.usuario.senha === "admin") {
            $window.location.href = '/index.html#/rank';
        } else {
            alert("Usuário ou senha incorreta!");
        }
    }
});

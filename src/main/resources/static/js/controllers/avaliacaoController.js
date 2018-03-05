app.controller('avaliacaoController', function ($scope, $rootScope, $http, $timeout, $window, gameServices) {

    $scope.pesquisar = function (nomeJogo) {
        gameServices.getGame(nomeJogo)
            .success(function (data) {
                if (data.length > 0) {
                    $scope.game = data[0];
                }
            }).error(function (err) {
            alert(err);
        });
    };

    $scope.verRanking = function () {
        $window.location.href = '/index.html#/rank';
    };

    $scope.avaliar = function () {
        $scope.gameAvaliacao.id = $scope.game.id;
        $scope.gameAvaliacao.nome = $scope.game.nome;
        $scope.gameAvaliacao.urlGame = $scope.game.urlGame;

        console.log($scope.gameAvaliacao);

        gameServices.avaliar($scope.gameAvaliacao)
            .success(function (data) {
                $game = data;
                alert("Avaliação realizada com sucesso!");
                $window.location.href = '/index.html#/rank';
            }).error(function (err) {
            alert(err);
        });
    };

    $scope.getNumber = function (num) {
        return new Array(num);
    };

    $scope.init = function () {

    };

    $scope.init();
});
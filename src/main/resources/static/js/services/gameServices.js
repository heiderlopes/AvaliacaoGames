app.factory('gameServices', [ '$http',  function ($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    return{
        avaliar: function(game){
            return $http({
                method: 'POST',
                url: 'http://localhost:8080/game/votar',
                //headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
                data: game
            });
        },

        getRanking: function(){
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/game/ranking'
            });
        },

        getGame: function(nomeJogo){
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/game?nome=' + nomeJogo
            });
        }
    }
}]);

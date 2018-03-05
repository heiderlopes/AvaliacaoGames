app.factory('gameServices', [ '$http',  function ($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    return{
        avaliar: function(game){
            return $http({
                method: 'POST',
                url: '/game/votar',
                //headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
                data: game
            });
        },

        getRanking: function(){
            return $http({
                method: 'GET',
                url: '/game/ranking'
            });
        },

        getGame: function(nomeJogo){
            return $http({
                method: 'GET',
                url: '/game?nome=' + nomeJogo
            });
        }
    }
}]);

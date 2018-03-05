var app = angular.module('app', ['ngRoute','ngResource']);
var services = angular.module('app.services', []);

app.config(function($routeProvider){
    $routeProvider
        .when('/login',{
            templateUrl: '/views/login.html',
            controller: 'loginController'
        })
        .when('/avaliar',{
            templateUrl: '/views/avaliacao.html',
            controller: 'avaliacaoController'
        })
        .when('/rank',{
            templateUrl: '/views/rank.html',
            controller: 'rankController'
        })
        
        .otherwise(
            { redirectTo: '/login'}
        );
});


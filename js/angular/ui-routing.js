(function () {
    'use strict';
    angular.module('sahmirbgsApp')
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '../app/home/home.html',
                    controller: "homeController"
                })
                .state ('floor-ceramic-tiles', {
                    url: '/floor-ceramic-tiles',
                    templateUrl: '../app/floor-ceramic-tiles/floor-ceramic-tiles.html',
                    controller: "FloorCeramicTilesController"
                })
                .state('otherwise', {
                    url: '/',
                    templateUrl: '../app/home/home.html',
                    controller: "homeController"
                });
        });
})();
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
                .state('floor-ceramic-tiles', {
                    url: '/floor-ceramic-tiles',
                    templateUrl: '../app/floor-ceramic-tiles/floor-ceramic-tiles.html',
                    controller: "FloorCeramicTilesController"
                })
                .state('about-us', {
                    url: '/about-us',
                    templateUrl: '../app/about-us/about-us.html',
                    controller: 'AboutUsController'
                })
                .state('otherwise', {
                    url: '/',
                    templateUrl: '../app/home/home.html',
                    controller: "homeController"
                });
        });
})();
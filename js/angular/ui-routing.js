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
                .state('project-details-01', {
                    url: '/project-details-01',
                    templateUrl: '../app/project-details-01/project-details-01.html',                
                    controller: 'ProjectDetailsOneController'
                })
                .state('project-details-02', {
                    url: '/project-details-02',
                    templateUrl: '../app/project-details-02/project-details-02.html',                
                    controller: 'ProjectDetailsTwoController'
                })
                .state('carpet-tiles', {
                    url: '/carpet-tiles',
                    templateUrl: '../app/carpet-tiles/carpet-tiles.html', 
                    controller: 'CarpetTilesController'
                })
                .state('pvc-floor', {
                    url: '/pvc-floor',
                    templateUrl: '../app/pvc-floor/pvc-floor.html',
                    controller: 'PVCFloorController'
                })
                .state('raise-floor', {
                    url: '/raise-floor',
                    templateUrl: '../app/raise-floor/raise-floor.html',
                    controller: 'RaiseFloorController'
                })
                .state('wooden-floor', {
                    url: '/wooden-floor',
                    templateUrl: '../app/wooden-floor/wooden-floor.html',
                    controller: 'WoodenFloorController'
                })
                .state('cell-ceiling', {
                    url: '/cell-ceiling',
                    templateUrl: '../app/cell-ceiling/cell-ceiling.html',
                    controller: 'CellCeilingController'
                })
                .state('clip-in', {
                    url: '/clip-in',
                    templateUrl: '../app/clip-in/clip-in.html',
                    controller: 'ClipInController'
                })
                .state('lay-in', {
                    url: '/lay-in',
                    templateUrl: '../app/lay-in/lay-in.html',
                    controller: 'LayInController'
                })
                .state('mineral-board', {
                    url: '/mineral-board',
                    templateUrl: '../app/mineral-board/mineral-board.html',
                    controller: 'MineralBoardController'
                })
                .state('pvc-laminnated', {
                    url: '/pvc-laminnated',
                    templateUrl: '../app/pvc-laminnated/pvc-laminnated.html',
                    controller: 'PVCLaminnatedController'
                })
                .state('polycarbone-sheet', {
                    url: '/polycarbone-sheet',
                    templateUrl: '../app/polycarbone-sheet/polycarbone-sheet.html',
                    controller: 'PolycarboneSheetController'
                })
                .state('glass-block', {
                    url: '/glass-block',
                    templateUrl: '../app/glass-block/glass-block.html',
                    controller: 'GlassBlockController'
                })
                .state('chair', {
                    url: '/chair',
                    templateUrl: '../app/chair/chair.html',
                    controller: 'ChairController'
                })
                .state('conference-table', {
                    url: '/conference-table',
                    templateUrl: '../app/confarance-table/confarance-table.html',
                    controller: 'ConfaranceTableController'
                })
                .state('otherwise', {
                    url: '/',
                    templateUrl: '../app/home/home.html',
                    controller: "homeController"
                });
        });
})();
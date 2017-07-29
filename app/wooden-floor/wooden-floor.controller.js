(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('WoodenFloorController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'Wooden Floor';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/wooden-floor/1.jpg",
				name: "Wooden Floor # 01",
				pCode: "WF0031",
			},
			{
				id: 2,
				imgUrlstyle: "img/wooden-floor/2.jpg",
				name: "Wooden Floor # 02",
				pCode: "WF0032",
			},
			{
				id: 3,
				imgUrlstyle: "img/wooden-floor/3.jpg",
				name: "Wooden Floor # 03",
				pCode: "WF0034",
			},
			{
				id: 4,
				imgUrlstyle: "img/wooden-floor/4.jpg",
				name: "Wooden Floor # 04",
				pCode: "WF0034",
			},
			{
				id: 5,
				imgUrlstyle: "img/wooden-floor/5.jpg",
				name: "Wooden Floor # 05",
				pCode: "WF0035",
			},
			{
				id: 6,
				imgUrlstyle: "img/wooden-floor/6.jpg",
				name: "Wooden Floor # 06",
				pCode: "WF0036",
			},
			{
				id: 7,
				imgUrlstyle: "img/wooden-floor/7.jpg",
				name: "Wooden Floor # 07",
				pCode: "WF0037",
			},
			{
				id: 8,
				imgUrlstyle: "img/wooden-floor/8.jpg",
				name: "Wooden Floor # 08",
				pCode: "WF0038",
			},
			{
				id: 9,
				imgUrlstyle: "img/wooden-floor/9.jpg",
				name: "Wooden Floor # 09",
				pCode: "WF0039",
			},
			{
				id: 10,
				imgUrlstyle: "img/wooden-floor/10.jpg",
				name: "Wooden Floor # 010",
				pCode: "WF00310",
			},
			{
				id: 11,
				imgUrlstyle: "img/wooden-floor/11.jpg",
				name: "Wooden Floor # 011",
				pCode: "WF00311",
			},
		]

	}]);

})();
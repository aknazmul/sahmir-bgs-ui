(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('WorkstationController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'Workstation';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/workstation/1.jpg",
				name: "Workstation # 01",
				pCode: "WS0031",
			},
			{
				id: 2,
				imgUrlstyle: "img/workstation/2.jpg",
				name: "Workstation # 02",
				pCode: "WS0032",
			},
			{
				id: 3,
				imgUrlstyle: "img/workstation/3.jpg",
				name: "Workstation # 03",
				pCode: "WS0034",
			},
			{
				id: 4,
				imgUrlstyle: "img/workstation/4.jpg",
				name: "Workstation # 04",
				pCode: "WS0034",
			},
			{
				id: 5,
				imgUrlstyle: "img/workstation/5.jpg",
				name: "Workstation # 05",
				pCode: "WS0035",
			},
			{
				id: 6,
				imgUrlstyle: "img/workstation/6.jpg",
				name: "Workstation # 06",
				pCode: "WS0036",
			},
			{
				id: 7,
				imgUrlstyle: "img/workstation/7.jpg",
				name: "Workstation # 07",
				pCode: "WS0037",
			},
			{
				id: 8,
				imgUrlstyle: "img/workstation/8.jpg",
				name: "Workstation # 08",
				pCode: "WS0038",
			},
			{
				id: 9,
				imgUrlstyle: "img/workstation/9.jpg",
				name: "Workstation # 09",
				pCode: "WS0039",
			},
			{
				id: 10,
				imgUrlstyle: "img/workstation/10.jpg",
				name: "Workstation # 010",
				pCode: "WS00310",
			},
			{
				id: 11,
				imgUrlstyle: "img/workstation/11.jpg",
				name: "Workstation # 011",
				pCode: "WS00311",
			},
		]

	}]);

})();
(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('MineralFiberCeilinMFController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'Mineral Fiber Ceiling';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/mineral-fiber-ceiling/1.jpg",
				name: "Mineral Fiber Ceiling # 01",
				pCode: "MFC0031",
			},
			{
				id: 2,
				imgUrlstyle: "img/mineral-fiber-ceiling/2.jpg",
				name: "Mineral Fiber Ceiling # 02",
				pCode: "MFC0032",
			},
			{
				id: 3,
				imgUrlstyle: "img/mineral-fiber-ceiling/3.jpg",
				name: "Mineral Fiber Ceiling # 03",
				pCode: "MFC0034",
			},
			{
				id: 4,
				imgUrlstyle: "img/mineral-fiber-ceiling/4.jpg",
				name: "Mineral Fiber Ceiling # 04",
				pCode: "MFC0034",
			},
			{
				id: 5,
				imgUrlstyle: "img/mineral-fiber-ceiling/5.jpg",
				name: "Mineral Fiber Ceiling # 05",
				pCode: "MFC0035",
			},
			{
				id: 6,
				imgUrlstyle: "img/mineral-fiber-ceiling/6.jpg",
				name: "Mineral Fiber Ceiling # 06",
				pCode: "MFC0036",
			},
			{
				id: 7,
				imgUrlstyle: "img/mineral-fiber-ceiling/7.jpg",
				name: "Mineral Fiber Ceiling # 07",
				pCode: "MFC0037",
			}, 
		]

	}]);

})();
(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('CarpetTilesController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'Carpet Tiles';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/carpet-tiles/1.jpg",
				name: "Carpet Tiles # 01",
				pCode: "CT0031",
			},
			{
				id: 2,
				imgUrlstyle: "img/carpet-tiles/2.jpg",
				name: "Carpet Tiles # 02",
				pCode: "CT0032",
			},
			{
				id: 3,
				imgUrlstyle: "img/carpet-tiles/3.jpg",
				name: "Carpet Tiles # 03",
				pCode: "CT0034",
			},
			{
				id: 4,
				imgUrlstyle: "img/carpet-tiles/4.jpg",
				name: "Carpet Tiles # 02",
				pCode: "CT0035",
			},
			{
				id: 5,
				imgUrlstyle: "img/carpet-tiles/5.jpg",
				name: "carpet-tile # 01",
				pCode: "CT0035",
			},
		]

	}]);

})();
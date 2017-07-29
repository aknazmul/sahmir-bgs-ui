(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('CellCeilingController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'Cell Ceiling';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/cell-ceiling/1.jpg",
				name: "Cell Ceiling # 01",
				pCode: "CC0031",
			},
			{
				id: 2,
				imgUrlstyle: "img/cell-ceiling/2.jpg",
				name: "Cell Ceiling # 02",
				pCode: "CC0032",
			},
			{
				id: 3,
				imgUrlstyle: "img/cell-ceiling/3.jpg",
				name: "Cell Ceiling # 03",
				pCode: "CC0034",
			},
			{
				id: 4,
				imgUrlstyle: "img/cell-ceiling/4.jpg",
				name: "Cell Ceiling # 04",
				pCode: "CC0034",
			},
		]

	}]);

})();
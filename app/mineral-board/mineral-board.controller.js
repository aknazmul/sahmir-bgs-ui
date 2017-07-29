(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('MineralBoardController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'Mineral Board';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/mineral-board/1.jpg",
				name: "Mineral Board # 01",
				pCode: "MB0031",
			},
			{
				id: 2,
				imgUrlstyle: "img/mineral-board/2.jpg",
				name: "Mineral Board # 02",
				pCode: "MB0032",
			},
			{
				id: 3,
				imgUrlstyle: "img/mineral-board/3.jpg",
				name: "Mineral Board # 03",
				pCode: "MB0033",
			},
			{
				id: 4,
				imgUrlstyle: "img/mineral-board/4.jpg",
				name: "Mineral Board # 04",
				pCode: "MB0034",
			},
			{
				id: 5,
				imgUrlstyle: "img/mineral-board/5.jpg",
				name: "Mineral Board # 05",
				pCode: "MB0035",
			},
		]

	}]);

})();
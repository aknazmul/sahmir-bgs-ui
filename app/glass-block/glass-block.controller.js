(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('GlassBlockController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'Glass Block';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/glass-block/1.jpg",
				name: "Glass Block # 01",
				pCode: "GB0031",
			},
			{
				id: 2,
				imgUrlstyle: "img/glass-block/2.jpg",
				name: "Glass Block # 02",
				pCode: "GB0032",
			},
			{
				id: 3,
				imgUrlstyle: "img/glass-block/3.jpg",
				name: "Glass Block # 03",
				pCode: "GB0034",
			},
			{
				id: 4,
				imgUrlstyle: "img/glass-block/4.jpg",
				name: "Glass Block # 04",
				pCode: "GB0034",
			},
			{
				id: 5,
				imgUrlstyle: "img/glass-block/5.jpg",
				name: "Glass Block # 05",
				pCode: "GB0035",
			},
		]

	}]);

})();
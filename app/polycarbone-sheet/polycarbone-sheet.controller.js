(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('PolycarboneSheetController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'Polycarbone Sheet';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/polycarbone-sheet/1.jpg",
				name: "Polycarbone Sheet # 01",
				pCode: "PS0031",
			},
			{
				id: 2,
				imgUrlstyle: "img/polycarbone-sheet/2.jpg",
				name: "Polycarbone Sheet # 02",
				pCode: "PS0032",
			},
			{
				id: 3,
				imgUrlstyle: "img/polycarbone-sheet/3.jpg",
				name: "Polycarbone Sheet # 03",
				pCode: "PS0034",
			},
			{
				id: 4,
				imgUrlstyle: "img/polycarbone-sheet/4.jpg",
				name: "Polycarbone Sheet # 04",
				pCode: "PS0034",
			},
			{
				id: 5,
				imgUrlstyle: "img/polycarbone-sheet/5.jpg",
				name: "Polycarbone Sheet # 05",
				pCode: "PS0035",
			},
		]

	}]);

})();
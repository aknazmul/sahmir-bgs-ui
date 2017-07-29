(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('RaiseFloorController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'Raise Floor';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/raise-floor/1.jpg",
				name: "Raise Floor # 01",
				pCode: "RF0031",
			},
			{
				id: 2,
				imgUrlstyle: "img/raise-floor/2.jpg",
				name: "Raise Floor # 02",
				pCode: "RF0032",
			},
			{
				id: 3,
				imgUrlstyle: "img/raise-floor/3.jpg",
				name: "Raise Floor # 03",
				pCode: "RF0034",
			},
			{
				id: 4,
				imgUrlstyle: "img/raise-floor/4.jpg",
				name: "Raise Floor # 04",
				pCode: "RF0034",
			},
			{
				id: 5,
				imgUrlstyle: "img/raise-floor/5.jpg",
				name: "Raise Floor # 05",
				pCode: "RF0035",
			},
			{
				id: 6,
				imgUrlstyle: "img/raise-floor/6.jpg",
				name: "Raise Floor # 06",
				pCode: "RF0036",
			},
		]

	}]);

})();
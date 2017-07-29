(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('PVCFloorController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'PVC Floor';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/pvc-floor/1.jpg",
				name: "PVC Floor # 01",
				pCode: "PF0031",
			},
			{
				id: 2,
				imgUrlstyle: "img/pvc-floor/2.jpg",
				name: "PVC Floor # 02",
				pCode: "PF0032",
			},
			{
				id: 3,
				imgUrlstyle: "img/pvc-floor/3.jpg",
				name: "PVC Floor # 03",
				pCode: "PF0034",
			}
		]

	}]);

})();
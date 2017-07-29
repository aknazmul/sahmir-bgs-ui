(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('ClipInController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'Clip In';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/clip-in/1.jpg",
				name: "Clip In # 01",
				pCode: "CI0031",
			},
			{
				id: 2,
				imgUrlstyle: "img/clip-in/2.jpg",
				name: "Clip In # 02",
				pCode: "CI0032",
			}
		]

	}]);

})();
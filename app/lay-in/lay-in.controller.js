(function () {
	'use strict';

	angular.module('sahmirbgsApp').controller('LayInController', ['$rootScope', '$document', '$timeout', '$scope', function ($rootScope, $document, $timeout, $scope,) {

		$scope.pageTitle = 'Lay In';

		$scope.products = [
			{
				id: 1,
				imgUrlstyle: "img/lay-in/1.jpg",
				name: "Lay In # 01",
				pCode: "LI0031",
			},
			{
				id: 2,
				imgUrlstyle: "img/lay-in/2.jpg",
				name: "Lay In # 02",
				pCode: "LI0032",
			},
			{
				id: 3,
				imgUrlstyle: "img/lay-in/3.jpg",
				name: "Lay In # 03",
				pCode: "LI0034",
			},
		]

	}]);

})();